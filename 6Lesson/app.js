var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ShopingCart } from './5Task.js';
const cart = new ShopingCart([{ name: 'tomate', price: 300 }]);
console.log(cart);
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
function creatId(constructor) {
    let id = Math.random();
    //console.log(id);
}
let User = class User {
    constructor(id) {
        this.id = id;
    }
};
User = __decorate([
    creatId,
    __metadata("design:paramtypes", [Number])
], User);
// const petja = new User(constructor);
console.log(User);
// 2. У класса User должны быть поля:
// - name: string;
// - registrationDate: Date;
// - orderHistory: Array<Order>.
// Необходимо создать декоратор, который сделает невозможным изменение поля `registrationDate`.
const notChangeRegistrationDate = (target, propertyKey) => {
    let descriptor = {
        configurable: false,
    };
    return descriptor;
};
class UserTwo {
    constructor(name, registrationDate, orderHistory) {
        this.name = name;
        this.registrationDate = registrationDate;
        this.orderHistory = orderHistory;
    }
}
const date = new Date(2021, 1, 20);
const order = ["стул"];
const newUserTwo = new UserTwo('Petja', date, order);
console.log(newUserTwo);
// 3 Создать геттер для поля name и сеттер для добавления новой позиции в orderHistory.
export class UserThree {
    get nameUser() {
        return this.name;
    }
    set addItem(value) {
        this.orderHistory = value;
    }
}
const newUserThree = new UserThree();
newUserThree.name = 'Alex';
console.log(newUserThree.nameUser);
newUserThree.addItem = ['nnn', 'nnnn'];
console.log(newUserThree);
// 4 Создать класс Order с полями name:string, price: number,
//создать метод addToShopingCart, который добавляет товары в корзину
//и содержит декоратор, который выводит в консоль название товара.
export const showNewItem = (target, propertyKey, descriptor) => {
    console.log(descriptor.value);
};
export class Order {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    addToShopingCart() {
        return `${this.name} - ${this.price}`;
    }
}
__decorate([
    showNewItem,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Order.prototype, "addToShopingCart", null);
const OneOrder = new Order('apple', 2);
