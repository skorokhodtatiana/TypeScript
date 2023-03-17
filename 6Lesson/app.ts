//1 Создать класс User и у него декоратор, который будет генерировать id (с помощью встроенной в Typescript функции Random).
// function creatId (constructor: Function) {
// 	let createId = Math.random();
// 	return class extends constructor {
// 		public id = createId;
// 		name: String;
// 		age: Number;
// 	}
// }

// @creatId
// class User {
// 	name: String;
// 	age: Number;
// 	id: Number;
// 	constructor (name: String, age: Number) {
// 		this.name = name;
// 		this.age = age;
		
// 	}
// }

// const petja = new User('Petja', 45, );
// console.log(petja);

function creatId (constructor: Function) {
	let id = Math.random();
	//console.log(id);
}

@creatId
class User {
	id: Number;
	constructor(id: Number) {
		this.id = id
	}
}

// const petja = new User(constructor);
console.log(User);


