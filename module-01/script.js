'use strict';

// const itemName1 = 'iron';
// const itemName2 = 'iphone';

// const price1 = '100';
// const price2 = '10000';

// let userName = '';

// userName = prompt('What is your name?');

// const itemCount = prompt('How much do you want?');

// const itemName = prompt('What do you want?');

// if (itemName === itemName1) {
//   console.log(
//     `You have ordered ${itemName} in ${itemCount} quantity. Total sum = ${itemCount *
//       price1}`,
//   );
// } else {
//   console.log(`We do not have any ${itemName}`);
// }

// const message = 'JavaScript is fun';

// console.log(message);

// const name = 'Mango';

// console.log('My name is', name);

// alert(message);
// alert(name);

// const hotelName = prompt('Enter hotel name, please!');

// const x = 5;

// const y = 10;

// const z = 5;
// console.log("x > y:", x > y);
// console.log('x < y:', x < y);
// console.log('x === y:', x === y);
// console.log('x !== z:', x !== z);
// console.log('x !== y:', x !== y)
// const valueA = '5';

// console.log(typeof valueA);
// console.log(Number(valueA));
// console.log(typeof valueA);
// console.log(typeof Number(valueA));

// const valueB = 'random string';

// console.log(typeof valueB);
// console.log(Number(valueB));
// console.log(typeof Number(valueB));

// const valueB = '1347892random string 587';

// console.log(Number.parseInt(valueB));
// console.log(Number.parseInt('48'));
// console.log(Number.parseInt('25+48qwe'));
// console.log(Number.parseInt('15.34 qwe'));
// console.log(Number.parseInt('qwerrty'));

// console.log(Number.parseFloat(valueB));
// console.log(Number.parseFloat('19.84 qwe'));
// console.log(Number.parseFloat('15.34 qwe'));

// const valid = Number('51');

// console.log(Number.isNaN('51'));
// console.log(Number.isNaN(Number('qwe')));

// console.log(Number.isNaN(valid));

// const invalid = Number('qweqwe');

// console.log(Number.isNaN(invalid));

// console.log((0.1 * 10 + 0.2 * 10) / 10);

// const admin = 'admin';
// const superUser = 'superUser';

// const value = prompt('enter your name');

// if (value === admin) {
//     console.log('you are cool');
// } else if (value === superUser) {
//     console.log('you are superCool');
// } else {
//     console.log('you are tramp');
// }

// switch (value) {
//     case admin:
//         console.log('you are cool');
//         break;
//     case superUser:
//         console.log('you are supercool');
//         break;
//     default:
//         console.log('you are tramp');
// }

// const string = 'hello moto';

// for (let i = 0; i < string.length; i++) {
//     console.log(string[i]);
// }

// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }

// for (let index = 100; index >= 0; i--) {
//     console.log(index);
// }

// for (let index = 100; index >= 0; index--) {
//     if (index === 50) {
//         continue;
//     }
//     if (index % 2 === 0) {
//         console.log(index);
//     }
// if (index === 50) {
//     break;
// }

// }
// let index = 0

// while (true) {
//     console.log(index);
//     index++;
//     if (index === 20) {
//         break;
//     }
// }

// let index = 0;

// do {
//     console.log(index);
//     if (index === 20) {
//         break;
//     }
// }
// while (index > 0);
// console.log(index);

// const num = 40;
// const result = num > 10 && num < 30;
// console.log(result);
// ====== Миша ========================================================
// const SECRET = 999;
// let input;
// let tries = 0;
// while (true) {
//   input = prompt("Введите число");
//   if (isNaN(input)) {
//     alert("Было введено не число, попробуйте еще раз");
//     tries++;
//     continue;
//   } else if (input === null) {
//     alert(`LOSE!!!!! you used ${tries} tries`);
//     break;
//   } else if (input < SECRET) {
//     alert("Secret number is bigger!!!!");
//     tries++;
//     continue;
//   } else if (input > SECRET) {
//     alert("Secret number is smaller!!!!");
//     tries++;
//     continue;
//   } else {
//     alert(`WON!!!!!! you used ${tries} tries`);
//     break;
//   }
// }

// ================Андрей======================================

// const SECRET_NUMBER = 999;
// let tries = 0;
// let answer;
// do {
//   tries++;
//   answer = prompt("Guess the number!");
//   if (answer === null) {
//     break;
//   }
//   answer = Number(answer);
//   console.log("answer -", answer);
//   if (Number.isNaN(answer)) {
//     console.log("Please, enter the number");
//   } else if (answer > SECRET_NUMBER) {
//     console.log("Try smaller number");
//   } else if (answer < SECRET_NUMBER) {
//     console.log("Try bigger number");
//   }
// } while (answer !== SECRET_NUMBER);
// if (answer === SECRET_NUMBER) {
//   console.log(`You guess the number: ${SECRET_NUMBER} with ${tries} try`);
// } else {
//   console.log("You have cancelled the game");
// }

// ===============================================================

// Task 1 ======================================

// const name = 'Генератор защитного поля';
// let price = 1000;

// console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);

// price = 2000;

// console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);

// Task 2 ======================================

// const total = 100;
// let ordered = 50;

// console.log(
//   ordered > total
//     ? 'На складе недостаточно твоаров!'
//     : 'Заказ оформлен, с вами свяжется менеджер',
// );

// ordered = 20;

// console.log(
//   ordered > total
//     ? 'На складе недостаточно твоаров!'
//     : 'Заказ оформлен, с вами свяжется менеджер',
// );
// ordered = 80;

// console.log(
//   ordered > total
//     ? 'На складе недостаточно твоаров!'
//     : 'Заказ оформлен, с вами свяжется менеджер',
// );

// ordered = 130;

// console.log(
//   ordered > total
//     ? 'На складе недостаточно твоаров!'
//     : 'Заказ оформлен, с вами свяжется менеджер',
// );

// ordered = 100;

// console.log(
//   ordered > total
//     ? 'На складе недостаточно твоаров!'
//     : 'Заказ оформлен, с вами свяжется менеджер',
// );

// ordered = 101;

// console.log(
//   ordered > total
//     ? 'На складе недостаточно твоаров!'
//     : 'Заказ оформлен, с вами свяжется менеджер',
// );

// ================================================

// const total = 100;
// let ordered = prompt('Сколько Вы хотите?');

// alert(
//   ordered > total
//     ? 'На складе недостаточно твоаров!'
//     : 'Заказ оформлен, с вами свяжется менеджер',
// );

// Task 3 ======================================

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// let userPassword = prompt('Введите пароль');

// if (userPassword === null) {
//   message = 'Отменено пользователем!';
// } else if (userPassword === ADMIN_PASSWORD) {
//   message = 'Добро пожаловать!';
// } else {
//   message = 'Доступ запрещен, неверный пароль!';
// }

// alert(message);

// Task 4 ======================================

// const credits = 23580;
// const pricePerDroid = 3000;
// let ordered = prompt('Сколько Вы хотите заказать?');
// let totalPrice;
// let balanceCredits;

// if (ordered === null) {
//   console.log('Отменено пользователем!');
// } else {
//   totalPrice = ordered * pricePerDroid;
//   if (totalPrice > credits) {
//     console.log('Недостаточно средств на счету!');
//   } else {
//     balanceCredits = credits - totalPrice;

//     console.log(
//       `Вы купили ${ordered} дроидов, на счету осталось ${balanceCredits} кредитов.`,
//     );
//   }
// }
//========================================

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

// Task 5 ======================================

// const delivery = prompt('Куда нужно доставить?');
// const delChina = 100;
// const delChile = 250;
// const delAustralia = 170;
// const delIndia = 80;
// const delJamaica = 120;

// switch (delivery.toLowerCase()) {
//   case 'china':
//     alert(
//       `Доставка в ${delivery.toUpperCase()} будет стоить ${delChina} кредитов`,
//     );
//     break;
//   case 'китай':
//     alert(
//       `Доставка в ${delivery.toUpperCase()} будет стоить ${delChina} кредитов`,
//     );
//     break;
//   case 'chile':
//     alert(
//       `Доставка в ${delivery.toUpperCase()} будет стоить ${delChile} кредитов`,
//     );
//     break;
//   case 'чили':
//     alert(
//       `Доставка в ${delivery.toUpperCase()} будет стоить ${delChile} кредитов`,
//     );
//     break;
//   case 'australia':
//     alert(
//       `Доставка в ${delivery.toUpperCase()} будет стоить ${delAustralia} кредитов`,
//     );
//     break;
//   case 'австралия':
//     alert(
//       `Доставка в ${delivery.toUpperCase()} будет стоить ${delAustralia} кредитов`,
//     );
//     break;
//   case 'india':
//     alert(
//       `Доставка в ${delivery.toUpperCase()} будет стоить ${delIndia} кредитов`,
//     );
//     break;
//   case 'индия':
//     alert(
//       `Доставка в ${delivery.toUpperCase()} будет стоить ${delIndia} кредитов`,
//     );
//     break;
//   case 'jamaica':
//     alert(
//       `Доставка в ${delivery.toUpperCase()} будет стоить ${delJamaica} кредитов`,
//     );
//     break;
//   case 'ямайка':
//     alert(
//       `Доставка в ${delivery.toUpperCase()} будет стоить ${delJamaica} кредитов`,
//     );
//     break;

//   default:
//     alert('В вашей стране доставка не доступна');
// }

// Task 6 ======================================

// let input;
// let total = 0;

// while (input !== null) {
//   input = prompt('Введите число');
//   if (isNaN(input)) {
//     alert('Было введено не число, попробуйте еще раз');
//   } else {
//     total += Number(input);
//   }
// }

// alert(`Общая сумма чисел равна ${total}`);

