var minNumb = checkminNumberNan(Number(+prompt('Введите минимальное число', '')));

console.log(minNumb);

var maxNumb = checkmaxNumberNan(Number(+prompt('Введите максимальное число', '')));

console.log(maxNumb);

function isNumber(num) {
    return !isNaN(parseFloat(num));
}
function checkNumberOnNull(number) {
    if (number === 0) {
        alert('Игра закончина, обновите страницу что-бы начать ещё раз');
    }
    return false;
}

function checkminNumberNan(min) {

    while (!isNumber(min)) {
        alert('Вы ввели ввели не число в первое поле');
        min = Number(+prompt('Введите минимальное число', ''));

    }
    return min;
}
function checkmaxNumberNan(max) {

    while (!isNumber(max)) {
        alert('Вы ввели не число во второе поле');
        max = Number(+prompt('Введите максимальное число', ''));

    }
    return max;
}

function guessingNumbers() {
    var riteNumb = Math.floor(Math.random() * (maxNumb-minNumb+1) + minNumb);
    console.log(riteNumb);
    // if (isNaN(riteNumb)) {
    //     alert('Вы нечего не загадали, игра закончина.');
    //     return false;
    // }

    if (maxNumb === 0 && minNumb === 0) {
        alert('Игра закончина, обновите страницу что-бы начать ещё раз.');
        return false;
    }

    else {
        var printNumb =  prompt('Угадайте число', '');

        console.log(printNumb);

        while (printNumb === null) {
            console.log(printNumb);

            if (printNumb === null) {
                alert('Игра закончина, обновите страницу что-бы начать ещё раз.');
                return false;
            }
            return false;
        }

        while (!isNumber(printNumb)) {
            alert('Вы вели не число');
            printNumb = prompt('Попробуй ещё раз угадать число', '');
            // return printNumb;

            if (printNumb === null) {
                console.log(printNumb);
                alert('Игра закончина, обновите страницу что-бы начать ещё раз.');
                break;
            }
            else {
                // alert('Игра закончина, обновите страницу что-бы начать ещё раз.');
            }
            break;
        }


        for (; printNumb !== riteNumb;) {
            if (printNumb === null) {
                alert('Игра закончина, обновите страницу что-бы начать ещё раз.');
                break;
            }
            if (printNumb > riteNumb) {
                alert('Число меньше чем ' + printNumb);
                console.log(printNumb);
                printNumb = prompt('Попробуй ещё раз угадать число', '');
            }
            else if (printNumb < riteNumb) {
                alert('Число больше чем ' + printNumb);
                console.log(printNumb);
                printNumb = prompt('Попробуй ещё раз угадать число', '');
            }

            else if (!isNumber(printNumb)) {
                console.log(printNumb);

                while (!isNumber(printNumb)) {
                    console.log(printNumb);
                    alert('Вы вели не число');
                    printNumb = prompt('Попробуй ещё раз угадать число', '');

                    if (printNumb === riteNumb)  {
                        alert('Вы угадали!! Игра закончина, обновите страницу что-бы начать ещё раз.');
                        break;
                    }
                    else if (printNumb === null) {
                        console.log(printNumb);
                        alert('Игра закончина, обновите страницу что-бы начать ещё раз.');
                        break;
                    }
                }

            }

            else {
                alert('Вы угадали!! Игра закончина, обновите страницу что-бы начать ещё раз.');
                break;
            }
        }
    }

}


guessingNumbers();