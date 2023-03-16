//1 Создать класс User и у него декоратор, который будет генерировать id (с помощью встроенной в Typescript функции Random).
function creatId (constructor: Function) {
	let id: number;
	id = Math.random();
}

@creatId
class User {
	name: String;
	age: Number;
	constructor (name: String, age: Number) {
		this.name = name;
		this.age = age;
	}
}

const petja = new User('Petja', 45);
console.log(petja);
console.log('petja');
