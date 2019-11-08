//        9.6 События и обработчики

// Получили ссылки на объекты в DOM девреве
/*var btn1 = document.querySelector('.button-1');
var btn2 = document.querySelector('.button-2');
var linc = document.querySelector('.link'); // добоаляем объект ссылку в переменную

// назначаем у кнопок обработчик события 'click'
btn1.addEventListener('click', function ()
{
    alert('The button #1 is push!');
});

function onClickBtn2()
{
    alert('The button #@ is push!');
    btn2.removeEventListener('click', onClickBtn2()); // при клике удалить обработчик
}
btn2.addEventListener('click', onClickBtn2());

linc.addEventListener('click', function (ev) // ev - это событие которое произошло при взаимодействии с объектом
{
    ev.preventDefault(); // предотвратить стандартное поведение браузера
    console.log(ev);
    alert('Link is push!')
});

var textarea = document.querySelector('textarea');
var keyCode = document.querySelector('.key-code'); // находим элемент и отправляем ссылку в переменную
textarea.addEventListener('keydown', function (ev)
{
    if(ev.keyCode == 13)
    {
        ev.preventDefault(); // запретить назатие кнопки №13
        keyCode.innerHTML = '<b>Запрещён перенос строки</b>'
    }
    else
        keyCode.innerHTML = 'код нажатой кнопки: ' + ev.keyCode;

    // console.log(ev.keyCode); // вывести код нажатой клавиши
    keyCode.innerHTML = 'Код надатой кнопки: ' + ev.keyCode;// добовляем номер клавиши в этот элемент
});*/

// mousedown end mouseup
// mouseover, mouseout, mousemove

//      9.7 Погружение и всплытие событий

function showTarget(ev)
{
    console.log('target:', ev.target, '\ncurrentTarget:', ev.currentTarget);
}

// отслеживаем событие на каждом эелементе
document.querySelector('body').addEventListener('click', showTarget);
document.querySelector('.container').addEventListener('click', showTarget);
document.querySelector('.event-row').addEventListener('click', showTarget);
document.querySelector('.col-buttons').addEventListener('click', showTarget);
document.querySelector('.button-1').addEventListener('click', showTarget);
// выдаст 2 события, при нажатии и при высплыти кнопки (target: <buton class...)
// при всплытии currentTarget: <buton class....
