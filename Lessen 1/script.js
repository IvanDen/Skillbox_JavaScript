var myName = prompt('Как вас зовут');
var mySurname = prompt ('Введите вашу фамилию');
var myBirthYear = prompt('Введите ваш год рождения.');
var currentYear = new Date().getFullYear();

var age = currentYear - myBirthYear;

    console.log(typeof currentYear);


if (age <= 0) {
    alert('Вы не правильно ввели год рождения!');
}
if (age > 1 && age < 20 ) {
    alert('Привет, '  + mySurname + ' ' + myName + '!');
}
else if (age >= 20 && age < 40){
    alert('Добрый день, ' + mySurname + ' ' + myName + '.');
}
else if (age >= 40 && age < 115) {
    alert('Здравствуйте, ' + mySurname + ' ' + myName + '.');
}