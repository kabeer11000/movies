var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
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

module.exports = app;
