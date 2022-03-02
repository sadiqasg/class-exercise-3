const cut3 = (arr: (number | string)[]): (number | string)[] => {
    arr.splice(2, 1);
    return arr;
};

const lgNum = (arr: (number | string)[]): number => {
    let largest: number | string = 0;
    arr.forEach((x) => {
        if (x > largest) {
            largest = x;
        }
    });
    return largest;
};

const addArr = (arr: number[]): number => {
    let result = 0;
    arr.forEach((value) => {
        result += value;
    });
    return result;
};

const concatArr = (
    arr1: number[],
    arr2: (string | number)[]
): (number | string)[] => {
    return [...arr1, ...arr2];
};

export default {
    cut3,
    lgNum,
    concatArr,
    addArr
};