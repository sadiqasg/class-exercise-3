const sum = (num1: number,  num2: number): number =>{
    return num1 + num2
};

const multiply = (num1: string|number, num2: string|number) => {
    return  (num1 as number) * (num2 as number);
};

const lgNum = (arr: (string|number)[]): number =>{
    let Large: number | string = 0;
    arr.forEach((y) =>{
        if(y > Large){
            Large = y;
        };
    })
    return Large;
};


module.exports = { sum, multiply, lgNum};