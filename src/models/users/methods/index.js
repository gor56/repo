module.exports = (Users) => {
    /**
     * @description List all users.
     */
    Users.listAllUsers = (query) => {
        return Users.find(query);
    };

    /**
     * @description List all users.
     */
    Users.getUserById = (userId) => {
        return Users.findOne({ _id: userId});
    };

    /**
     * @description List all users.
     */
    Users.createUser = (userData) => {
        return Users.create(userData);
    };

    /**
     * @description List all users.
     */
    Users.removeUserById = (userId) => {
        return Users.deleteOne({ _id: userId});
    };

    /**
     * @description List all users.
     */
    Users.updateUserById = (userId, updateData) => {
        return Users.findOneAndUpdate({ _id: userId}, updateData);
    }
};
