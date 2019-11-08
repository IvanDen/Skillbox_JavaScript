/*function Machine(power) {
    this._power = power;
    this._enabled = false;

    let self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}

function Fridge(power)
{
    // унаследовать
    Machine.apply(this, arguments);

    let food = []; // приватное свойство food

    this.addFood = function () {
        if (!this._enabled) {
            throw new Error("Fridge is not turned on")
        }
        if (food.length + arguments.length > this._power / 100) {
            throw new Error("Cannot add, not enough power");
        }
        for (let i = 0; i < arguments.length; i++) {
            food.push(arguments[i]); // add all from arguments
        }
    };
    this.getFood = function () {
        // we copy food in the new array that manipulations with it did not change food
        return food.slice();
    };
    this.filterFood = function (filter) {
        return food.find(filter);
    };

    this.removeFood = function (item) {
        let idx = food.indexOf(item);
        if (idx != -1) food.splice(idx, 1);
    };
    let parentDisable = this.disable;
    this.disable = function () {
        if (food.length) {
            throw new Error("You can not turn off: inside the food");
        }
        parentDisable();
    };
}
let fridge = new Fridge(500);*/

/*
fridge.enable();
fridge.addFood({
    title: "котлета",
    calories: 100
});
fridge.addFood({
    title: "сок",
    calories: 30
});
fridge.addFood({
    title: "зелень",
    calories: 10
});
fridge.addFood({
    title: "варенье",
    calories: 150
});

console.log('Всего еды: ' + fridge.getFood());

let dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
});

fridge.removeFood("нет такой еды"); // без эффекта
alert( fridge.getFood().length ); // 4

dietItems.forEach(function(item)
{
    alert(item.title); // сок, зелень
    fridge.removeFood(item);
});

alert(fridge.getFood().length); // 2
*/




/*fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "зелень");
fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды*/





/*function Machine(params) {
    // локальные переменные и функции доступны только внутри Machine
    var privateProperty;

    // публичные доступны снаружи
    this.publicProperty = ...;

    // защищённые доступны внутри Machine и для потомков
    // мы договариваемся не трогать их снаружи
    this._protectedProperty = ...
}

var machine = new Machine(...)
machine.public();*/




/*function  Machine(power)
{
    let food;
    food = [];

    this._power = power;

    this._enabled = false;

    let self = this;

    this.enable = function () {
        // используем внешнюю переменную вместо THIS
        self._enabled = true;
    };

    this.disable = function () {
        self._enabled = false
    };
}

function CoffeeMachine(power)
{
    Machine.apply(this, arguments); // наследовать

    let waterAmount;

    this.setWaterAmount = function (amount) {
        waterAmount = amount;
    };

    let parentEnable = this.enable;

    this.enable = function ()
    {
        parentEnable(); // можно вызвать и без this
        this.run();
    };

    function onReady() {
        alert('Кофе готово!')
    }

    this.run = function() {
        if (!this._enabled) {
            throw new Error("Кофеварка выключена")
        }
        setTimeout(onReady, 1000);
    };
}*/

// Fridge может добавить и свои аргументы,
// которые в Machine не будут использованы




// Напишите конструктор User для создания объектов:

/*function User()
{
    let firstName, surname;

     this.setFirstName = function (newfirstName) {
        firstName = newfirstName;
    };
    this.setSurname = function (newSurname) {
        surname = newSurname;
    };
    this.getFullName = function () {
        return firstName + ' ' + surname;
    }

}

let user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() ); // Петя Иванов*/

// this is coffeeMachine, version 2.0

/*function CoffeeMachine(power, capacity) { // capacity - ёмкость кофеварки
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    // "умная" установка свойства
    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };
    this.getWaterAmount = function() {
        return waterAmount;
    };

    function onReady() {
        alert( 'Кофе готов!' );
    }

    this.run = function() {
        setTimeout(onReady, getTimeToBoil());
    };

}

var coffeeMachine = new CoffeeMachine(1000, 500);
coffeeMachine.setWaterAmount(600); // упс, ошибка!*/


// this is coffeeMachine, example Homework

function CoffeeMachine(power) {
    this.waterAmount = 0;

    let WATER_HEAT_CAPACITY = 4200;
    let timerID;
    let self = this;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        alert( 'Кофе готово!' );
    }

    this.run = function() {
        timerID = setTimeout(onReady, getBoilTime());
    };
    this.stop = function () {
        clearTimeout(timerID);

    }
}

let coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop(); // кофе приготовлен не будет
