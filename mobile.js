"use strict";
exports.__esModule = true;
var classMobile_1 = require("./classMobile");
// parte 2
var telefono1 = new classMobile_1.Mobile("Nokia3210", "3210", "Nokia", 8, "negro", false, 1, 99);
var telefono2 = new classMobile_1.Mobile("iPhone3G", "3G", "iPhone", 32, "blanco", false, 2, 149);
var telefono3 = new classMobile_1.Mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", 128, "azul", true, 4, 499);
console.log(telefono1);
console.log(telefono2);
console.log(telefono3);
telefono1.cameraNumber = 4;
telefono1.is5G = true;
console.log(telefono1);
console.log(telefono2);
console.log(telefono3);
