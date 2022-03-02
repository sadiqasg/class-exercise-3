const cut3 = (arr: (string | number)[]): (number | string)[] =>{
    arr.splice(2, 1);
    return arr;
};

const addArr = (arr: (number)[]): number =>{
 let result: number  = 0;
 arr.forEach((num) =>{
    result += num
 })
 return result;
}


const concatArr =(arr1: number[], arr2: string[]): (number | string)[] =>{
let result = [...arr1, ...arr2];
return result;
}

module.exports = { cut3, addArr, concatArr}