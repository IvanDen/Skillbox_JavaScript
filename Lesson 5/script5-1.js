//                     Задача  Армия функций

/*function makeArmy() {

    var shooters = [];

    for (var i = 0; i < 10; i++) {
        var shooter = function me() { // функция-стрелок
            alert(me.i); // выводит свой номер
        };
        shooter.i = i;
        shooters.push(shooter);

    }
    return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...*/
// .. все стрелки выводят 10 вместо 0,1,2...9


//                        Фильтрация через функцию
/*Создайте функцию filter(arr, func), которая получает массив arr и
 возвращает новый, в который входят только те элементы arr, для которых func возвращает true.
Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b»,
inArray([...]) – "в массиве [...]". Использование должно быть таким:*/


/*function filter(arr, func) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        var val = arr[i];
        if (func(val)) {
            result.push(val);
        }
    }
    return result
}*/
/*function inBetween(a, b) { // filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
    return function (x) {
        return x >= a && x <= b;
    };
}*/

/*function inArray(arr) { // – выберет только элементы, совпадающие с одним из значений массива.
    return function (x) {
        return arr.indexOf(x) != -1;
    };
}

var arr = [1, 2, 3, 4, 5, 6, 7];
alert(filter(arr, inArray([1, 2, 10])) ); // 3, 4, 5, 6*/

/*alert(filter(arr, function(a) {
    return a % 2 == 0
})); // 2,4,6*/

// alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6
//
// alert( filter(arr, inArray([1, 2, 10])) ); // 1,2

/*var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

/!*!// по полю name (Вася, Маша, Петя)
users.sort(function(a, b) {
    return a.name > b.name ? 1 : -1;
});

// по полю age  (Маша, Вася, Петя)
users.sort(function(a, b) {
    return a.age > b.age ? 1 : -1;
});*!/
function byField(field) {
    return function (a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}

users.sort(byField('name'));
users.forEach(function(user) {
    alert( user.name );
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function(user) {
    alert( user.name );
}); // Маша, Вася, Петя*/


// Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(),
// который будет очищать текущее содержимое буфера:
/*function makeBuffer() {
    var stringWord = '';
    function buffer(value) {
        if (arguments.length == 0) {
            return stringWord;
        }
        stringWord += value;
    };
    buffer.clear = function() {
        stringWord = "";
    }
    return buffer;
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
alert(buffer());

buffer.clear();
alert(buffer());*/


//Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:
function makeBuffer() { /* ваш код */
    var stringWord = '';
    return function (value) {
        if (arguments.length == 0) { // вызов без аргументов
            return stringWord;
        }

        stringWord += value;
    }
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
alert( buffer() ); // Замыкания Использовать Нужно!

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

alert(buffer2()); // '010'
/*Начальное значение stringWord = '' – пустая строка. Поэтому операция
stringWord += value прибавляет value к строке, автоматически преобразуя его
к строковому типу, как и требовалось в условии.*/



/*Напишите функцию sum, которая работает так: sum(a)(b) = a+b.

Чтобы вторые скобки в вызове работали – первые должны возвращать функцию.*/
/*function sum(a) {

    return function (b) {
        return a + b; // возьмет a из внешнего LexicalEnvironment
    }
}*/

/*function makeCounter() {
    var currentCount = 1;

    return function() {
        return currentCount++;
    };
}

var counter = makeCounter();

// каждый вызов возвращает результат, увеличивая счётчик
alert( counter() ); // 1
alert( counter() ); // 2
alert( counter() ); // 3*/

/*function makeCounter() {
    var currentCount = 1;

    return { // возвратим объект вместо функции
        getNext: function() {
            return currentCount++;
        },

        set: function(value) {
            currentCount = value;
        },

        reset: function() {
            currentCount = 1;
        }
    };
}

var counter = makeCounter();

alert( counter.getNext() ); // 1
alert( counter.getNext() ); // 2

counter.set(5);
alert( counter.getNext() ); // 5*/

//         ТЕМА IIFE (Immediately Invoked Function Expression)
//                    Сразу же вызванное выражение функции

/*(function () {
    var localVar = 100;


    window.foo = function () {
        console.log(localVar++);
    }



})();*/

/*
// Function Declaration
function foo() {
    //
}
// Function Expression
var bar = function () {
    //
};
bar();
*/





/*//         ТЕМА ЗАМЫКАНИЯ

function makeCounter() {
    // LexicalEnviroment = { currentCount: 1}
    var currentCount = 1;
    return function () {
        // LexicalEnviroment = {}
        return currentCount++;
    }
}

var counter = makeCounter();*/

// sum(1)(2) = 3
/*function sum(a) {
    return function (b) {
        return a + b; // возьмет a из внешнего LexicalEnvironment
    }

}
alert(sum(1)(3));*/
// строковый буфер
/*function makeBuffer(){
    var numb = '';

    function buffer(piece) {
        if(arguments.length == 0) { // вызов без аргументов
            return numb;
        }
        numb += piece;
    };
    buffer.clear = function () {
        numb = "";
    }

    return buffer;
};

var buffer = makeBuffer();

buffer('Test:');
buffer(' Hyli ti suda smotrish?');
alert(buffer());

buffer.clear();

alert(buffer());*/

/*
// Сортировка массива
var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Иванов',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

function byField(field) {
    return function (a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}

users.sort(byField('name'));
users.forEach(function (user) {
    console.log(user.name);
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function (user) {
    console.log(user.name);
}); // Маша, Вася, Петя
*/

/*
//                  ТЕМА Сборщик мусора

// Лексическое окружение
// Lexical Environment
debugger;

function myFunc() {
    // локальная зона видимости
    // + ссылка на глобальную
    var LocalVar = 'hello';
    var anotherLocalVar = 2017;
}

// Глобальная зона видимости
var globalVar = 1000;
myFunc();*/
