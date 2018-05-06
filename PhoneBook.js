let Person = require('./phone-book/person');
let Address = require('./phone-book/address');
let Contact = require('./phone-book/contact');
let PhoneBook = require('./phone-book/phone-book');


let person1 = new Person('Jon', 'Snow', 1);
let person2 = new Person('Sansa', 'Stark', 2);
let person3 = new Person('Aria', 'Stark', 3);

let address = new Address('yerevan', 'komitas', '14', '46');

let contact1 = new Contact(person1.id, person1.fullName(), '111-222', 'test1@test.com', address.getAddress());
let contact2 = new Contact(person2.id, person2.fullName(), '111-333', 'test2@test.com', address.getAddress());


let phoneBook = new PhoneBook();


phoneBook.add(contact1)
phoneBook.add(contact2)

console.log('before ', phoneBook.contacts);

phoneBook.delete(6);

console.log('after ', phoneBook.contacts);
