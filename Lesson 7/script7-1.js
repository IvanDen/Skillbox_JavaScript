//           ФУНКЦИОНАЛЬНОЕ НАСЛЕДОВАНИЕ

// Базовая (родительская) функция конструктор
function User(firstName, lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    }
}
// Дочерняя функция-конструктор
function Manager(firstName, lastName)
{
    User.apply(this, arguments);
    // User.call(this, firstName, lastName);

    this.sayHello = function() {
        alert('Здравствуйте, чем я могу помочь?');
    };

    this.changeName = function (name) {
        this.firstName = name;
    }
}

let u = new User('John', 'Doe');
let m = new Manager('Jane', 'Doe');

//             ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ

// Базовая (родительская) функция конструктор
function User(firstName, lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;

}

//прототип конструктора
User.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
};

User.prototype.sayHello = function() {
    alert('Hello!!')
};


// Дочерняя функция-конструктор
function Manager(firstName, lastName)
{
    User.apply(this, arguments);
    // User.call(this, firstName, lastName);

    this.sayHello = function() {
        alert('Здравствуйте, чем я могу помочь?');
    };

    this.changeName = function (name) {
        this.firstName = name;
    }
}

let u = new User('John', 'Doe');
let m = new Manager('Jane', 'Doe');