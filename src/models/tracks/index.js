const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const TracksSchema = new Schema ({
    author: String,
    name: String,
    duration: Number,
    tags: [String]
});

const Tracks = mongoose.model('Tracks', TracksSchema);

module.exports = Tracks;