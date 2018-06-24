const router = require('express').Router();
const userService = require('../services/users');
const validations = require('../validations/user-validation/index');

router.get('/', userService.listUsers);

router.post('/', userService.registerUser);

router.get('/:userId', userService.getUser);

router.patch('/:userId', userService.updateUser);

router.delete('/:userId', userService.removeUser);

module.exports = router;