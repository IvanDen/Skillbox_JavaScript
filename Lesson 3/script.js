// function primtHello(firstName, lastName)
// {
//     firstName = firstName || 'Пользователь';
//     lastName = lastName || 'Тестовый';
//
//     var greeting = 'Добрый вечер';
//     var fullName = firstName + ' ' + lastName;
//
//     return greeting + ', ' + fullName + '!';
// }
// var myFirstName = 'Иван';
// var myLastName = 'Петров';
//
// var hello = primtHello(myFirstName, myLastName);
// console

function printNumbers(n) {
    var i = n;
    while (i > 1) {
        console.log(i);
        i--;
    }
}
function printNumbersR(n) {
    if (n > 0) {
        console.log(n);
        printNumbersR(n - 1);
    }
}

printNumbersR(90);