'use strict';


let input;
const numbers = [];
let total = 0;

while (input !== null) {
    input = prompt('Введите число');
    if (input === null) {
        break
    }
    if (isNaN(input)) {
        alert('Вы ввели не число. Попробуйте еще раз!')

    } else {
        numbers.push(input);
    }
}

if (numbers.length === 0) {
    console.log('Вы не ввели ни одного числа!')
} else {
    for (const number of numbers) {
        total += Number(number)
    }
    console.log(`Общая сумма чисел равна ${total}`)
}