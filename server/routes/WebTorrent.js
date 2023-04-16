var express = require('express');
// const torrentStream = require("torrent-stream");
const router = express.Router();
const db = require("../leveldb");
const uuid = require("uuid");
const numeral = require("numeral");
const WebTorrent = require("../classes/WebTorrent");
const client = new WebTorrent({
    tracker: false,
    // maxConns: 20,
    // path: "./torrent-cache"
});

const S3FS = require("s3fs");
const bytes = function (num) {
    return numeral(num).format('0.0b')
}
const fsImp = new S3FS('kabeers-movies', {
    region: 'us-east-1',
    endpoint: 'https://s3.filebase.com',
    accessKeyId: '8E3B5E5290B83DEA900C',
    secretAccessKey: process.env.FILE_BASE_SECRET,
    signatureVersion: 'v4'
});

const Base64 = {
    encode: text => Buffer.from(text).toString('base64'),
    decode: text => Buffer.from(text, 'base64').toString('ascii')
}
router.get("/s3", async (req, res) => {
    fsImp.writeFile("test.json", JSON.stringify({"key": "value"}))
    res.json("s")
})

router.get('/details', async (req, res, next) => {
    // const magnetURL = `magnet:?xt=urn:btih:${req.query.hash}&dn=${req.query.dn}&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce`
    // if (!client.get(req.query.hash))
    console.log("Request Received")
    const torrent = (await client.get(req.query.hash)) || (await client.addPromised(req.query.hash, {
        destroyStoreOnDestroy: true,
        maxWebConns: 20,
        private: true,
        announce: [],
        path: "./torrent-cache"
    }));
    const streamId = uuid.v4();
    // res.cookie((req.socket.remoteAddress + ":" + streamId), JSON.stringify({
    //     dn: req.query.dn,
    //     infoHash: torrent.infoHash,
    //     hash: req.query.hash,
    //     name: torrent.name,
    //     attempts: 0,
    //     announce: torrent.announce,
    // }))
    console.log("Saving: ", (req.socket.remoteAddress + ":" + streamId))
    await db.put(req.socket.remoteAddress + ":" + streamId, JSON.stringify({
        dn: req.query.dn,
        infoHash: torrent.infoHash,
        hash: req.query.hash,
        name: torrent.name,
        attempts: 0,
        announce: torrent.announce,
    }));
    console.log(torrent.files)
    res.header("Access-Control-Allow-Origin", "*");
    res.json({
        name: torrent.name,
        // metadata: {
        // ["@metadata"]: torrent.metadata.toString("base64"),
        // },
        private: torrent.private,
        stream_id: streamId,
        dn: req.query.dn,
        // name_encoded: Base64.encode(torrent.name),
        hash: torrent.infoHash,
        length: torrent.length,
        files: Array.from(torrent.files)
            // .sort((file1, file2) => file1.path.localeCompare(file2.path))
            .map(file => ({
                name: file.name,
                size: file.length,
                size_parsed: bytes(file.length),
                hash: Base64.encode(file.name + '::::' + file.length)
            }))
    });
    // engine.destroy();
    // });

    // */
});
/* GET home page. */
router.get('/play', async (req, res, next) => {
    const instance = JSON.parse(await db.get(req.socket.remoteAddress + ":" + req.query.stream_id));
    // const instance = req.cookies[(req.socket.remoteAddress + ":" + req.query.stream_id)] ? JSON.parse(req.cookies[(req.socket.remoteAddress + ":" + req.query.stream_id)]) : null;
    // console.log("Opening: ", req.socket.remoteAddress + ":" + req.query.stream_id, req.cookies)
    if (!instance || instance.attempts >= 20) return res.status(400).json({"m": "UnAuthorized Link expired"}) //&& (instance && db.del(req.socket.remoteAddress  + ":" + req.query.stream_id));
    const fileHash = Base64.decode(req.query.file);
    const torrent = await client.get(instance.hash);
    if (!torrent) return res.status(400).json({m: "Not Found"})
    res.setHeader('Transfer-Encoding', 'chunked');
    res.setHeader('Content-Type', 'video/mp4');
    const file = torrent.files.find(file => (file.name === fileHash.split("::::")[0]) && (`${file.length}` === fileHash.split("::::")[1]));
    const stream = file.createReadStream();
    stream.on("data", data => res.write(data));
    stream.on("end", () => res.end());
    await db.put(req.socket.remoteAddress + ":" + req.query.stream_id, JSON.stringify({
        ...instance,
        attempts: instance.attempts + 1
    }));
    const values = await new Promise(async (resolve) => {
        const values = [];
        const keyStream = db.createReadStream({ keys: false, values: true });
        keyStream.on("data", (value) => values.push(value));
        keyStream.on("end", () => resolve(values));
    });
    if (!values.filter(value => value.stream_id !== instance.stream_id).find( value => value.hash === instance.hash)) return torrent.destroy();
    // if (!keys.find(key => key.endsWith()))
});

module.exports = router;
