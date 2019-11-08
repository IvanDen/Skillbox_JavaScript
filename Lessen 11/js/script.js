// Получен 29.03.2019, валиден
// trnsl.1.1.20190329T115005Z.31270d066a533310.107f7ae9d06387c5482bb49f5e5ba84a34bc799f

(function ()
{
    // Save the API key obtained from the page https://tech.yandex.ru/keys/get/?service=trnsl
    var API_KEY = 'trnsl.1.1.20190329T115005Z.31270d066a533310.107f7ae9d06387c5482bb49f5e5ba84a34bc799f';

    var selectOrig = $('.js-select-original').find('option');
    var select2 = $('.js-select2').find('option');

    // address of the request for a list of languages
    var urlLengList = 'https://translate.yandex.net/api/v1.5/tr.json/getLangs';
    var responLeng;

    // отпровляем запрос через функуию
    $.get(urlLengList, {key: API_KEY, ui: "Lengs"}, function(response)
    {
        // create request object
        responLeng = new Object(response.langs);

        // using a loop, add a list of languages to select
        for(var i = 0; i < Object.keys(responLeng).length; i++)
        {
            $('.js-select-original').append('<option>' + Object.values(responLeng)[i] + '</option>');
            $('.js-select2').append('<option>' + Object.values(responLeng)[i] + '</option>');
        }
    });

    $('.js-btn').on('click', function (ev)
    {
        ev.preventDefault();
        var translate = $('.js-text-request').val();// take value from input

        var sourceLanguage = $('.js-select-original option:selected').text();// take the value of the language from the input
        var translationLanguage = $('.js-select2 option:selected').text();// take the value of the language from the input

        console.log('sourceLanguage - ' + sourceLanguage);
        console.log('translationLanguage - ' + translationLanguage);

        // The function searches for the key in the object by its value
        function getKeyByValue(object, value) {
            return Object.keys(object).find(key => object[key] === value);
        }
        var leng1 = getKeyByValue(responLeng, sourceLanguage);
        var leng2 = getKeyByValue(responLeng, translationLanguage);



        // address to send a request to receive a word translation

        var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

        var req3; // the response string will be written to this variable

        // send request using ajax function
        $.ajax({
            url: url,
            method: 'GET',
            dataType: 'JSON',
            data: {'key': API_KEY, 'text': translate, 'lang': leng1 + '-' + leng2},
            success: function (data)
            {
                req3 = data;
                console.log('success req3 respone: ' + req3.text);
                $('.translate-completed').text(req3.text);

                if (req3.text.length === 0) {
                    $('.translate-completed').text('К сожалению, перевод для данного слова не найден');
                    return;
                }
            },
            error: function (err)
            {
                alert("Request failed: " + err);
                if (req3.code !== 200) {
                    $('.translate-completed').text('Произошла ошибка при получении ответа от сервера:\n\n' + req3.message);
                    return;
                }
            }
        });

        // Вариант решения предложенный на сайте https://codepen.io/yaplusplus/pen/PWdOWN
        /*window.onload = function()
        {
            var req1 = new XMLHttpRequest();

            // Формируем полный адрес запроса:
            url += '?key=' + API_KEY; // добавляем к запросу ключ API
            url += '&text=' + translate; // текст для перевода
            url += '&lang=' + leng1 +'-' + leng2; // направление перевода: с русского на английский
                console.log(url);

            var span = document.querySelector('.translate-completed');
            // Назначаем обработчик события load

            req1.addEventListener('load', function ()
            {
                console.log('req1 respone: ' + req1.response); // отображаем в консоли текст ответа сервера
                var responseTransl = JSON.parse(req1.response); // парсим его из JSON-строки в JavaScript-объект
                console.log('Parse response - ' + responseTransl.text);

                // Проверяем статус-код, который прислал сервер
                // 200 — это ОК, остальные — ошибка или что-то другое
                if (responseTransl.code !== 200) {
                    span.innerHTML = 'Произошла ошибка при получении ответа от сервера:\n\n' + responseTransl.message;
                    return;
                }

                // Проверяем, найден ли перевод для данного слова
                if (responseTransl.text.length === 0) {
                    span.innerHTML = 'К сожалению, перевод для данного слова не найден';
                    return;
                }

                // Если все в порядке, то отображаем перевод на странице
                span.innerHTML = responseTransl.text.join('<br>'); // вставляем его на страницу
            });


            // Обработчик готов, можно отправлять запрос
            // Открываем соединение и отправляем
            req1.open('get', url);
            req1.send();
        }();*/
    });
})();





