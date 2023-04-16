var express = require('express');
const torrentStream = require("torrent-stream");
const router = express.Router();
const db = require("../leveldb");
const uuid = require("uuid");
const numeral = require("numeral");
const {S3FS} = require("s3fs");
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
router.get('/details', function (req, res, next) {
    const magnetURL = `magnet:?xt=urn:btih:${req.query.hash}&dn=${req.query.dn}&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce`
    const engine = torrentStream(magnetURL);

    engine.on('ready', async () => {
        const filenamesInOriginalOrder = engine.files.map(file => file.path)
        // console.log(engine)
        const streamId = uuid.v4();
        await db.put(req.socket.remoteAddress  + ":" + streamId, JSON.stringify({
            dn: req.query.dn,
            hash: engine.torrent.infoHash,
            name: engine.torrent.name,
            attempts: 0
        }));
        res.header("Access-Control-Allow-Origin", "*");
        res.json({
            name: engine.torrent.name,
            private: engine.torrent.private,
            stream_id: streamId,
            dn: req.query.dn,
            name_encoded: Base64.encode(engine.torrent.name),
            hash: engine.torrent.infoHash,
            length: engine.torrent.length,
            pieces: engine.torrent.pieces,
            files: Array.from(engine.files)
                .sort((file1, file2) => file1.path.localeCompare(file2.path))
                .map(file => ({
                    name: file.name + ' : ' + bytes(file.length),
                    value: filenamesInOriginalOrder.indexOf(file.path),
                    hash: Base64.encode(file.name + '::::' + file.length)
                }))
        });
        engine.destroy();
    });
});
/* GET home page. */
router.get('/play', async (req, res, next) => {
    const instance = JSON.parse(await db.get(req.socket.remoteAddress  + ":" + req.query.stream_id));
    if (!instance || instance.attempts >= 20) return res.status(400).json({"m":"UnAuthorized Link expired"}) //&& (instance && db.del(req.socket.remoteAddress  + ":" + req.query.stream_id));
    const fileHash = Base64.decode(req.query.file);
    const magnetURL = `magnet:?xt=urn:btih:${instance.hash}&dn=${instance.dn}&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce`
    const engine = torrentStream(magnetURL);
    res.setHeader('Transfer-Encoding', 'chunked');
    engine.on('ready', async () => {
        res.setHeader('Content-Type', 'video/mp4');
        const file = engine.files.find(file => (file.name === fileHash.split("::::")[0]) && (`${file.length}` === fileHash.split("::::")[1]));
        const stream = file.createReadStream();
        stream.on("data", data => res.write(data));
    });
    engine.on("idle", () => res.end());
    await db.put(req.socket.remoteAddress  + ":" + req.query.stream_id, JSON.stringify({...instance, attempts: instance.attempts + 1}));
});
// router.get("/index-movies", async (req, res) => {
//     const movies
// });
module.exports = router;
