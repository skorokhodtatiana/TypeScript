var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//1 Создать класс User и у него декоратор, который будет генерировать id (с помощью встроенной в Typescript функции Random).
function creatId(constructor) {
    var id;
    id = Math.random();
}
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User = __decorate([
        creatId
    ], User);
    return User;
}());
var petja = new User('Petja', 45);
console.log(petja);
console.log('petja');
