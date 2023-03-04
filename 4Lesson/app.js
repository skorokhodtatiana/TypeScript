var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//Создайте пример наследования через абстрактный класс и через интерфейс,
//реализуйте класс Student и класс Aspirant, аспирант отличается от студента наличием некой научной работы.
var Educated = /** @class */ (function () {
    function Educated(name, restEducation) {
    }
    return Educated;
}());
;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.showResult = function () {
        console.log('сдает лабораторные');
    };
    return Student;
}(Educated));
var Pet = new Student('pet', 2);
Pet.showResult();
var Aspirant = /** @class */ (function (_super) {
    __extends(Aspirant, _super);
    function Aspirant(coursework, name, restEducation) {
        var _this = _super.call(this, name, restEducation) || this;
        _this.coursework = coursework;
        return _this;
    }
    Aspirant.prototype.showResult = function () {
        console.log('пишет курсовую');
    };
    return Aspirant;
}(Educated));
var Pol = new Aspirant('pol', 'newCoursWork', 1);
Pol.showResult();
//5Если средняя оценка студента равна 5, то сумма 200, иначе 150. 
var Student2 = /** @class */ (function () {
    function Student2(cours, gpa) {
        this.cours = cours,
            this.gpa = gpa;
    }
    Student2.prototype.getScholarship = function () {
        this.gpa === 5 ? console.log(200) : console.log(150);
    };
    return Student2;
}());
var OneStudent = new Student2(4, 4);
OneStudent.getScholarship();
var Aspirant2 = /** @class */ (function (_super) {
    __extends(Aspirant2, _super);
    function Aspirant2(cours, gpa) {
        return _super.call(this, cours, gpa) || this;
    }
    Aspirant2.prototype.getScholarship = function () {
        this.gpa === 5 ? console.log(300) : console.log(250);
    };
    return Aspirant2;
}(Student2));
var OneAspirant = new Aspirant2(2, 5);
OneAspirant.getScholarship();
