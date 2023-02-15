//Получите сумму let random1 = 39  let random2 = ‘18’ и выведите в консоль со словом Сумма: перед.
const showSum = (n1:number, n2:number | string, sum:string) => {
	const sumNumber = +n1 + +n2;
	console.log(sum + sumNumber)
};
let random1 = 39;
let random2 = "18";
let result = "Сумма: "
showSum(random1, random2, result);

//Создайте массив cities с любыми 4-мя городами внутри
const cities = ["Minsk", "Krakow", "Brest", "Orsha"];
console.log(cities);

	//добавьте 1 новый город в начало списка
	cities.unshift("Lida");
	console.log(cities);

	//удалите 1 город из конца списка
	cities.pop();
	console.log(cities);

//Создайте объект из 4 городов, где ключом будет название города, а значением население этого города
const town = {
	Minsk: 10000,
	Brest: 3000,
	Lida: 1500,
	Orsha: 1000,
}

//выводим в консоль ключи
console.log(Object.keys(town));

//выводим в консоль значения
console.log(Object.values(town));

//выводим в консоль  значение первого города.
console.log(town.Minsk);