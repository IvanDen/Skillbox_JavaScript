







/*// Явное указание this: "call", "apply"
function sum() { // сумирует фргументы: sum(1, 2, 3) = 6;
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    });
}

function mul() { // перемножает фргументы: mul(1, 2, 3) = 24
    return [].reduce.call(arguments, function (a, b) {
        return a * b;
    });
}
function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
}

alert(applyAll(sum, 1, 2, 3)); // 6
alert(applyAll(mul, 2, 3, 4));  // 24
alert(applyAll(Math.max, 2, -2, 3)); // 3
alert(applyAll(Math.min, 2, -2, 3)); // -2*/



/*var user = {
    firstName: "Вася",
    surname: "Петров"
};

Object.defineProperty(user, "fullName", {

    get: function() {
        return this.firstName + ' ' + this.surname;
    },

    set: function(value) {
        var split = value.split(' ');
        this.firstName = split[0];
        this.surname = split[1];
    }
});

user.fullName = "Петя Иванов";
alert( user.firstName ); // Петя
alert( user.surname ); // Иванов

console.log(user);*/




//    функция конструктор

/*
function Calculator() {
    var methods = {
        "-": function (a, b) {
            return a - b;
        },
        "+": function (a, b) {
            return a + b;
        }
    };
    this.calculate = function(str) {

        var split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return methods[op](a, b);
    }

    this.addMethod = function(name, func) {
        methods[name] = func;
    };
}

var calc = new Calculator();

calc.addMethod("*", function (a, b) {
    return a * b;
});
calc.addMethod("/", function (a, b) {
    return a / b;
});
calc.addMethod("**", function (a, b) {
    return Math.pow(a, b);
});
var result = calc.calculate("2 ** 3");
alert(result); // 8

alert( calc.calculate("3 / 7") );
*/


//создать Accumulator при помощи консруктора
/*function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt('value? dobavit', 0);
    };
}



var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение*/



//калькулятор
/*function Calculator() {
    this.read = function () {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };
    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
        return this.a * this.b
    };
}

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );*/


/*               Цепочка вызовов

var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
       this.step++;
       return this;
    },
    down: function() { // вниз по лестнице
       this.step--;
       return this;
    },
    showStep: function() { // вывести текущую ступеньку
       alert(this.step);
       return this;
    }
};
ladder.up().up().down().up().down().showStep();*/

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();


/*           Создайте объект calculator с тремя методами:
var calculator = {
    sum: function () {
        return this.a + this.b;
    },

    mul: function () {
        return this.a * this.b;
    },
    read: function () {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());*/



/*var arr = ["a", "b"];

arr.push(function () {
    alert(this);
})
//obj = arr, metod =  [2]; (arr[2]();) - вызов функции как метода
arr[2](); //*/

/*
"use strict"

var obj, method;

obj = {
    go: function() { alert(this); }
};

obj.go();            // (1) object Обычный вызов функции в контексте объекта.

(obj.go)();          // (2) object То же самое, скобки ни на что не влияют.

(method = obj.go)();      // (3) undefined более сложный вызов вида (выражение).method()
// f = obj.go;    // так правильно
//f();
(obj.go || obj.stop)(); // (4) undefined*/
