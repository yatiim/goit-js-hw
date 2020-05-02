'use strict';

const range = document.querySelector('#font-size-control');


const changeFontSize = () => {

    const textContent = document.querySelector('#text');

    return textContent.style.fontSize = `${8+ 0.2 * range.value}px`;
};

range.addEventListener('input', changeFontSize)