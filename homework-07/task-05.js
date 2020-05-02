'use strict';

const inputName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');



const changeName = () => {
    if (inputName.value === "") {
        spanName.textContent = 'незнакомец';
    } else {
        spanName.textContent = inputName.value;
    }

};


inputName.addEventListener('input', changeName);