# Litemoji

This tool is hugely inspired by https://github.com/va1da5/simple-emoji-picker and as said in their readme the reasoning behind it is:

> Linux ecosystem lacks a minimal and straight forward way to pick emojis. Some options are an overkill, others require multiple steps to simply get emoji into a clipboard. This simple tool aims fill the gap. The interface relies on an awesome [nolanlawson/emoji-picker-element](https://github.com/nolanlawson/emoji-picker-element) project. [Webview](https://github.com/webview/webview) was used to bundle the whole application into a single executable file.

> Only Linux is currently supported. The rest of the platforms are covered natively.

The go stuff is a mix from these:

- https://github.com/va1da5/simple-emoji-picker (main.go)
- https://github.com/mitchpk/webview/commit/ 1e30361dccf1bb071c447701f7dffc22f3442afc (Hide and Show methods for the webview)
- https://github.com/wilesun/webview (Center method for the webview)

The difference between litemoji and simple-emoji-picker is that we use `emoji-mart` instead of `nolanlawson/emoji-picker-element` because it has better keyboard navigation and doesn't rely on React.

This needs docker to build, you can build it with `yarn build`

There are no releases available to download yet because I neet to setup the CI to build and haven't had the time for this, srry :3
