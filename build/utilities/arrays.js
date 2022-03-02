"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cut3 = (arr) => {
    arr.splice(2, 1);
    return arr;
};
const lgNum = (arr) => {
    let largest = 0;
    arr.forEach((x) => {
        if (x > largest) {
            largest = x;
        }
    });
    return largest;
};
const addArr = (arr) => {
    let result = 0;
    arr.forEach((value) => {
        result += value;
    });
    return result;
};
const concatArr = (arr1, arr2) => {
    return [...arr1, ...arr2];
};
exports.default = {
    cut3,
    lgNum,
    concatArr,
    addArr
};
