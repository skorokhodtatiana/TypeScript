//Написать дженерик функцию с одним параметром и с её помощью вывести в консоль сумму чисел,
//если параметры типа number и приветствие, если параметры типа string или boolean.
function echo <T>(val: T): T {
	if (typeof val === 'number') {
		console.log(val);
		return val;
	} else {
		console.log('Hi ' + val)
		return val;
	}
}

echo("nnnn");

//Создать обобщённый класс с тремя параметрами (T, V, K).
class Person <T, V, K> {
	name: T;
	login: V;
	password: K;
	constructor (
		name: T,
		login: V,
		password: K,
	) {
		this.name = name;
		this.login = login;
		this.password = password;
	}
	createAccount(): void {
		console.log(`Hi, ${this.name}`);
	}
}

const NewPerson = new Person('Tanja', 'login', 'password');
NewPerson.createAccount();

//Класс содержит три переменные типа (T, V, K), конструктор, принимающий на вход параметры типа (T, V, K), методы,
//возвращающие значения трёх переменных. Создать метод, выводящий на консоль имена классов для трёх переменных класса.

class ThreeMetod <T, V, K>{
	first: T;
	second: V;
	third: K;
	constructor(first: T, second: V, third: K){
		this.first = first;
		this.second = second;
		this.third = third;
	}
	firstMetod() {
		if (typeof this.first !== undefined ) {
			console.log(typeof this.first)
		} else {
			console.log(instanceof this.first)
		}
		
	}
}