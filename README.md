# `<brightcove-video>`

[![Version](https://img.shields.io/npm/v/brightcove-video-element?style=flat-square)](https://www.npmjs.com/package/brightcove-video-element)
[![Badge size](https://img.badgesize.io/https:/cdn.jsdelivr.net/npm/brightcove-video-element/+esm?label=gzip&compression=gzip&style=flat-square)](https://cdn.jsdelivr.net/npm/brightcove-video-element/+esm)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for Brightcove Player (Video.js) with an API that matches the [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) API.  
This project is built by extending [`<videojs-video>`](https://github.com/luwes/videojs-video-element).

- 🏄‍♂️ Compatible [`HTMLMediaElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) API
- 🕺 Seamlessly integrates with [Media Chrome](https://github.com/muxinc/media-chrome)

## Example ([Codepen](https://codepen.io/rrisland/pen/BaqXvWg))

<!-- prettier-ignore -->
```html
<script type="module" src="https://esm.run/brightcove-video-element"></script>
<brightcove-video controls src="https://players.brightcove.net/1752604059001/Nynfq6Yde_default/index.html?videoId=4029697544001"></brightcove-video>
```

## Install

First install the NPM package:

```bash
npm install brightcove-video-element
```

Import in your app javascript (e.g. src/App.js):

```js
import 'brightcove-video-element';
```

Optionally, you can load the script directly from a CDN using [ESM Run](https://www.jsdelivr.com/?docs=esm):

<!-- prettier-ignore -->
```html
<script type="module" src="https://esm.run/brightcove-video-element"></script>
```

This will register the custom elements with the browser so they can be used as HTML.

## Related

- [Media Chrome](https://github.com/muxinc/media-chrome) Your media player's dancing suit. 🕺
- [`<videojs-video>`](https://github.com/luwes/videojs-video-element) A custom element for Video.js.
- [`<youtube-video>`](https://github.com/muxinc/youtube-video-element) A custom element for the YouTube player.
- [`<vimeo-video>`](https://github.com/luwes/vimeo-video-element) A custom element for the Vimeo player.
- [`<spotify-audio>`](https://github.com/luwes/spotify-audio-element) A custom element for the Spotify player.
- [`<jwplayer-video>`](https://github.com/luwes/jwplayer-video-element) A custom element for the JW player.
- [`<wistia-video>`](https://github.com/luwes/wistia-video-element) A custom element for the Wistia player.
- [`<cloudflare-video>`](https://github.com/luwes/cloudflare-video-element) A custom element for the Cloudflare player.
- [`<hls-video>`](https://github.com/muxinc/hls-video-element) A custom element for playing HTTP Live Streaming (HLS) videos.
- [`castable-video`](https://github.com/muxinc/castable-video) Cast your video element to the big screen with ease!
- [`<mux-player>`](https://github.com/muxinc/elements/tree/main/packages/mux-player) The official Mux-flavored video player custom element.
- [`<mux-video>`](https://github.com/muxinc/elements/tree/main/packages/mux-video) A Mux-flavored HTML5 video element w/ hls.js and Mux data builtin.
