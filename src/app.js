const express = require('express');

const { tracks, users } = require('./routes');

const app = express();

app.use('/tracks', tracks);
app.use('/users', users);

app.use((err, req, res, next) => {
    res.status(500).json({ error: err})
})

module.exports = app;