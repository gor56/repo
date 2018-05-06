class Address {
    constructor(city, street, building, home){
        this.city = city;
        this.street = street;
        this.building = building;
        this.home = home;

    }

    getAddress() {
        return `${this.city} ${this.street} ${this.building} ${this.home}`
    }

}

module.exports = Address