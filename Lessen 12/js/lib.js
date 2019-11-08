$(document).ready(function()
{
    theBallMove();


});

function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function theBallMove()
{
    var gateLeft;
    var gateRight;
    var i = 0;
    var j = 0;

    var ball = $('.js-ball');
    var field = $('.js-field');
    // console.log(field.css('height'));

    console.log(parseInt(ball.css('top')));


    var pos = field.offset();
    var widthField = field.css('width');//1061
    var heightField = field.css('height');//1771

    widthField = parseInt(widthField);
    heightField = parseInt(heightField);

    var gatesHeightPx = $('.wrap-gates').css('height');// Высота ворот в px '150px'
    var gatesHeightNum = parseInt(gatesHeightPx);// отделяем от строки число 150
    // console.log('gatesHeightNum - ' + gatesHeightNum);

    var gatesCordsTop = (heightField - gatesHeightNum )/2; //Получаем координату Y, px верхней части ворот
    // console.log('gatesCordsTop ' + gatesCordsTop);

    var gatesCordsBottom = gatesCordsTop + gatesHeightNum; //Получаем координату Y, px нижней части ворот
    // console.log('gatesCordsBottom ' +gatesCordsBottom);

    var Xball;
    var Yball;

    ball.on('click', function ()
    {
        var ballWidthObj = ball.css("width");
        var ballHeightObj = ball.css("height");

        var ballWidth = parseInt(ballWidthObj); //Получаем значение ширины мяча
        var ballHeight = parseInt(ballHeightObj);//Получаем значение высоты мяча

        // генерируем координату Y в диапазоне от высоты шара до высоты поля
        var heightFieldRand = randomNumberFromRange(ballHeight, heightField);

        console.log('randomNumber - ' + heightFieldRand);

        // Если мяч находится в левой части экрана
        if (parseInt(ball.css('left')) + ballWidth != widthField)
        {
            Xball = widthField - ballWidth;

            // если сгенерированное число будет больше высоты поля сложенной с высотой мяча (мяч выходит за край)
            if (heightFieldRand >= (heightField - ballHeight))
            {
                // вставить координату Y с поправкой на высоту мяча, чтоб он не выходил за край поля
                Yball = heightFieldRand - ((heightFieldRand + ballHeight) - heightField);
                ball.css({left: Xball, top: Yball});
                console.log('mended Yball is change Up - ' + Yball);
                return;
            }
            // вычитаем половину высоты мача от сгенерированной координаты, чтобы мяч встал в центром по координате
            Yball = heightFieldRand - ballHeight/2;
            console.log('Up - Yball: ' + Yball + ' Xball: ' + Xball);
            //Условие, если мяч попадает в диапазон ворот
            if (heightFieldRand > gatesCordsTop && heightFieldRand < gatesCordsBottom)
            {   // анимируем поподание мяча в ворота, в конце анимации уведомление
                ball.animate({
                    "left": "=" + Xball,
                    "top": "=" + Yball,
                }, 500, "linear",
                   function ()
                    {
                        alert('Гооол!');
                        gameScore();
                    });
            }
            ball.css({left: Xball, top: Yball});
            console.log("После ")
        }
        // Если мяч находится с правой части экрана
        else
        {
            Xball = 25;
            // если сгенерированное число будет больше высоты поля сложенной с высотой мяча (мяч выходит за край)
            if (heightFieldRand >= (heightField - ballHeight))
            {
                // вставить координату Y с поправкой на высоту мяча, чтоб он не выходил за край поля
                Yball = heightFieldRand - ((heightFieldRand + ballHeight) - heightField);
                ball.css({left: Xball, top: Yball});
                console.log('mended Yball is change Down - ' + Yball);
                return;
            }
            // вычитаем половину высоты мача от сгенерированной координаты, чтобы мяч встал в центром по координате
            Yball = heightFieldRand - ballHeight/2;
            console.log('Down - Yball: ' + Yball + ' Xball: ' + Xball);
            //Условие, если мяч попадает в диапазон ворот
            if (heightFieldRand > gatesCordsTop && heightFieldRand < gatesCordsBottom)
            {
                // анимируем поподание мяча в ворота, в конце анимации уведомление
                ball.animate({
                    "left": "=" + Xball,
                    "top": "=" + Yball,
                }, 500, "linear",
                function ()
                {
                    alert('Гооол!');
                    gameScore();
                });
            }
            ball.css({left: Xball, top: Yball});
        }

        function gameScore()
        {
            gateLeft = $('.left-score');
            gateRight = $('.right-score');

            if (Xball == (widthField - ballWidth))
            {
                gateRight.text(++i);
                console.log('gateRight '+ i);
            }
            else if (Xball = 25)
            {
                gateLeft.text(++j);
                console.log('gateLeft ' + j);
            }
        }

    });
}