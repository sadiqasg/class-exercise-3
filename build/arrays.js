"use strict";
const cut3 = (arr) => {
    arr.splice(2, 1);
    return arr;
};
const addArr = (arr) => {
    let result = 0;
    arr.forEach((num) => {
        result += num;
    });
    return result;
};
const concatArr = (arr1, arr2) => {
    let result = [...arr1, ...arr2];
    return result;
};
module.exports = { cut3, addArr, concatArr };
