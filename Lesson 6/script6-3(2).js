function isNumber(num)
{
    return !isNaN(parseFloat(num));
}

function User(firstName, lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.regDate = new Date();

    this.getFullInfo = function () {
        return this.firstName + ' ' + this.lastName + ', время: ' + this.regDate;
    }
}

function UserList() {
    this.users =  []; // это массив, в котором хранятся все пользователи которые регестрируются

    this.add = function()
    {
        var fullName;
        while (fullName = prompt('Введите Имя Фамилию через пробел, без чисел:', '')) {
            if (!fullName)
                continue;

            var names = fullName.split(" ");

            // Делаем проверку на количество строк
            if (names.length !== 2) {
                alert('Вы ввели больше или меньше 2х значений');
                continue;
            }

            // делаем проверку на наличие цифр в строке
            if (/[0-9]/.test(names)) {
                alert('Вы ввели числа, не должно быть чисел!');
                continue;
            }

            var user = new User(names[0], names[1]);

            console.log("array length users", this.users.length);

            if (this.users.length)
            {
                for (let i = 0; i <= this.users.length; i++)
                {
                    console.log("index in array", i);
                    console.log("created user", user.firstName);
                    console.log("array users", this.users.find(item => item.firstName === user.firstName));

                    if (user.firstName === this.users[i].firstName && user.lastName === this.users[i].lastName)
                    {
                        console.log('User exist');
                        alert('Данный пользователь уже зарегестрирован');
                    }
                    else
                    {
                        console.log('User not exist');
                        //console.log(this.users);
                        this.users.push(user);

                    }
                    // break;

                }

            }
            else
            {
                console.log('users added without verification');
                this.users.push(user);
            }
        }
    };

    this.getAllUsers = function(user) {
        return this.users;
    }
}

var userList = new UserList();

userList.add();


console.log(userList.getAllUsers());

// if (this.users.find(item => item.firstName === user.firstName && item.lastName === user.lastName)/*&& this.users.find(item => item.lastName === user.lastName)*/)
