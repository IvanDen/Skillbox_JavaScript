function isNumber(num)
{
    return !isNaN(parseFloat(num));
}

class User
{
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.regDate = new Date();
    }
        getFullInfo() {
            return this.firstName + ' ' + this.lastName + ', время: ' + this.regDate;
        }
}

class UserList
{
    constructor()
    {
        this.users =  []; // это массив, в котором хранятся все пользователи которые регестрируются
    }


    add()
    {
        let fullName;
        while (fullName = prompt('Введите Имя Фамилию через пробел, без чисел:', '')) {
            if (!fullName)
                continue;

            let names = fullName.split(" ");

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

            let user = new User(names[0], names[1]);

            console.log("array length users", this.users.length);

            if (this.users.length)
            {
                console.log("created user", user.firstName);
                console.log("array users", this.users.find(item => item.firstName === user.firstName));

                // делаем проверку на наличие пользователя в массиве
                if (this.users.find(item => item.firstName === user.firstName && item.lastName === user.lastName))
                {
                    console.log('User exist');
                    alert('Данный пользователь уже зарегестрирован');
                }
                else
                {
                    console.log('User not exist');
                    this.users.push(user);
                }
            }
            else
            {
                console.log('users added without verification');
                this.users.push(user);
            }
        }
    };

    getAllUsers(user) {
        return this.users;
    }
}

let userList = new UserList();

userList.add();


console.log(userList.getAllUsers());
