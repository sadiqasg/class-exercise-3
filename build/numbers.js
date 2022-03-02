"use strict";
const sum = (num1, num2) => {
    return num1 + num2;
};
//Multiply function
const multiply = (num1, num2) => {
    return num1 * num2;
};
// Large number
const lgNum = (arr) => {
    let Large = 0;
    arr.forEach((y) => {
        if (y > Large) {
            Large = y;
        }
        ;
    });
    return Large;
};
module.exports = { sum, multiply, lgNum };
