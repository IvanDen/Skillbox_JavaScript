$(document).ready(function()
{
    acceptSomeoneCode();

});

function acceptSomeoneCode()
{
    var partScript;
    $('.js-to-push').on('click', function()
    {
        $('.text-error').empty();
        partScript = $('.add-eval-code').val();
        function runsTheCode()
        {
            'use string';
            if (eval(partScript) !== undefined) {
                console.log(eval(partScript));
                return;
            }
            else {

            }
        }

        try {
            runsTheCode();
        }
        catch {
            $('.text-error').append('Your code is not valid!');
        }
    });
}

// пример var a = true; if (a) { 1+1 } else { 1+2 }

