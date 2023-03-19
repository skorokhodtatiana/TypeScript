//5. Создать класс ShopingCart, который содержит список товаров.

export class ShopingCart {
	list: Array<Object>
	constructor(list: Array<Object>) {
		this.list = list
	}
}