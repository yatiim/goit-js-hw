'use strict';

const initInpun = document.querySelector('[type="number"]');
const btnRendering = document.querySelector('[data-action="render"]');
const btnDestroing = document.querySelector('[data-action="destroy"]');
const containerBoxes = document.querySelector('#boxes');
containerBoxes.style.display = 'flex';
containerBoxes.style.flexWrap = 'wrap';


const createBoxes = (amoumt) => {
    amoumt = initInpun.value;
    const galleryDivs = [];
    galleryDivs.length = amoumt;
    const galleryBoxesString = [...galleryDivs].map(elem => elem = '<div style="border: 1px solid"></div>').join('');

    containerBoxes.innerHTML = `${galleryBoxesString}`;

    const galleryBoxes = [...containerBoxes.children].reduce((acc, child) => {
        child.style.width = `${acc}px`;
        child.style.height = `${acc}px`;
        child.style.background = `rgb(${Math.floor(Math.random()*100)}, ${Math.floor(Math.random()*100)}, ${Math.floor(Math.random()*100)})`;
        acc += 10;
        return acc;
    }, 30);
    return galleryBoxes;
};


const destroyBoxes = () => {
    containerBoxes.innerHTML = '';
    initInpun.value = null;
};



btnRendering.addEventListener('click', createBoxes);
btnDestroing.addEventListener('click', destroyBoxes);