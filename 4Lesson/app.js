//1. Создайте класс `Person`, который содержит переменные `name`,  `age`, `isStudent`.
//2. Создайте три экземпляра класса Person.
var Person = /** @class */ (function () {
    function Person(name, age, isStudent) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
    return Person;
}());
;
var Tanja = new Person('Tanja', 35, false);
var Nastja = new Person('Nastja', 14, false);
var Alex = new Person('Alex', 20, true);
