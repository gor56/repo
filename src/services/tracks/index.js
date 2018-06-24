const TrackModel = require('../../models').TracksModel;

function listTracks (req, res, next) {
    TrackModel.listAllTracks()
        .then((tracks) => {
            const response = {
                data: tracks,
                message: 'Successfully fetched tracks.'
            };
            res.status(200).json(response)
        })
        .catch(next);
}

function getTracks (req, res, next) {
    const {trackId} = req.body;
    const id = {trackId};
    TrackModel.getTracksById(id)
        .then((track)=>{
            const response = {
                track: track,
                msg: 'Requested track'
            };
            res.status(200).json(response);
        })
        .catch(next);

}

function addTrack (req, res, next) {
    const {author, duration, name, tags} = req.body;
    const track = {author, duration, name, tags};
    TrackModel.createTrack(track)
        .then(()=>{
            const response = {
                track: data,
            };
            res.status(200).json(response);
        })
        .catch(next);
}

function updateTrack (req, res, next) {
    const {id, data} = req.body;
    const updatedTrack = {trackId: id, data};
    TrackModel.updateTrackById(updatedTrack)
        .then((data)=>{
            const newTrack = {
                track: data,
                msg: 'Track is updated'
            };
            res.status(200).json(newTrack);
        })
        .catch(next);
}

function removeTrack (req, res, next) {
    const {id} = req.body;
    const trackId = {trackId: id};
    TrackModel.removeTrackById(trackId)
        .then(()=>{
            const response = {
                msg: 'track is deleted'
            };
            res.status(200).json(response);
        })
        .catch(next);
}

module.exports = {
    listTracks,
    getTracks,
    addTrack,
    updateTrack,
    removeTrack
};