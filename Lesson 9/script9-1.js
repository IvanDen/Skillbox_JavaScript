$(document).ready(function()
{
    var task;
    var butAddTask = document.querySelector('.js-to-push');

    butAddTask.addEventListener('click', function ()
    {
        var lengthLi = $('li').length;

        if (lengthLi == 0)
        {
            console.log("Меньше нуля - " + lengthLi);
            task = document.getElementsByClassName('name-task')[0].value;
            if (!task)
            {
                alert('Введите задачу!');
                return;
            }
            else
            {
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(task));
                li.classList.add('todo-list');
                li.addEventListener('click', function(){ this.classList.toggle('active'); });
                document.querySelector('ol').appendChild(li);
            }
        }
        else if (lengthLi > 0)
        {
            task = document.getElementsByClassName('name-task')[0].value;
            console.log('lengthLi > 0 = ' + lengthLi);
            if (!task)
            {
                alert('Введите задачу!');
                return;
            }
            $('li').each(function ()
            {
                if ($(this).text() == task)
                    {
                        if (confirm('Are you sure?') != true)
                        {
                            console.log('task = ' + task);
                            task = '';
                            return false;

                        }
                        return false;
                    }
            });

            if (task == '')
                return task;

            var li = document.createElement("li");
            li.appendChild(document.createTextNode(task));
            li.classList.add('todo-list');
            li.addEventListener('click', function(){ this.classList.toggle('active'); });
            document.querySelector('ol').appendChild(li);
        }
        document.getElementsByClassName('name-task')[0].value = "";
    });
});




