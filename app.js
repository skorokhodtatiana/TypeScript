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
