'use strict';


const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];


const imgTags = images.map(img => `<li><img src="${img.url}" alt="${img.alt}"></li>`).join("");

const gallery = document.querySelector("#gallery");

gallery.insertAdjacentHTML('afterbegin', imgTags);

gallery.style.display = 'flex';
gallery.style.margin = 'auto'
gallery.style.flexDirection = 'row';
gallery.style.justifyContent = 'space-between';
gallery.style.width = '1000px';


[...gallery.children].map(li => {
    li.style.display = 'block';
    li.style.listStyle = 'none';
})

const imagesList = document.querySelectorAll('img');
[...imagesList].map(img => {
    img.style.maxWidth = '100%';
    img.style.height = '200px';
});