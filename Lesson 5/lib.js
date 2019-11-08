

var startGame = (function  () {

    function isNumber(num) {
        return !isNaN(parseFloat(num));
    }

    var minNumb;
    var maxNumb;

    var askTheNumber = function () {

        minNumb = checkminNumberNan(Number(+prompt('Введите минимальное число', '')));

        console.log(minNumb);

        maxNumb = checkmaxNumberNan(Number(+prompt('Введите максимальное число', '')));

        console.log(maxNumb);

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

    };
    askTheNumber();


    var guessingNumbAndQuestions = (function () {
        var tries;
        var riteNumb;

        var maxReload = 10;


        for (tries = 0; tries <= maxReload; tries++) {
            // console.log(tries);
            return function guessingNumbers() {
                riteNumb = Math.floor(Math.random() * (maxNumb-minNumb+1) + minNumb);
                console.log(riteNumb);


                if (maxNumb === 0 && minNumb === 0) {
                    alert('Игра закончина, обновите страницу что-бы начать ещё раз.');
                    return false;
                }

                else {
                    var printNumb = prompt('Угадайте число, у вас 10 попыток.', '');
                    tries++;
                    console.log(tries);


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
                            printNumb = prompt('Попробуй ещё раз угадать число', '');
                            tries++;
                            console.log(tries);
                        }
                        else if (printNumb < riteNumb) {
                            alert('Число больше чем ' + printNumb);
                            printNumb = prompt('Попробуй ещё раз угадать число', '');
                            tries++;
                            console.log(tries);
                        }

                        else if (!isNumber(printNumb)) {

                            while (!isNumber(printNumb)) {

                                alert('Вы вели не число');
                                printNumb = prompt('Попробуй ещё раз угадать число', '');

                                if (printNumb === riteNumb) {
                                    alert('Вы угадали!! Игра закончина, обновите страницу что-бы начать ещё раз.');
                                    break;
                                }
                                else if (printNumb === null) {
                                    alert('Игра закончина, обновите страницу что-бы начать ещё раз.');
                                    break;
                                }
                            }
                        }

                        else {
                            alert('Вы угадали!! Игра закончина, обновите страницу что-бы начать ещё раз.');
                            break;
                        }
                        if (tries >= maxReload) {
                            alert('Вы исчерпали все попытки!');
                            break;
                        }
                    }
                }
            }
        }
    })();
    guessingNumbAndQuestions();
})();





