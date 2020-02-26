var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var jahtiRouter = require('./routes/jahti');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/lost/thegame', jahtiRouter);
app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, 'build/')});
  });

module.exports = app;