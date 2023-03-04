//1. Создайте класс `Person`, который содержит переменные `name`,  `age`, `isStudent`.
//2. Создайте три экземпляра класса Person.
class Person {
	name: String
	age: Number
	isStudent: Boolean

	constructor(
		name: String,
		age: Number,
		isStudent: Boolean
	) {
		this.name = name;
		this.age = age;
		this.isStudent = isStudent;
	}

	displayConsol() {
		console.log(`Это ${this.name}, ${this.age} лет, студент? ${this.isStudent}`);
	}
};

const Tanja = new Person('Tanja', 35, false);
Tanja.displayConsol();
const Nastja = new Person('Nastja', 14, false);
Nastja.displayConsol();
const Alex = new Person('Alex', 20, true);
Alex.displayConsol();

//4 Создайте пример наследования через абстрактный класс и через интерфейс,
//реализуйте класс Student и класс Aspirant, аспирант отличается от студента наличием некой научной работы.

abstract class Educated {
	constructor(
		name: string,
		restEducation: number,
	) {}
	abstract showResult();
};

class Student extends Educated {
	showResult(): void {
		console.log('сдает лабораторные');
	}
}

const Pet = new Student('pet', 2);
Pet.showResult();

class Aspirant extends Educated {
	coursework: string;
	constructor(
		coursework: string,
		name: string,
		restEducation: number,
	) {
		super(name, restEducation)
		this.coursework = coursework
	}
	showResult(): void {
		console.log('пишет курсовую');
	}
}

const Pol = new Aspirant('pol', 'newCoursWork', 1 );
Pol.showResult();

//5 Если средняя оценка студента равна 5, то сумма 200, иначе 150. 
class Student2 {
		cours: number;
		gpa: number;
	constructor(
		cours: number,
		gpa: number
	) {
		this.cours  = cours,
		this.gpa =gpa
	}
	getScholarship() {
		this.gpa === 5 ? console.log(200) : console.log(150);
	}
}

const OneStudent = new Student2(4, 4);
OneStudent.getScholarship();

class Aspirant2 extends Student2{
	constructor(
		cours: number,
		gpa: number
	) {
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
	constructor (
		name: string,
		price: string,
		date: number,
		count: number,
		category: string,
	) {}
}

class Food extends Item {
	expirationDate: number
	constructor (
		expirationDate: number,
		name: string,
		price: string,
		date: number,
		count: number,
		category: string,
	) {
		super (name, price, date, count, category);
		this.expirationDate = expirationDate;
	}
}


class Buyer {
	password: string;
	login: string;
	hystory: object;

	constructor (
		password: string,
		login: string,
		hystory: object,
	) {
		this.password = password;
		this.login = login;
		this.hystory = hystory;
	}
	byu() {
		console.log("Купил то и это");
	}
}

