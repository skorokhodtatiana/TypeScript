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

//Создайте пример наследования через абстрактный класс и через интерфейс,
//реализуйте класс Student и класс Aspirant, аспирант отличается от студента наличием некой научной работы.
