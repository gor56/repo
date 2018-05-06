class PhoneBook {

    constructor(){
        this.contacts = [];
    }

    add(contact) {
        this.contacts.push(contact);
    }

    get(id) {
        return this.contacts.find((value) => {
            return value.id === id;
        })
    }

    delete(id) {

        let index = this.contacts.findIndex((value) => {
            return value.id === id;
        })

        if( index === -1){
            return null
        }
        return this.contacts.splice(index, 1);

    }

}

module.exports = PhoneBook
