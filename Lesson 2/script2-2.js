function leapYear(year) {
    return new Date(year, 1, 29).getDate() === 29;
}


var StartingYear = prompt('Введите начальный год.');
var FinalYear = prompt('Введите конечный год.');


if (StartingYear > FinalYear)  {
    alert('Вы ввели не правильный диапазон чисел!');
}

while (StartingYear <= FinalYear) {
    if (leapYear(StartingYear) == true)  {
        console.log(StartingYear);
    }
    StartingYear++
}