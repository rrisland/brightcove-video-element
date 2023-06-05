import VideojsVideoElement from 'videojs-video-element';

const MATCH_SRC = /players\.brightcove\.net\/(?<accountId>\d+)\/(?<playerId>\w+)_(?<embedId>\w+)\/index\.html\?videoId=(?<videoId>(\d+|ref:\w+))/;
const EMBED_BASE = 'https://players.brightcove.net/';
const API_BASE = 'https://edge.api.brightcove.com/playback/v1';

class BrightcoveVideoElement extends VideojsVideoElement {
  async load() {
    const matches = this.src.match(MATCH_SRC);
    
    if (matches && matches.groups) {
      const {accountId, playerId, embedId, videoId} = matches.groups;
      
      const config = await fetchConfig(accountId, playerId, embedId);
      const videoInfo = await fetchVideoInfo(accountId, videoId, config.video_cloud.policy_key);
      const sources = videoInfo.sources.filter(src => src.src.startsWith('https'));
      this.src = sources[0].src;
    }
    
    await super.load();
  }
  
  connectedCallback() {
    super.connectedCallback();

    if (this.querySelector('source')) {
      this.load();
    }
  }
}

async function fetchJson(url, options = {}) {
  try {
    const response =  await fetch(url, options);
    const json = await response.json();
    return json;
    
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function fetchConfig(accountId, playerId, embedId) {
  const requestUrl = `${EMBED_BASE}/${accountId}/${playerId}_${embedId}/config.json`;
  return await fetchJson(requestUrl);
}

async function fetchVideoInfo (accountId, videoId, policyKey) {
  const requestUrl = `${API_BASE}/accounts/${accountId}/videos/${videoId}`;
  const options = {
    method: 'GET',
    headers: {'Accept': `application/json;pk=${policyKey}`}
  };
  return await fetchJson(requestUrl, options);
}

if (!globalThis.customElements.get('brightcove-video')) {
  globalThis.customElements.define('brightcove-video', BrightcoveVideoElement);
}

export default BrightcoveVideoElement;
