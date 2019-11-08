$('.js-hide1').on('click', function ()
{
    $('.js-wrap1').hide();
});

$('.js-show1').on('click', function ()
{
    $('.js-wrap1').show();
});

$('.js-toggle1').on('click', function ()
{
    $('.js-wrap1').toggle();
});

// slide

$('.js-slidedown').on('click', function ()
{
    $('.js-wrap2').slideDown(200);
});

$('.js-slideup').on('click', function ()
{
    $('.js-wrap2').slideUp(1000);
});

$('.js-slidetoggle').on('click', function ()
{
    $('.js-wrap2').slideToggle();
});

// Fade

$('.js-fadein').on('click', function ()
{
    $('.js-wrap3').fadeIn(500, function ()
    {
        console.log('fadeIn');
    });
});

$('.js-fadeout').on('click', function ()
{
    $('.js-wrap3').fadeOut(500);
});

$('.js-fadetoggle').on('click', function ()
{
    $('.js-wrap3').fadeToggle();
});