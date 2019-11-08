
$.each([ "foo", "bar", "baz" ], function( idx, val ) {
    console.log( "element " + idx + " is " + val );
});

$.each({ foo: "bar", baz: "bim" }, function( k, v ) {
    console.log( k + " : " + v );
});

//            ООП в прототипном стиле     ///

//      Встроенные "классы" в JavaScript

//Перепишите в виде класса

function CoffeeMachine(power) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.run = function() {
        setTimeout(function() {
            alert( 'Кофе готов!' );
        }, getTimeToBoil());
    };

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();

//Решение

function CoffeeMachine(power) {
    // свойства конкретной кофеварки
    this._power = power;
    this._waterAmount = 0;
}

// свойства и методы для всех объектов класса
CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

CoffeeMachine.prototype._getTimeToBoil = function() {
    return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
};

CoffeeMachine.prototype.run = function() {
    setTimeout(function() {
        alert( 'Кофе готов!' );
    }, this._getTimeToBoil());
};

CoffeeMachine.prototype.setWaterAmount = function(amount) {
    this._waterAmount = amount;
};

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();



//////////////////////////////////////////////////

// Свойство F.prototype и создание объектов через new
/*var animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

var rabbit = new Rabbit("Кроль"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true*/

//////////////////////////////////////////////////////

/*var head = {
    glasses: 1
};

var table = {
    pen: 3,
    __proto__: head
};

var bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

var pockets = {
    money: 2000,
    __proto__: bed
};

alert(pockets.pen);
alert( table.money );
alert( bed.glasses ); // 1*/

// pockets -> bed -> table -> head.

//      ООП в прототипном стиле

/*let animal = {
    eats: true
};
let rabbit = {
    jumps: true,
    __proto__: animal
};

alert(rabbit.hasOwnProperty('jumps')); // true: jumps принадлежит rabbit
alert(rabbit.hasOwnProperty('eats')); // false: eats не принадлежит


for(let key in rabbit) {
    if (!rabbit.hasOwnProperty(key)) continue; // пропустить "не свои" свойства
    alert(key + " " + rabbit[key]); // выводит только "jumps"
}*/

/*var animal = {
    jumps: null
};
var rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;*/

