const router = require('express').Router();

const userService = require('../services/users');

router.get('/', userService.listUsers);

router.post('/', userService.addUser);

router.get('/:userId', userService.getUser);

router.patch('/:userId', userService.updateUser);

router.delete('/:userId', userService.removeUser);

module.exports = router;