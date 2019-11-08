//
//                           тема Объекты:
// ОБЪЕКТ
var users2 = {
        user1: {
            name: 'name1',
            login: 'login1',
            password: 'pass1'
        },
        user2: {
            name: 'name2',
            login: 'login2',
            password: 'pass2'
        },
        user3: {
            name: 'name3',
            login: 'login3',
            password: 'pass3'
        },
};

console.log(users2.user1.login);


//



// функция обработки массива для JQ
//
/*
var reqLogin = prompt('Ведите ваш логин.');
var reqPassword = prompt('Ведите ваш пароль.');

var logAccept = false;
var passAccept = false;

$.each(users2, function(index, value,){
    if (reqLogin == value && reqPassword == value) {
        logAccept = true;
        passAccept = true;
        console.log('Hello, ');
    }
    else {
        console.log('Пользователь не найден');
    }
    // console.log('Свойство: ' + index + '; значение: ' + value);
});
*/

/*var car1 = {
    mark: 'BMW',
    model: 'X5',
    year: 2010
};

var car2 = {
    mark: 'Mersedes Benz',
    model: 'SLK',
    yers: 2012,
    prise: 1500000
};
// props - properties

function  printObjectProps(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            var propValue = obj[prop];
            console.log(prop + ': ' + propValue);
        }
    }
}

printObjectProps(car1);*/
// printObjectProps(car2);

// var car3 = {};
//
// for (var prop in car2) {
//     var propValue = car2[prop];
//     car3[prop] = propValue;
// }

//                                  Тема МАССИВЫ:
/*
var cars = [
    {
        mark: 'BMW',
        model: 'X5'
    },
    {
        mark: 'Mercedes',
        model: 'SLK'
    }
];
// cars.push('Toyota'); - Добавляем новый эелемент в масив

for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}*/

//                                  Тема Стандартный объект Math:
// Math.PI
//
// // Округление
// Math.floor(n) // округляет в нижнюю сторону
// Math.ceil(n) // округляет в верхнюю сторону
// Math.round(n) // округляет по математическим правилам
//
// // Мин. и макс. значение
// Math.min(n1, n2, n3...)
// Math.max(n1, n2, n3...)
//
// // Случайное число
// Math.random() // выдаёт случайное число от 0 до 1
//
// // Возведение в степень
// // и квадратный корень
// Math.pow(x, y)
// math.sqrt(x)

//                                  Тема: Строка
// Длина строки
// str.length

// вхождение внутри строки

// str.indexOf(s);
// str.lastIndexOf(s);
//
// // замена в строке
// str.replace(subStr, newSubStr);
//
// // часть строки
// str.slice(beginSlice, endSlice)
//
// // разбиение строки на части
// str.split(separator)
//
// // верхний и нижний регистр
// str.toUpperCase()
// str.toLowerCase()
//
// // удаление пробелов в начале и в конце
//
// str.trim()
// str.trimLeft()
// str.trimRight()

//                                  Тема: Array:
// Длина массива
// arr.length

// // Добавление и удаление элементов
// arr.push(val)
// arr.pop()
// arr.shift()
// arr.unshift()
//
// // Разворот массива
// arr.reverse()
//
// // Сортировка
// arr.sort()
//
// // Объединение в строку
// arr.slice()
//
// // Чсть массива
// arr.slice()
//
// // Позиция элемента в массиве
// arr.indexOF()
// arr.lastIndexOF()

//                                  Тема: Date
/*

// Текущие дата и время
var d = new Date();

// день недели:
// 0 - воскресенье
// 6 - суббота
d.getDay();

d.getDate(); // дата
d.getMonth(); // месяц (0 - январь, 11 - дукабрь)
d.getYear(); // год, начиная с 1990
d.getFullYear(); // полный год

d.getHours()
d.getMinutes()
d.getSeconds()
*/




