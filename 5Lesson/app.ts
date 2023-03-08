//Написать дженерик функцию с одним параметром и с её помощью вывести в консоль сумму чисел,
//если параметры типа number и приветствие, если параметры типа string или boolean.
function echo <T>(val: T): T {
	if (typeof val === 'number') {
		console.log(val);
		return val;
	} else {
		console.log('Hy ' + val)
		return val;
	}
}

echo("nnnn");

//Создать обобщённый класс с тремя параметрами (T, V, K).
class Person <T, V, K>{
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