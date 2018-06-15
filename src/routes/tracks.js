const router = require('express').Router();

const trackService = require('../services/tracks');

router.get('/', trackService.listTracks);

router.post('/', trackService.addTrack);

router.get('/:trackId', trackService.getTracks);

router.patch('/:trackId', trackService.updateTrack);

router.delete('/:trackId', trackService.removeTrack);

module.exports = router;