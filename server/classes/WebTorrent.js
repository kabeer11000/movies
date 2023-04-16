const _webtorrent = require("webtorrent");
class WebTorrent extends _webtorrent {
    addPromised = (...args) => new Promise((resolve, reject) => {
        // this.add(...args, resolve);
        this.add(...args, (t) => t.on("ready", () => resolve(t)));
    })
}
module.exports = WebTorrent;