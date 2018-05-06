class Contact {
    /**
     *
     * @param {string} fullName
     * @param {string} phone
     * @param {string} email
     * @param {string} address
     */
    constructor(id, fullName, phone, email, address){
        this.id = id;
        this.fullName = fullName;
        this.phone = phone;
        this.email = email;
        this.address = address
    }

}

module.exports = Contact