//1. Создайте класс `Person`, который содержит переменные `name`,  `age`, `isStudent`.
//2. Создайте три экземпляра класса Person.
var Person = /** @class */ (function () {
    function Person(name, age, isStudent) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
    Person.prototype.displayConsol = function () {
        console.log("\u042D\u0442\u043E ".concat(this.name, ", ").concat(this.age, " \u043B\u0435\u0442, \u0441\u0442\u0443\u0434\u0435\u043D\u0442? ").concat(this.isStudent));
    };
    return Person;
}());
;
var Tanja = new Person('Tanja', 35, false);
Tanja.displayConsol();
var Nastja = new Person('Nastja', 14, false);
Nastja.displayConsol();
var Alex = new Person('Alex', 20, true);
Alex.displayConsol();
