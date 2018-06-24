const router = require('express').Router();

const playlistService = require('../services').playlists;

router.get('/', playlistService.listPlaylists);

router.post('/', playlistService.addPlaylists);

router.get('/:playlistId', playlistService.getPlaylists);

router.patch('/:playlistId', playlistService.updatePlaylist);

router.delete('/:playlistId', playlistService.removePlaylist);

module.exports = router;