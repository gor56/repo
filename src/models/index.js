const mongoose = require('mongoose');

const PlaylistsModel = require('./playlists')
const TracksModel = require('./tracks');
const UsersModel = require('./users');

const models = {};

mongoose.connect('mongodb://localhost/bookshelf')
    .then(() => console.log('Connected to mongo.'))
    .catch(console.log);

models.PlaylistsModel = PlaylistsModel;
models.TracksModel = TracksModel;
models.UsersModel = UsersModel;

module.exports = models;