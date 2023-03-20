import { ShopingCart } from './5Task.js';


const cart = new ShopingCart([{name: 'tomate', price: 300}]);
console.log(cart);

//1 Создать класс User и у него декоратор, который будет генерировать id (с помощью встроенной в Typescript функции Random).
type Constructable = {new (...args: any[]): any; };

function creatId (constructor: Constructable) {
	const generatedId = Math.random();
	return class extends constructor {
		public id = generatedId;
	}
}

@creatId
class User {
	public id: Number;
}

const newUserOne = new User;
console.log(newUserOne.id);

// 2. У класса User должны быть поля:
// - name: string;
// - registrationDate: Date;
// - orderHistory: Array<Order>.

// Необходимо создать декоратор, который сделает невозможным изменение поля `registrationDate`.

const notChangeRegistrationDate = (target: Object, propertyKey: String): any => {
	let descriptor: PropertyDescriptor = {
		configurable: false,
		
	}
	return descriptor;
}
class UserTwo {
	name: String;
	@notChangeRegistrationDate
	registrationDate: Date;
	orderHistory: Array<Object>;
	constructor (name: String, registrationDate: Date, orderHistory: Array<Object>) {
		this.name = name;
		this.registrationDate = registrationDate;
		this.orderHistory = orderHistory;
	}
}
const date = new Date(2021, 1, 20);
const ord = [{name: "стул", price: 3}];
const newUserTwo = new UserTwo('Petja', date, ord);
console.log(newUserTwo);

// 3 Создать геттер для поля name и сеттер для добавления новой позиции в orderHistory.
export class UserThree {
	name: String;

	get nameUser(): String {
		return this.name;
	}

	set addItem (value: String[]) {
		this.orderHistory = value;
	}

	registrationDate: Date;
	orderHistory: Array<String>;
}

const newUserThree = new UserThree();
newUserThree.name = 'Alex';
console.log(newUserThree.nameUser);
newUserThree.addItem = ['nnn', 'nnnn'];
console.log(newUserThree);

// 4 Создать класс Order с полями name:string, price: number,
//создать метод addToShopingCart, который добавляет товары в корзину
//и содержит декоратор, который выводит в консоль название товара.

export const showNewItem = (target: Object, propertyKey: String, descriptor: PropertyDescriptor ) => {
	console.log(descriptor.value)
}
export class Order {
	name: String;
	price: Number;

	constructor(name:string, price: number) {
		this.name = name;
		this.price = price;
	}
	@showNewItem
	addToShopingCart() {
		return `${this.name} - ${this.price}`
	}
}

const OneOrder = new Order('apple', 2);
