// var $j = jQuery.noConflict();
/*
let a = 1;

{
    let a = 2;
}

console.log(a);*/

//const a = 1;// НЕ изменяемое значение Константа

//        13.4 Дуструктуризация

// объект
/*const user = {
    name: 'John',
    lastName: 'Done',
    age: 30
};*/

// старый стандарт запроса
// const age = user.age;
// ES 6
/*const {name, lastName, age} = user;
//массив
const arr = [10, 6, 2000];

const [day, month, year] = arr;*/

//  ////     13.5  Rest и spread   /////

// старый формат
/*function foo()
{
    var a = arguments[0];
    var params = Array.prototype.slice.call(arguments, 1);
    console.log(a);
    console.log(params);
}*/

// ES 6

/*function fooES6 (a, ...params){
    console.log(a);
    console.log(params);
}

fooES6(12, 22, 34, 45, 567);

foo(1, 2, 3, 4, 56);*/
///   Spred

/*Math.max(... [50, 80, 120]); // выдать максимальное значение

//      ///   13.6  Template strings

const str = 'my string';
const str1 = 'my string\ntext here';// строка состоит из двух строк*/

/*const html = '<div>\n<p>text</p>\n</div>';

let html = '<div>';
html += '<p>text</p>';
html += '</div>';*/// Не удобные методы

// удобный метот многострочного html кода

// включение интерполяции
/*const text = 'text here';
const buttonText = 'My button';

// Шаблон более удобный метод для ES6
const html =
    `<div>
        <p>${text}</p>
        <button>${buttonText}</button>
    </div>
    `;
console.log(html);*/

////////// 13.7 Стрелочные функции и параметры по умолчанию//////

// ES 5
/*function foo(x)
{
    return x * x; // стрелочная функция возводит свой параметр в квдрат
}
console.log(foo(2));

const fooES2015 = x => x * x; // Если нет аргумента, то нужны скобки
console.log(fooES2015(2));*/

//Длинная форма записи
/*const fooES2015 = (x) => {
    return x * x;
}*/

///    Сохранение контекста
// было:
/*var self = this; //делаем функцию глобальной
self.age = 0; ..*/

/*var obj = {
    a: 1
};

function foo()
{
    console.log(this);
    console.log(this.a); // привязываем функцию к контексту
}

foo = foo.bind(obj);
foo();*/

/*function Person()
{
    // в конструкторе Person() this указывает на себя
    var self = this;
    self.age = 0;

    setTimeout(function ()
    {
        console.log(self);
        console.log(self.age);
    }, 1000);
}

var p = new Person();*/

//obj.a
//obj.b

const foo = ({a, b}) => {
    console.log(a);
    console.log(b);
}

foo({
    a: 10,
    b: 20
});


















