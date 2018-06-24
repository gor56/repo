const UserModel = require('../../models').UsersModel;

function listUsers(req, res, next) {
    UserModel.listAllUsers()
        .then((users) => {
            const response = {
                data: users,
                message: 'Successfully fetched users.'
            };
            res.status(200).json(response)
        })
        .catch(next);
}

function getUser(req, res, next) {
    const {userId} = req.body;
    const id = {userId};
    UserModel.getUserById(id)
        .then((user) => {
            const response = {
                data: user,
                msg: 'Requested user'
            };
            res.status(200).json(response)
        })
        .catch(next);

}

function registerUser(req, res, next) {
    const {firstName, lastName, email} = req.body;
    const createData = {firstName, lastName, email};
    UserModel.createUser(createData)
        .then((data) => {
            const user = {
                user: data,
                msg: 'Welcome to DreamSound'
            };
            res.status(201).json(user);
        })
        .catch(next);
}

function updateUser(req, res, next) {
    const {id, data} = req.body;
    const updateData = {trackId: id, data};
    UserModel.updateUserById(updateData)
        .then((data) => {
            const response = {
                user: data,
                msg: 'Field is successful deleted'
            };
            res.status(200).json(response);
        })
        .catch(next);
}

function removeUser(req, res, next) {
    const {id} = req.body;
    const removeById = {trackId: id};
    UserModel.removeUserById(removeById)
        .then(() => {
            const response = {
                msg: 'User deleted'
            };
            res.status(200).json(response)
        })
        .catch(next);

}

module.exports = {
    listUsers,
    getUser,
    registerUser,
    updateUser,
    removeUser
};