'use strict';

const arrCategories = document.querySelector('#categories').children;

console.log(`В списке ${arrCategories.length} категории.`);

const arrChildren = [...arrCategories].reduce((acc, child) => {
    acc.push([`Категория: ${child.firstElementChild.textContent}`, `Количество элементов: ${child.querySelector('ul').children.length}`])
    return acc;
}, []);
const listCategoriesAndChildren = arrChildren.forEach(elem => elem.forEach(elem => console.log(elem)))