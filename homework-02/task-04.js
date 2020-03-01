'use strict';

const formatString = function (string) {
    let result;
    if (string.length <= 40) {
        result = string;
    } else {
        const arrString = string.split('');
        arrString.length = 40;
        const newString40 = arrString.join('');
        result = `${newString40}...`

    }
    return result
};

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
    formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
);
// вернется форматированная строка