var express = require('express');
require("dotenv").config();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/WebTorrent');

var app = express();
app.set("json spaces", 3)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/build')));
app.use("/watch", (req, res) => res.sendFile(path.join(__dirname, "public/build/index.html")));
app.use('/stream/v1', indexRouter);
// app.use('/users', usersRouter);

app.post('/github-autoupdate', (req, res) => {
    const cmd = require("node-cmd");
    if (req.headers['x-github-event'] === "push") {
        cmd.run('chmod 777 github.sh'); /* :/ Fix no perms after updating */
        cmd.get('./github.sh', (err, data) => {  // Run our script
            if (data) console.log(data);
            if (err) console.log(err);
        });
        cmd.run('refresh');  // Refresh project

        console.log("> [GIT] Updated with origin/master");
    }
});
module.exports = app;
