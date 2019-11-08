
$(document).keyup(function(e){
    if(e.keyCode==27){
        console.log(e);        
        e.returnValue = false;
        e.keyCode = 0;
       
    }
});

function IsNumber(num) {
    return !isNaN(parseFloat(num));

}

var summ = 0;
var number = null;
while (number = prompt('Введите любое число'))
{
    number = Number(number);
    if (IsNumber(number))
        summ += number;
    else
    {
        alert('Вы ввели не число!');
    }
}

alert(summ);

