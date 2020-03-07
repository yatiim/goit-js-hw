'use strict';

const products = [{
        name: 'Радар',
        price: 1300,
        quantity: 4
    },
    {
        name: 'Сканер',
        price: 2700,
        quantity: 3
    },
    {
        name: 'Дроид',
        price: 400,
        quantity: 7
    },
    {
        name: 'Захват',
        price: 1200,
        quantity: 2
    },

];

const calculateTotalPrice = function (allProducts, productName) {
    let total = 0;
    for (const product of allProducts) {
        if (Object.values(product).includes(productName)) {
            total += Object.values(product)[1] * Object.values(product)[2];
        }
    }
    return `Общая стоимость продукта ${productName} составляет ${total}`
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800