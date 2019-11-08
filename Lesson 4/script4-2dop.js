$( document ).ready(function() {


// второй вариант решения.

    var today;
    var days;
    var da;
    var dw;
    var nowMonth;
    var ye;
    var hour;
    var minute;
    var sec;

    function dateCalculation() {
        today =  new Date();
        days = ["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"];
        da = today.getDate();
        dw = days[today.getDay()];
        nowMonth = today.getMonth() + 1;
        ye = today.getFullYear();
        hour = today.getHours();
        minute = today.getMinutes();
        sec = today.getSeconds();
    }
    dateCalculation();

    function calculationWordDeclination() {


        function rightTime(num, str1, str2, str3) {
            numEnd = num % 10;
            if (num >= 11 && num <= 19) {
                return num + ' ' + str2;
            }
            else if (num == 1 || numEnd == 1) {
                return num + ' ' + str1;
            }
            else if (num >= 2 && num <= 4) {
                return num + ' ' + str3;
            }
            else {
                return num + ' ' + str2;
            }
        }

        function rightMonth(num, str1, str2, str3, str4, str5, str6, str7, str8, str9, str10, str11, str12) {

            if (num == 1) {
                return str1;
            }
            else if (num == 2) {
                return str2;
            }
            else if (num == 3) {
                return str3;
            }
            else if (num == 4) {
                return str4;
            }
            else if (num == 5) {
                return str5;
            }
            else if (num == 6) {
                return str6;
            }
            else if (num == 7) {
                return str7;
            }
            else if (num == 8) {
                return str8;
            }
            else if (num == 9) {
                return str9;
            }
            else if (num == 10) {
                return str10;
            }
            else if (num == 11) {
                return str11;
            }
            else if (num == 12) {
                return str12;
            }

        }

        var hText = rightTime(hour, 'час ', 'часов ', 'часа ');

        var mText = rightTime(minute, 'минута ', 'минут ', 'минуты ');

        var sText = rightTime(sec, 'секунда ', 'секунд ', 'секунды ');

        var moText = rightMonth(nowMonth, 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря');

        today = 'Сегодня ' + da + ' ' + moText + ' ' + ye + ' год, ' + dw + ', ' + hText + mText + sText;
    }
    calculationWordDeclination();
    document.getElementById('date_time').innerText = today;

    setInterval(function () {
        dateCalculation();
        calculationWordDeclination();
        console.log(today);
        document.getElementById('date_time').innerText = today;
    }, 1000);

});