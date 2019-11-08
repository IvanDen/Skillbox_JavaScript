
function isNumber(num) {
    return !isNaN(parseFloat(num));
}

var Number1 = Number(prompt('Введите первое число'));
var Number2 = Number(prompt('Введите второе число'));
var numeric = true;

if (isNumber(Number1)) {}

else {
    alert('Вы ввели ввели не число в первое поле');
    numeric = false;
}

if (isNumber(Number2)) {}
else {
    alert('Вы ввели не число во второе поле');
    numeric = false;
}

if (numeric == true) {
    if (Number1 > Number2) {
        console.log(Number1, Number2);
        alert('Первое число больше второго');
    }
    else if (Number1 < Number2) {
        alert('Второе число больше первого');
        console.log(Number1, Number2);
    }
    else {
        alert('Числа равны');
    }
}
else {
    alert('Сравнение не возможно');
}
