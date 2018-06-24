module.exports = (Tracks) => {
    /**
     * @description List all tracks.
     */
    Tracks.listAllTracks = (query) => {
        return Tracks.find(query);
    };

    /**
     * @description Get tracks by Id.
     */
    Tracks.getTracksById = (trackId) => {
        return Tracks.findOne({ _id: trackId});
    };

    /**
     * @description Add tracks.
     */

    Tracks.createTrack = (trackData) => {
        return Tracks.create(trackData);
    };

    /**
     * @description Delete tracks by Id.
     */
    Tracks.removeTrackById = (trackId) => {
        return Tracks.deleteOne({ _id: trackId});
    };

    /**
     * @description Update track by Id.
     */
    Tracks.updateTrackById = (TracksId, updateData) => {
        return Tracks.findOneAndUpdate({ _id: TracksId}, updateData);
    }
};
