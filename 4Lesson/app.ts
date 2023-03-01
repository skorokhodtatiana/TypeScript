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
};

const Tanja = new Person('Tanja', 35, false);
const Nastja = new Person('Nastja', 14, false);
const Alex = new Person('Alex', 20, true);
