const express = require('express');
const app = express();
const htmlRouter = require('./html');
// const apiRouter = require('./api');

app.use('/html', htmlRouter);
module.exports = app;