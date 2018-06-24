const express = require('express');
const bodyParser = require('body-parser');

const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }))
app.use(bodyParser.json({ limit: '5mb' }))
app.use((req, res, next) => next(new Error('The specified resource path does not exist.')));

const { tracks, users, playlists } = require('./routes');

app.use('/tracks', tracks);
app.use('/users', users);
app.use('/plalists', playlists);

app.use((err, req, res, next) => {
    res.status(500).json({ error: err})
});

module.exports = app;