//          8.1 ОБЪЕКТ arguments

// function showArgs() {
//     console.log('Передано аргументов' + arguments.length);
//     console.log(arguments);
// }
// showArgs(1, 2);

// сравнение массива и arguments
/*function showArgs() {
    console.log(arguments.constructor.name);// покажет Object
    console.log([1,2,3,4].constructor.name);// покажет Array - массив
}
showArgs();*/

/*function showArgs() {
    //ES5
    let args = Array.prototype.slice.call(arguments);

    //ES6

    let argsEs6 = Array.from(arguments);
    let argsEs6Dop = [...arguments]; // spread operator
    return args.join(', ');
}
console.log(showArgs('foo', 'bar', 'hello'));*/


//     8.4 Обработка исключений (throw, catch)

/*try {
    var a = b;
}
catch (ex) {
    console.log('Возникла ошибка: ' + ex);
}*/

// Реальный пример из практики
/*
var str = prompt('Введите JSON:');
try
{
    var json = JSON.parse(str);
}
catch (ex)
{
    alert('Введён не корректный JSON');
}
console.log(json);
*/

// функция считает возраст и выводит ошибку
function calcBirthYear() {

    var age = prompt('Введите ваш возраст');
    var birthYear = new Date().getFullYear() - age;

    if (isNaN(birthYear))
    {
        throw('Введено не-числовое значение');
    }
    else if (age !== null)
    {
        alert('Ваш год рождения: ' + birthYear);
    }
}
//calcBirthYear();// выдаст ошибку красным шрифтом в консоли

// исключение
try
{
    calcBirthYear();
}
catch (ex)
{
    alert('ошибка ввода: ' + ex) // выдаст ошибку через функцию alert
}

//        8.5 регулярные выражения

//проверка номера
/*var phone = prompt('Введите номер телефона в формате xxx-xx-xx');
var isValidPhone = /\d{3}-\d{2}-\d{2}/.test(phone);

if (isValidPhone)
{
    alert('Спасибо!');
}
else
{
    alert('Ошибка ввода номера (не правельный формат)');
}*/

// ещё пример использования регулярных выражений
/*var str = 'Я родился 9 числа 1 месяца и 1990 года';


console.log(str.replace(/\d/g, '_'));*/

//         8.6 строгий режим

// 'use string'; //запускаем строгий режим, можно

//a = 1; //в строгом не работает

// ещё пример
/*function foo()
{
    console.log(this); // без строгово режима выдаст глобальный объект window {...}
}
foo();*/ // в строгом режиме будет undefined

// ещё пример
function foo()
{
    var  a = 1;
    eval('var b = a + 1');// eval не может создавать переменные в своей зоне видимости, она может их менять
    return b;
}
console.log(foo());//в обычном режиме 2, в строгом ошибку