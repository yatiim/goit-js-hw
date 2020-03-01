'use strict';


const findLongestWord = function (string) {
    const arrString = string.split(" ")
    let maxWorldLength = 0;
    let longWorld
    for (const world of arrString) {
        if (world.length > maxWorldLength) {
            maxWorldLength = world.length;
            longWorld = world
        }
    }
    return longWorld
};

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'