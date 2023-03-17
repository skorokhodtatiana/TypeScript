"use strict";
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
class PersonL {
    constructor(name, login, password) {
        this.name = name;
        this.login = login;
        this.password = password;
    }
    createAccount() {
        console.log(`Hi, ${this.name}`);
    }
}
const NewPerson = new PersonL('Tanja', 'login', 'password');
NewPerson.createAccount();
//3 Класс содержит три переменные типа (T, V, K), конструктор, принимающий на вход параметры типа (T, V, K), методы,
//возвращающие значения трёх переменных. Создать метод, выводящий на консоль имена классов для трёх переменных класса.
class ThreeMetod {
    constructor(first, second, third) {
        this.first = first;
        this.second = second;
        this.third = third;
    }
    firstMethod() {
        return this.first;
    }
    secondMethod() {
        return this.second;
    }
    thirdMethod() {
        return this.third;
    }
    showTypes() {
        console.log(typeof this.first);
        console.log(typeof this.second);
        console.log(typeof this.third);
    }
}
const obj = {
    name: 'Tanja',
    fly() {
        console.log('летает');
    }
};
const firs = new ThreeMetod(obj, 28, 'role');
firs.showTypes();
console.log(firs.firstMethod());
console.log(firs.secondMethod());
console.log(firs.thirdMethod());
//4 Создать класс Fruits, Vegetables и функцию, которая будет проверять тип переменной
//и выводить в консоль разный текст, в зависимости от типа данных.
class Fruits {
    constructor(fruits) {
        this.fruits = fruits;
    }
}
class Vegetables {
    constructor(vegetables) {
        this.vegetables = vegetables;
    }
}
function checkType(arg) {
    if (arg instanceof Fruits) {
        console.log(`${arg.fruits} эти фрукты очень сладкие`);
    }
    else {
        console.log(`${arg.vegetables} эти овощи очень полезные`);
    }
}
const fruit = new Fruits(['яблоко', 'груша', 'апельсин']);
const veget = new Vegetables(['морковь', 'свекла', 'картофель']);
checkType(fruit);
checkType(veget);
let newPerson;
newPerson = {
    name: 20, age: 'Tanja'
};
console.log(newPerson);
