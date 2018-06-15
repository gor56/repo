const UserModel = require('../../models').UsersModel;

function listUsers (req, res, next) {
    UserModel.listAllUsers({})
        .then((users) => {
            const response = {
                data: users,
                message: 'Successfully fetched users.'
            };
            res.status(200).json(response)
        })
        .catch(next)
}

function getUser (req, res, next) {

}

function addUser (req, res, next) {

}

function updateUser (req, res, next) {

}

function removeUser (req, res, next) {

}

module.exports = {
    listUsers,
    getUser,
    addUser,
    updateUser,
    removeUser
};