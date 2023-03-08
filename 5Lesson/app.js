//Написать дженерик функцию с одним параметром и с её помощью вывести в консоль сумму чисел,
//если параметры типа number и приветствие, если параметры типа string или boolean.
function echo(val) {
    if (typeof val === 'number') {
        console.log(val);
        return val;
    }
    else {
        console.log('Hy ' + val);
        return val;
    }
}
echo("nnnn");
//Создать обобщённый класс с тремя параметрами (T, V, K).
var Person = /** @class */ (function () {
    function Person(name, login, password) {
        this.name = name;
        this.login = login;
        this.password = password;
    }
    Person.prototype.createAccount = function () {
        console.log("Hi, ".concat(this.name));
    };
    return Person;
}());
var NewPerson = new Person('Tanja', 'login', 'password');
NewPerson.createAccount();
