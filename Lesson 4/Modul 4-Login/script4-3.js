var user = {
    name: 'Ivan',
    login: 'IvanDen',
    password: 'skillbox'
};


// var reqPassw = promt('Ведите вашь пароль.');

function requesVerification(use) {
    var reqLogin = prompt('Ведите ваш логин.');
    var reqPassword = prompt('Ведите ваш пароль.');
    var userLogin;
    if (reqLogin === use.login && reqPassword === use.password) {
        alert('здравствуйте ' + use.name + ', вы успешно вошли в систему!');
    }
    else {
        alert('Ошибка авторизации пользователя!');
    }
}
requesVerification(user);