'use strict';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


const body = document.querySelector('body');
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
let intervalId = null;

const start = () => {
    btnStart.setAttribute("disabled", "true");
    intervalId = setInterval(() => {
        let indexColor = randomIntegerFromInterval(0, 5);
        body.style.backgroundColor = `${colors[indexColor]}`
    }, 1000);
};

const stop = () => {
    clearInterval(intervalId);
    btnStart.removeAttribute("disabled")
};

btnStart.addEventListener('click', start);
btnStop.addEventListener('click', stop);