module.exports = (Playlists) => {
    /**
     * @description List all playlists.
     */
    Playlists.listAllPlaylists = (query) => {
        return Playlists.find(query);
    };

    /**
     * @description Get playlists by Id.
     */
    Playlists.getPlaylistById = (playslistsId) => {
        return Playlists.findOne({_id: playslistsId});
    };

    /**
     * @description Add playlists.
     */

    Playlists.createPlaylist = (playlistData) => {
        return Playlists.create(playlistData);
    };

    /**
     * @description Delete playlists by Id.
     */
    Playlists.removePlaylistById = (playlistId) => {
        return Playlists.deleteOne({_id: playlistId});
    };

    /**
     * @description Update Playlist by Id.
     */
    Playlists.updatePlaylistById = (playlistsId, updateData) => {
        return Playlists.findOneAndUpdate({_id: playlistsId}, updateData);
    }
};