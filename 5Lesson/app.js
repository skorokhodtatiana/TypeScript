//1 Написать дженерик функцию с одним параметром и с её помощью вывести в консоль сумму чисел,
//если параметры типа number и приветствие, если параметры типа string или boolean.
function echo(val) {
    if (typeof val === 'number') {
        console.log(val);
        return val;
    }
    else {
        console.log('Hi ' + val);
        return val;
    }
}
echo("nnnn");
//2 Создать обобщённый класс с тремя параметрами (T, V, K).
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
//3 Класс содержит три переменные типа (T, V, K), конструктор, принимающий на вход параметры типа (T, V, K), методы,
//возвращающие значения трёх переменных. Создать метод, выводящий на консоль имена классов для трёх переменных класса.
var ThreeMetod = /** @class */ (function () {
    function ThreeMetod(first, second, third) {
        this.first = first;
        this.second = second;
        this.third = third;
    }
    ThreeMetod.prototype.firstMethod = function () {
        return this.first;
    };
    ThreeMetod.prototype.secondMethod = function () {
        return this.second;
    };
    ThreeMetod.prototype.thirdMethod = function () {
        return this.third;
    };
    ThreeMetod.prototype.showTypes = function () {
        console.log(typeof this.first);
        console.log(typeof this.second);
        console.log(typeof this.third);
    };
    return ThreeMetod;
}());
var obj = {
    name: 'Tanja',
    fly: function () {
        console.log('летает');
    }
};
var firs = new ThreeMetod(obj, 28, 'role');
firs.showTypes();
console.log(firs.firstMethod());
console.log(firs.secondMethod());
console.log(firs.thirdMethod());
//4 Создать класс Fruits, Vegetables и функцию, которая будет проверять тип переменной
//и выводить в консоль разный текст, в зависимости от типа данных.
var Fruits = /** @class */ (function () {
    function Fruits(fruits) {
        this.fruits = fruits;
    }
    return Fruits;
}());
var Vegetables = /** @class */ (function () {
    function Vegetables(vegetables) {
        this.vegetables = vegetables;
    }
    return Vegetables;
}());
function checkType(arg) {
    if (arg instanceof Fruits) {
        console.log("".concat(arg.fruits, " \u044D\u0442\u0438 \u0444\u0440\u0443\u043A\u0442\u044B \u043E\u0447\u0435\u043D\u044C \u0441\u043B\u0430\u0434\u043A\u0438\u0435"));
    }
    else {
        console.log("".concat(arg.vegetables, " \u044D\u0442\u0438 \u043E\u0432\u043E\u0449\u0438 \u043E\u0447\u0435\u043D\u044C \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0435"));
    }
}
var fruit = new Fruits(['яблоко', 'груша', 'апельсин']);
var veget = new Vegetables(['морковь', 'свекла', 'картофель']);
checkType(fruit);
checkType(veget);
