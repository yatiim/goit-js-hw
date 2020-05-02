'use strict';


let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');

const btnIncrement = document.querySelector('[data-action="increment"]');
const initSpan = document.querySelector('#value');

const functionDecrement = () => {
    counterValue -= 1;
    initSpan.textContent = `${counterValue}`
};

const functionIncrement = () => {
    counterValue += 1;
    initSpan.textContent = `${counterValue}`
};

btnDecrement.addEventListener('click', functionDecrement);
btnIncrement.addEventListener('click', functionIncrement);