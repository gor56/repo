const PlaylistModel = require('../../models').PlaylistModel;

function listPlaylists(req, res, next) {
    PlaylistModel.listAllPlaylists()
        .then((playlists) => {
            const response = {
                data: playlists,
                message: 'Successfully fetched playlists.'
            };
            res.status(200).json(response)
        })
        .catch(next);
}

function getPlaylists(req, res, next) {
    const {id} = req.body;
    const playlistId = {trackId: id};
    PlaylistModel.getPlaylistById(playlistId)
        .then((playlist) => {
            const response = {
                target: playlist,
                msg: 'Requested playlist'
            };
            res.status(200).json(response);
        })
        .catch(next);

}

function addPlaylists(req, res, next) {
    const {} = req.body;
    const playlist = {};
    PlaylistModel.createPlaylist(playlist)
        .then(() => {
            const response = {
                playlist: data,
            };
            res.status(200).json(response);
        })
        .catch(next);
}

function updatePlaylist(req, res, next) {
    const {id, data} = req.body;
    const newPlaylist = {trackId: id, data};
    PlayslistModel.updatePlaylistById(newPlaylist)
        .then((data) => {
            const newPlaylist = {
                playlist: data,
                msg: 'Playlist is updated'
            };
            res.status(200).json(newPlaylist);
        })
        .catch(next);
}

function removePlaylist(req, res, next) {
    const {id} = req.body;
    const playlistId = {trackId: id};
    PlaylistModel.removePlaylistById(playlistId)
        .then(() => {
            const response = {
                msg: 'track is deleted'
            };
            res.status(200).json(response);
        })
        .catch(next);
}

module.exports = {
    listPlaylists,
    getPlaylists,
    addPlaylists,
    updatePlaylist,
    removePlaylist
};