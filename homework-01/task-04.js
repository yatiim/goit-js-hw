'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let ordered = prompt('Сколько Вы хотите заказать?');
let totalPrice;
let balanceCredits;

if (ordered === null) {
    console.log('Отменено пользователем!');
} else {
    totalPrice = ordered * pricePerDroid;
    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        balanceCredits = credits - totalPrice;

        console.log(
            `Вы купили ${ordered} дроидов, на счету осталось ${balanceCredits} кредитов.`,
        );
    }
}
//========= ВТОРОЙ ВАРИАНТ КОДА========================================

// const credits = 23580;
// const pricePerDroid = 3000;
// let ordered = prompt('Сколько Вы хотите заказать?');
// let totalPrice = ordered * pricePerDroid;
// let balanceCredits = credits - totalPrice;

// if (ordered === null) {
//   console.log('Отменено пользователем!');
// } else if (totalPrice > credits) {
//   console.log('Недостаточно средств на счету!');
// } else {
//   console.log(
//     `Вы купили ${ordered} дроидов, на счету осталось ${balanceCredits} кредитов.`,
//   );
// }