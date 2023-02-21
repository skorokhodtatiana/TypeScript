var secondLesson = function () {
    //Получите сумму let random1 = 39  let random2 = ‘18’ и выведите в консоль со словом Сумма: перед.
    var showSum = function (n1, n2, sum) {
        var sumNumber = +n1 + +n2;
        console.log(sum + sumNumber);
    };
    var random1 = 39;
    var random2 = "18";
    var result = "Сумма: ";
    showSum(random1, random2, result);
    //Создайте массив cities с любыми 4-мя городами внутри
    var cities = ["Minsk", "Krakow", "Brest", "Orsha"];
    console.log(cities);
    //добавьте 1 новый город в начало списка
    cities.unshift("Lida");
    console.log(cities);
    //удалите 1 город из конца списка
    cities.pop();
    console.log(cities);
    //Создайте объект из 4 городов, где ключом будет название города, а значением население этого города
    var town = {
        Minsk: 10000,
        Brest: 3000,
        Lida: 1500,
        Orsha: 1000
    };
    //выводим в консоль ключи
    console.log(Object.keys(town));
    //выводим в консоль значения
    console.log(Object.values(town));
    //выводим в консоль  значение первого города.
    console.log(town.Minsk);
    //Создайте 3 enum с данными
    var Fruits;
    (function (Fruits) {
        Fruits[Fruits["Apple"] = 0] = "Apple";
        Fruits[Fruits["Orange"] = 1] = "Orange";
        Fruits[Fruits["Banana"] = 2] = "Banana";
    })(Fruits || (Fruits = {}));
    ;
    var Books;
    (function (Books) {
        Books[Books["Novel"] = 0] = "Novel";
        Books[Books["Detective"] = 1] = "Detective";
        Books[Books["Prose"] = 2] = "Prose";
    })(Books || (Books = {}));
    ;
    var Cars;
    (function (Cars) {
        Cars[Cars["Audi"] = 0] = "Audi";
        Cars[Cars["Lada"] = 1] = "Lada";
        Cars[Cars["Porshe"] = 2] = "Porshe";
    })(Cars || (Cars = {}));
    ;
    //Создайте объект животное (Animal), который содержит название, возраст, является ли животное млекопитающим, домашнее оно или дикое.
    var animal = {
        name: "dog",
        age: 2,
        mammal: true,
        pet: true
    };
    console.log(animal);
    var MyType = true;
};
secondLesson();
//3 УРОК
function compareNumber(a) {
    if (a === 0 || a === 2) {
        console.log(a + 7);
    }
    else {
        console.log(a / 10);
    }
}
;
compareNumber(5);
compareNumber(0);
compareNumber(-3);
compareNumber(2);
