'use strict';


const delivery = prompt('Куда нужно доставить?');
const delChina = 100;
const delChile = 250;
const delAustralia = 170;
const delIndia = 80;
const delJamaica = 120;

switch (delivery.toLowerCase()) {
    case 'china':
        alert(
            `Доставка в ${delivery.toUpperCase()} будет стоить ${delChina} кредитов`,
        );
        break;
    case 'китай':
        alert(
            `Доставка в ${delivery.toUpperCase()} будет стоить ${delChina} кредитов`,
        );
        break;
    case 'chile':
        alert(
            `Доставка в ${delivery.toUpperCase()} будет стоить ${delChile} кредитов`,
        );
        break;
    case 'чили':
        alert(
            `Доставка в ${delivery.toUpperCase()} будет стоить ${delChile} кредитов`,
        );
        break;
    case 'australia':
        alert(
            `Доставка в ${delivery.toUpperCase()} будет стоить ${delAustralia} кредитов`,
        );
        break;
    case 'австралия':
        alert(
            `Доставка в ${delivery.toUpperCase()} будет стоить ${delAustralia} кредитов`,
        );
        break;
    case 'india':
        alert(
            `Доставка в ${delivery.toUpperCase()} будет стоить ${delIndia} кредитов`,
        );
        break;
    case 'индия':
        alert(
            `Доставка в ${delivery.toUpperCase()} будет стоить ${delIndia} кредитов`,
        );
        break;
    case 'jamaica':
        alert(
            `Доставка в ${delivery.toUpperCase()} будет стоить ${delJamaica} кредитов`,
        );
        break;
    case 'ямайка':
        alert(
            `Доставка в ${delivery.toUpperCase()} будет стоить ${delJamaica} кредитов`,
        );
        break;

    default:
        alert('В вашей стране доставка не доступна');
}