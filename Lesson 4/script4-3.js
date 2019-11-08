
var users2 = {
    name: ['name1', 'name2', 'name3'],
    login: ['login1', 'login2', 'login3'],
    password: ['pass1', 'pass2', 'pass3']
};




// Авторизация пользователя

function requesVerification() {
    var reqLogin = prompt('Ведите ваш логин.');
    var reqPassword = prompt('Ведите ваш пароль.');

    if (reqLogin == users2['login'][0] && reqPassword == users2['password'][0]) {

        alert('Здравствуйте, ' + users2['name'][0] + ', Вы прошли авторизацию!!');
        return false;
    }
    else if (reqLogin == users2['login'][1] && reqPassword == users2['password'][1]) {
        alert('Здравствуйте, ' + users2['name'][1] + ', Вы прошли авторизацию!');
        return false;
    }
    else if (reqLogin == users2['login'][2] && reqPassword == users2['password'][2]) {
        alert('Здравствуйте, ' + users2['name'][2] + ', Вы прошли авторизацию!');
        return false;
    }
    else {
        alert('Ошибка авторизации, пользователь не найден!');
        return false;
    }
}
requesVerification();




