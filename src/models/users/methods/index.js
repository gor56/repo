module.exports = (Users) => {
    /**
     * @description List all users.
     */
    Users.listAllUsers = (query) => {
        return Users.find(query);
    };

    /**
     * @description Get users by Id.
     */
    Users.getUserById = (userId) => {
        return Users.findOne({ _id: userId});
    };

    /**
     * @description Create user.
     */
    Users.createUser = (userData) => {
        console.log('ashfgvhjgfh')
        const {firstName, lastName, email} = userData
        return Users.create({firstName, lastName, email})
    };

    /**
     * @description Delete users by Id.
     */
    Users.removeUserById = (userId) => {
        return Users.deleteOne({ _id: userId});
    };

    /**
     * @description Update user by Id.
     */
    Users.updateUserById = (userId, updateData) => {
        return Users.findOneAndUpdate({ _id: userId}, updateData);
    }
};
