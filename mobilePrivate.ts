import { Mobile } from './classMobile';
// parte 6
let telefono1 = new Mobile ("Nokia3210", "3210", "Nokia", 8, "negro", false, 1, 99);
let telefono2 = new Mobile ("iPhone3G", "3G", "iPhone", 32, "blanco", false, 2, 149);
let telefono3 = new Mobile ("Samsung Galaxy 10", "Galaxy 10", "Samsung", 128, "azul", true, 4, 499);

console.log(telefono1);
console.log(telefono2);
console.log(telefono3);

telefono1.setCameraNumber(4);
telefono1.setIs5G(true);
console.log(telefono1);

// parte 7
let arrMobile = []
arrMobile = [telefono1, telefono2, telefono3]

console.log(telefono1.toString())
console.log(telefono2.toString())
console.log(telefono3.toString())
