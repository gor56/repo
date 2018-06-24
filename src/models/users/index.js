const mongoose  = require('mongoose');
const setModelMethods = require('./methods');

const Schema = mongoose.Schema;

const UsersSchema = new Schema ({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
        index: true
    },
    password: String,
    playlists: [{
        type: Schema.Types.ObjectId,
        ref: 'Playlists'
    }],
    favoriteTags: [String]
});

const Users = mongoose.model('Users', UsersSchema);

setModelMethods(Users);

module.exports = Users;