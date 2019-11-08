'use strict';
//              Функция конструктор
//               привязка контекста (call apply и bind)

var a = {
    name: 'foo',
    getName: function () {
        console.log(this);
        return this.name
    }
};

var b = {
    name: 'bar',
    getName: a.getName.bind(a)
};




/*
function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isAdmin = false;
}

function getFullName (prefix, suffix) {
    // console.log(this);
    return prefix
    + ', '
    + this.firstName
    + ' '
    + this.lastName
    + suffix;
}
*/


//                        создание экземпляров объекта

/*var myUser = new User('Inan', 'Denisko');
var anotherUser = new User('Denis', 'Ivanov');*/

// console.log(myUser.getFullName());
// console.log(anotherUser.getFullName());



// Функция конструктор
function User(firstName, lastName) {
    this.firstName = firstName; // структура объекта
    this.lastName = lastName;
    this.isAdmin = false;

    this.getFullName = function() { // метот
        console.log(this);
        return this.firstName + ' ' + this.lastName;
    }
}

// создание экземпляров объекта

var myUser = new User('Inan', 'Denisko');
var anotherUser = new User('Denis', 'Ivanov');

console.log(myUser.getFullName());
console.log(anotherUser.getFullName());
