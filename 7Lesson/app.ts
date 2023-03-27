class Cart {
	name: String;
	price: Number;
	num: Number;

	constructor (name: String, price: Number, num: Number) {
		this.name =name;
		this.price = price;
		this.num = num;
	}
}

interface addToCart<T> {
	// addToCart(): T {
	// 	console.log('Добавить в корзину');
	// 	return Tanja;
	// }
	addToCart(): T;
}

interface addToMessage<T> {
	// addToCart(): T {
	// 	console.log('Добавить в корзину');
	// 	return Tanja;
	// }
	addToMessage(): T;
}

