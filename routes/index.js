const express = require('express');
const app = express();
const htmlRouter = require('./html');
const apiRouter = require('./api');

app.use('/html', htmlRouter);
// app.use('/api', apiRouter);
//router.delete
module.exports = app;