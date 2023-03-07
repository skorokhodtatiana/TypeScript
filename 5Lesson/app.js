//Написать дженерик функцию с одним параметром и с её помощью вывести в консоль сумму чисел,
//если параметры типа number и приветствие, если параметры типа string или boolean.
function echo(val) {
    if (typeof val === 'number') {
        console.log(val);
        return val;
    }
    else {
        console.log('Hy ' + val);
    }
}
echo("nnnn");
