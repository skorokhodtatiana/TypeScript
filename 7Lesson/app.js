var Cart = /** @class */ (function () {
    function Cart(name, price, num) {
        this.name = name;
        this.price = price;
        this.num = num;
    }
    Cart.prototype.addToMessage = function () {
        console.log('Вывести сообщение');
    };
    Cart.prototype.addToCart = function () {
        console.log('Добавить в корзину');
    };
    return Cart;
}());
