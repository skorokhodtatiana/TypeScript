"use strict";
//1 Создать класс User и у него декоратор, который будет генерировать id (с помощью встроенной в Typescript функции Random).
// function creatId (constructor: Function) {
// 	let createId = Math.random();
// 	return class extends constructor {
// 		public id = createId;
// 		name: String;
// 		age: Number;
// 	}
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
