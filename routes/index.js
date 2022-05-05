var express = require('express');
const torrentStream = require("torrent-stream");
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const magnetURL = `magnet:?xt=urn:btih:${req.query.hash}&dn=${req.query.dn}&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce`
  const engine = torrentStream(magnetURL);

  res.setHeader('Content-Type', 'video/mp4');
  res.setHeader('Transfer-Encoding', 'chunked');
  engine.on('ready', function() {
    const file = engine.files[0]
    // engine.files.forEach(function(file) {
      console.log('filename:', file.name);
      const stream = file.createReadStream();
      stream.on("data", data => res.write(data));
      stream.on("end", () => res.end());
      // stream is readable stream to containing the file content
    // });
  });
});

module.exports = router;
