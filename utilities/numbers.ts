const sum = (num1: number, num2: number): number => {
    return num1 + num2;
};

const multiply = (num1: unknown, num2: number): number => {
    return (num1 as number) * num2;
};

export default {
    sum,
    multiply
};