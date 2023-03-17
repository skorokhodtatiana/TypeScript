"use strict";
//1. Создайте класс `Person`, который содержит переменные `name`,  `age`, `isStudent`.
//2. Создайте три экземпляра класса Person.
class Person {
    constructor(name, age, isStudent) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
    displayConsol() {
        console.log(`Это ${this.name}, ${this.age} лет, студент? ${this.isStudent}`);
    }
}
;
const Tanja = new Person('Tanja', 35, false);
Tanja.displayConsol();
const Nastja = new Person('Nastja', 14, false);
Nastja.displayConsol();
const Alex = new Person('Alex', 20, true);
Alex.displayConsol();
//4 Создайте пример наследования через абстрактный класс и через интерфейс,
//реализуйте класс Student и класс Aspirant, аспирант отличается от студента наличием некой научной работы.
class Educated {
    constructor(name, restEducation) {
        this.name = name;
        this.restEducation = restEducation;
    }
}
;
class Student extends Educated {
    constructor(name, restEducation) {
        super(name, restEducation);
    }
    showResult() {
        console.log('сдает лабораторные');
    }
}
const Pet = new Student('pet', 2);
console.log(Pet.name);
Pet.showResult();
class Aspirant extends Educated {
    constructor(coursework, name, restEducation) {
        super(name, restEducation);
        this.coursework = coursework;
    }
    showResult() {
        console.log('пишет курсовую');
    }
}
const Pol = new Aspirant('pol', 'newCoursWork', 1);
console.log(Pol.name);
Pol.showResult();
//5 Если средняя оценка студента равна 5, то сумма 200, иначе 150. 
class Student2 {
    constructor(cours, gpa) {
        this.cours = cours,
            this.gpa = gpa;
    }
    getScholarship() {
        this.gpa === 5 ? console.log(200) : console.log(150);
    }
}
const OneStudent = new Student2(4, 4);
OneStudent.getScholarship();
class Aspirant2 extends Student2 {
    constructor(cours, gpa) {
        super(cours, gpa);
    }
    getScholarship() {
        this.gpa === 5 ? console.log(300) : console.log(250);
    }
}
const OneAspirant = new Aspirant2(2, 5);
OneAspirant.getScholarship();
//6
// Создайте классы для описания интернет-магазина.
// У него должны быть несколько категорий товаров (с названием и ценой),
// покупатели (которые для покупки должны зарегистрироваться,
// соответственно у покупателя будет пароль, логин и история покупок),
// корзина. Также должны быть методы: добавить в корзину, купить, зарегистрироваться,
// войти в аккаунт.
class Item {
    constructor(name, price, date, count, category) { }
    addToBasket() {
        console.log("Добавить в корзину этот товар");
    }
}
class Food extends Item {
    constructor(expirationDate, name, price, date, count, category) {
        super(name, price, date, count, category);
        this.expirationDate = expirationDate;
    }
}
class householdItems extends Item {
    constructor(categoryHome, name, price, date, count, category) {
        super(name, price, date, count, category);
        this.categoryHome = categoryHome;
    }
}
class Buyer {
    constructor(password, login, hystory) {
        this.password = password;
        this.login = login;
        this.hystory = hystory;
    }
    register() {
        console.log("Вывести форму для ввода данных при регистрации");
    }
    logIn() {
        return `Имя: ${this.login} Пароль: ${this.password}`;
    }
}
class Basket {
    constructor(item, amount, price, list) {
        this.item = item;
        this.amount = amount;
        this.price = price;
        this.list = list;
    }
    addItem() {
        return this.item;
    }
    deletItem() {
        this.item = '';
    }
}
const cat = new Basket('item', 1, 1000, []);
console.log(cat.deletItem());
