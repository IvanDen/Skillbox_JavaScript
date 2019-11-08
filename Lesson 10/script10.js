//       10.2 Console

console.error("This is error!!!!"); // Error
console.time("start"); // можно засикать время выполнения кода
console.timeEnd("start"); // покажет время с момета start
console.table([
    {id: 1, mark: 'BMW', model: 'x5'},
    {id: 1, mark: 'Mercedes', model: 'CLK'},
    {id: 1, mark: 'Audi', model: 'TT'}
]); // выдаст в консоли сложный элемент в виде таблиц

//           10.3 window   /////

window.innerWidth; //ширина и высота открытого окна не считая скролл бара
window.innerHeight;//
window.outerWidth;//ширина и высота открытого окна с учетом скролбара
window.outerHeight;

window.scrollX; // показывает на сколько PX прокрутили скрол
window.scrollY;
///////         X    Y
window.scrollTo(0, 400); //перенесёт в нужную позицию прокрутив скролл
window.scrollBy(0, 100); //пролистывает на на определенный отрезок
confirm('Are you sure?'); //выдаст ообщение "ОК" и "Отмена"

window.getSelection(); // выдать то что выделил поьзователь на экране

window.open('http://yandex.ru');

//        10.4 Document   /////

document.querySelectorAll();
document.createElement();
document.title; // показывает титул страници
document.domain; // вернуть домен, на котором находится страница
document.referrer; // вернёт домен от куда пользователь пришёл на страницу
document.images; //можно получить все картинки на данной стронице
document.scripts; //можно получить все скрипты на данной стронице
document.styleSheets; //можно получить все объекты стилей на данной стронице
document.forms; //можно получить все формы на данной стронице
document.body.children; // получить HTML элемнет

//        10.5 Информация о браузере и истории переходов   /////

location; //  объект window
location.href; //  вернуть польный текущий адрес
location.host; //  доменное имя "go.skillbox.ru"
location.pathname; //  ссылка которая следует после домена /course/JavaScript/e96d76c3-e5ed-4059-8f2a-a056eaec75cc
location.search; // данные запроса
location.hash; // данные хеша #baz
location.protocol; // вернёт "https:"
location.replace('http://yandex.ru'); // настроить переходы на страницу

history; // вернёт историю переходов на странице
history.length; // вернёт цифру количества переходов
history.go(-1); // ввернуться на шаг назад или history.back
history.pushState({name: 'page-1'}, '', '/page-1'); //добавляет новое состояние в историю браузера не перезагружая страницу

navigator; // выдаёт информаию о текущем браузере котором находится пользователь
navigator.appName; // "Netscape"
navigator.appCodeName; // "Mozilla"
navigator.appCodeName; // "5.0 (windows..."
navigator.userAgent; // "Mozilla/5.0 (windows NT..." код браузера
navigator.product; // "Gecko" движок

//          10.6 LocalStorage и SessionStorage   /////

// это механизмы web хранилища при помощи которого браузеры могут хранить пары Ключи/значения
//в более интуитивнопонятной манере, чем куки(cookies)
LocalStorage; // свойство используется чаще, для сохраниения изменений на странице

//          10.7 ContentEditable   /////

// можно добавить атрибут ContentEditable елементу на HTML сраницу в коде
// пример <div class="col-xs-12" ContentEditable = "true">Контент</div> после чего в браузере можно
// редактировать данный контент этого элемента

//          10.8 Разнообразие Web API   /////
//web push API - уведомления; геолакации; аудио и видео API; графика в браузерах;







































