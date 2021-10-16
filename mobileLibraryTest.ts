import { Mobile } from './classMobile';
import { MobileLibrary } from './mobileLibrary';

let telefono1 = new Mobile ("Nokia3210", "3210", "Nokia", 8, "negro", false, 1, 99);
let telefono2 = new Mobile ("iPhone3G", "3G", "iPhone", 32, "blanco", false, 2, 149);
let telefono3 = new Mobile ("Samsung Galaxy 10", "Galaxy 10", "Samsung", 128, "azul", true, 4, 499);
let telefono4 = new Mobile ("Xiaomi Mi10A", "Mi10A", "Xiaomi", 128, "rojo", true, 5, 359);

let myArrMobile = [telefono1, telefono2, telefono3, telefono4];

let miLibreria = new MobileLibrary ("Mi libreria", "Estanteria izquierda", myArrMobile);

console.log(miLibreria.getName());
console.log(miLibreria.getLocation());
console.log(miLibreria.getMobiles());
console.log(miLibreria.totalPriceCalculator())