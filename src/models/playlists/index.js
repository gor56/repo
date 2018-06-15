const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const PlaylistsSchema = new Schema ({
    public: {
        type: Boolean,
        default: true,
        enum: [true, false]
    },
    tracks: [{
        type: Schema.Types.ObjectId,
        ref: 'Tracks'
    }],
    createdAt: Date.now()
});

const Playlists = mongoose.model('Playlists', PlaylistsSchema);

module.exports = Playlists;
