'use strict';

const initInput = document.getElementById('validation-input');


const validator = () => {
    const lengthValidator = Number(initInput.getAttribute('data-length'));

    if (initInput.value.length === lengthValidator) {
        initInput.classList.add('valid');
        initInput.classList.remove('invalid')
    } else {
        initInput.classList.add('invalid');
        initInput.classList.remove('valid')
    }
}

initInput.addEventListener('blur', validator);