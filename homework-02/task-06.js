'use strict';


let input;
const numbers = [];
let total = 0;

while (input !== null) {
    input = prompt('Введите число');
    if (isNaN(input)) {
        alert('Вы ввели не число. Попробуйте еще раз!')

    } else {
        numbers.push(input);
    }
}

if (numbers[0] !== null) {
    for (const number of numbers) {
        total += Number(number)
    }
    console.log(`Общая сумма чисел равна ${total}`)
} else {
    console.log('Вы не ввели ни одного числа!')
}