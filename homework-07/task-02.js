'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const parentElem = document.querySelector('#ingredients');

const arr = ingredients.map(elem => document.createElement('li'));

parentElem.append(...arr);

const listLi = parentElem.children;

[...listLi].map((li, idx) => li.textContent = `${ingredients[idx]}`);