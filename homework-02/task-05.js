'use strict';


const checkForSpam = function (message) {
    let result

    result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')

    return result
};

// ======== ВТОРОЙ ВАРИАНТ =============================

// const checkForSpam = function (message) {
//   let result

//   if (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')) {
//     result = true
//   } else {
//     result = false
//   }
//   return result
// };
// ============ СТРЕЛОЧНАЯ ФУНКЦИЯ ======================

// const checkForSpam = (message) => message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')

// ======================================================

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true