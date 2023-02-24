var secondLesson = () => {
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

	//Создайте 3 enum с данными
	enum Fruits {Apple, Orange, Banana};
	enum Books {Novel, Detective, Prose};
	enum Cars {Audi, Lada, Porshe};

	//Создайте объект животное (Animal), который содержит название, возраст, является ли животное млекопитающим, домашнее оно или дикое.
	const animal = {
		name: "dog",
		age: 2,
		mammal: true,
		pet: true,
	};
	console.log(animal);

	//Создайте переменную собственного типа, а потом инициализируйте её значение.
	type MyType = string | boolean;
	let MyType = true;
};

secondLesson();

//3 УРОК
//1
function compareNumber(a: number): void {
	a === 0 || a === 2 ? console.log(a + 7) : console.log(a / 10);
};

compareNumber(5);
compareNumber(0);
compareNumber(-3);
compareNumber(2);

//2 Если переменная a равна нулю, то выведите в консоль 'Верно', иначе выведите 'Неверно'. 
function displayWord (a: number): void{
	if (a === 0) {
		console.log('Верно');
	} else {
		console.log('Неверно');
	}
};

displayWord(7);
displayWord(0);
displayWord(1);

//3 Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', 
//то в переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en', то на английском.
//Решите задачу через if и через switch-case.

function writeArr(lang: string){
	let arr: Array<string>; 
	if (lang === 'ru') {
		arr=['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
		return arr;
	} else if (lang === 'en') {
		arr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
		return arr;
	}
};

console.log(writeArr('ru'));

function writeNextArr(lang: string): Array<any>{
	let arr: Array<string>; 
	switch(lang){
		case 'ru': {
			arr=['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
			return arr
			break
		}
		case 'en': {
			arr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
			return arr;
			break
		}
		default: {
			return arr=[];
		}
	}
};

console.log(writeNextArr('en'));

//4С помощью логических ветвлений рассчитайте, какую сумму работник должен перечислить на налог
//и какую сумму он получит на руки, если налоги начисляются таким образом:
//Зарплата до 6000 включительно — 10%;
//Зарплата до 10 000 включительно — 15%;
//Зарплата до 15 000 включительно — 17.5%;
//Зарплата свыше 15 000 — 20%.

function calculatesalary(salary: number){
	let salaryHand: number;
	let tax: number;
	if (salary <= 6000) {
		tax = salary * 0.1;
		salaryHand = salary - tax;
		return {tax: tax, salaryHand: salaryHand};
	} else if (salary <= 10000) {
		tax = salary * 0.15;
		salaryHand = salary - tax;
		return {tax: tax, salaryHand: salaryHand};
	} else if (salary <= 15000) {
		tax = salary * 0.175;
		salaryHand = salary - tax;
		return {tax: tax, salaryHand: salaryHand};
	} else {
		tax = salary * 0.2;
		salaryHand = salary - tax;
		return {tax: tax, salaryHand: salaryHand};
	}
};

console.log(calculatesalary(8000));

//Выведите столбец чисел от 1 до 50 с помощью цикла.
function showNumberCucle(num: number){
	for(let i=1; i<=50; i++) {
		console.log(i);
	}
};

showNumberCucle(50);

//Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for выведите все числа в столбец вместе с текстом ‘Результат: ’.
function showResultCycle(arr: Array<any>){
	for(let i=0; i<arr.length; i++) {
		console.log(`Результат: ${arr[i]}`);
	}
};

showResultCycle( [2, 3, 4, 5]);

//используя for-in вывести данные
function displayCycle() {
	let obj = {
		'кот': 'мяу',
		'собака': 'гав',
		'корова': 'муу',
	};

	for(let item in obj) {
		console.log(item + ' говорит ' + obj[item]);
	}
};

displayCycle();

