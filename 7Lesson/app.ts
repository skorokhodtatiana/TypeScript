

interface addToCart {
	addToCart(): any;
}

interface addToMessage {
	addToMessage(): any;
}
class Cart implements addToMessage, addToMessage {
	name: String;
	price: Number;
	num: Number;

	constructor (name: String, price: Number, num: Number) {
		this.name =name;
		this.price = price;
		this.num = num;
	}
	addToMessage() {
		console.log('Вывести сообщение');
	}
	addToCart(){
		console.log('Добавить в корзину');
	}
}
