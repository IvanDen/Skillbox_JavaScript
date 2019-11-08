
function filterByType(dataType)
{
    var args = Array.prototype.slice.call(arguments);
    console.log(typeof args[1]);


    var arr = new Array();// массив для возвращения нужных значений


    if (arguments[0] == 'string') // если в первом это строка
    {
        for(var i = 1; i <= args.length; i++) // перебираем массив
        {
            if (typeof args[i] === "string") // если тип элемента равен строке
            {
                arr.push(args[i]);// то добавим его в наш массив
                console.log(arr);
            }
            else {
                continue; // если нет, то продолжим поиск
            }
        }
    }
    else if (arguments[0] == 'number')
    {
        for(var i = 1; i <= args.length; i++)
        {
            if (typeof args[i] === "number")
            {
                arr.push(args[i]);
                console.log(arr);
            }
            else {
                continue;
            }
        }
    }
    else if (arguments[0] == 'boolean')
    {
        for(var i = 1; i <= args.length; i++)
        {
            if (typeof args[i] === "boolean")
            {
                arr.push(args[i]);
                console.log(arr);
            }
            else {
                continue;
            }
        }
    }
}

// filterByType('string', 10, 20, 'a', 'b', true, false);// возвращаем массив ['a','b'];
filterByType('string', 10, 20, 'a', 'b', true, false);




