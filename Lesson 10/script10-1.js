$(document).ready(function()
{
    if (localStorage.getItem('edit-text'))
    {
        $('.js-text-p').html(localStorage.getItem('edit-text'));
        $('.js-text-p').css('color', localStorage.getItem('css'));
    }

    $('.js-edit').on('click', function ()
    {
        var editPElem = $('.js-text-p');
        editPElem.attr('contentEditable', true);
        var editText;
        var textColor;
        var editColor;


        $(this).attr('disabled', true);
        if($(this).attr('disabled', true))
        {
            $('.js-save, .js-cancel, .text-colour').removeAttr('disabled');
        }
        if (editText === undefined)
        {
            localStorage.setItem('edit-text', $('.js-text-p').html());
            editText = localStorage.getItem('edit-text');
        }
        $('.text-colour').on('click', function ()
        {
            textColor = $('.text-colour option:selected').val();
            console.log("colour text in select- " + textColor);
            $('.js-text-p').css('color', textColor);
        });

        $('.js-save').on('click', function ()
        {
            $('.js-edit').removeAttr('disabled');
            $('.js-save, .js-cancel, .text-colour').attr('disabled', true);
            localStorage.setItem('edit-text', $('.js-text-p').html());
            localStorage.setItem('css', $('.text-colour option:selected').val());
            editPElem.attr('contentEditable', false);
        });
        $('.js-cancel').on('click', function ()
        {
            $('.js-edit').removeAttr('disabled');
            $('.js-save, .js-cancel, .text-colour').attr('disabled', true);
            editText = localStorage.getItem('edit-text');
            editColor = localStorage.getItem('css');
            console.log('getItem: ' + editText);
            $('.js-text-p').html(editText);
            $('.js-text-p').css('color', editColor);
            editPElem.attr('contentEditable', false);
        })
    })
});
