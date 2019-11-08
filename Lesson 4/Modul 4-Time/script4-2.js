$( document ).ready(function() {
    var today; // = new Date();
    var nowDay; // = today.getDate();
    var days = ["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"];
    var daysWeek; // = days[ today.getDay()]//today.getDay();
    var nowMonth; //= today.getMonth() + 1;
    var nowYear; //= today.getFullYear();

    var timeHours; //= today.getHours();
    var timeMinut; //= today.getMinutes();
    var timeSeconds; //= today.getSeconds();


    function dateCalculation() {
        today = new Date();
        nowDay = today.getDate();
        daysWeek = days[today.getDay()]; //today.getDay();
        nowMonth = today.getMonth() + 1;
        nowYear = today.getFullYear();
        timeHours = today.getHours();
        timeMinut = today.getMinutes();
        timeSeconds = today.getSeconds();
    }
    dateCalculation();




    function calculationWordDeclination() {


        if (nowMonth == 1) {
            nowMonth = 'января';
        }
        else if (nowMonth == 2) {
            nowMonth = 'февраля';
        }
        else if (nowMonth == 3) {
            nowMonth = 'марта';
        }
        else if (nowMonth == 4) {
            nowMonth = 'апреля';
        }
        else if (nowMonth == 5) {
            nowMonth = 'мая';
        }
        else if (nowMonth == 6)  {
            nowMonth = 'июня';
        }
        else if (nowMonth == 7)  {
            nowMonth = 'июля';
        }
        else if (nowMonth == 8)  {
            nowMonth = 'августа';
        }
        else if (nowMonth == 9)  {
            nowMonth = 'сентября';
        }
        else if (nowMonth == 10)  {
            nowMonth = 'октября';
        }
        else if (nowMonth == 11)  {
            nowMonth = 'ноября';
        }
        else if (nowMonth == 12)  {
            nowMonth = 'декабря';
        }

        var wordHours;
        var wordMinut; //  1,21,31,41,51 - минута; 2-4, 22-24, 32-34, 42-44, 52-54 - минуты; 0,5-20,25-30, 35-40, 45-50, 55-59 - минут
        var wordSeconds; //  1,21,31,41,51 - сеунда; 2-4, 22-24, 32-34, 42-44, 52-54 - секунды; 0,5-20,25-30, 35-40, 45-50, 55-59 - секунд,


        function printWordHours(hour) {
            if (timeHours < 1) {
                wordHours = ' час ';
            }
            else if (timeHours > 1 && timeHours < 4) {
                wordHours = ' часа ';
            }
            else if (timeHours > 4) {
                wordHours = ' часов ';
            }
            else if (timeHours == 21 && timeHours == 0) {
                wordHours = ' час ';
            }
            else if (timeHours > 21 ) {
                wordHours = ' часа ';
            }
        }
        printWordHours(wordHours);

        function printWordMinut(minut) {
            if (timeMinut == 1 || timeMinut == 21 || timeMinut == 31 || timeMinut == 41 || timeMinut == 51) {
                wordMinut = ' минута ';
            }
            else if (timeMinut > 1 && timeMinut < 5 || timeMinut > 21 && timeMinut < 25 || timeMinut > 31 && timeMinut < 35 || timeMinut > 41 && timeMinut < 45 || timeMinut > 51 && timeMinut < 55) {
                wordMinut = ' минуты ';
            }
            else if (timeMinut == 0 || timeMinut > 4 && timeMinut < 21 || timeMinut > 24 && timeMinut < 31 || timeMinut > 34 && timeMinut < 41 || timeMinut > 44 && timeMinut < 51 || timeMinut > 54 && timeMinut < 60) {
                wordMinut = ' минут ';
            }
        }
        printWordMinut(wordMinut);

        function printWordSeconds(Seconds) {
            if (timeSeconds == 1 || timeSeconds == 21 || timeSeconds == 31 || timeSeconds == 41 || timeSeconds == 51) {
                wordSeconds = ' секунда ';
            }
            else if (timeSeconds > 1 && timeSeconds < 5 || timeSeconds > 21 && timeSeconds < 25 || timeSeconds > 31 && timeSeconds < 35 || timeSeconds > 41 && timeSeconds < 45 || timeSeconds > 51 && timeSeconds < 55) {
                wordSeconds = ' секунды ';
            }
            else if (timeSeconds == 0 || timeSeconds > 4 && timeSeconds < 21 || timeSeconds > 24 && timeSeconds < 31 || timeSeconds > 34 && timeSeconds < 41 || timeSeconds > 44 && timeSeconds < 51 || timeSeconds > 54 && timeSeconds < 60) {
                wordSeconds = ' секунд ';
            }
        }
        printWordSeconds(wordSeconds);

        today = 'Сегодня ' + nowDay + ' ' + nowMonth + ' ' + nowYear + ' год, ' + daysWeek + ', ' + timeHours + wordHours + timeMinut + wordMinut + timeSeconds + wordSeconds;

    }
    calculationWordDeclination();



    setInterval(function () {
        dateCalculation();
        calculationWordDeclination();
             console.log(today);

        }, 1000);

    document.getElementById('date_time').innerHTML = today;
});