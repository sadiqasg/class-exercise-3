"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_1 = __importDefault(require("../utilities/arrays"));
describe("arrays", () => {
    it("it expects arrays.cut3([5, 2, 4, 3]) to remove the third value in the array", () => {
        expect(arrays_1.default.cut3([5, 2, 4, 3])).toEqual([5, 2, 3]);
    });
    // it('it expects arrays.lgNum([5,2,4]) return the largest number in the array', () => {
    //     {
    //         expect(arrays.lgNum([])).toBeInstanceOf(Number);
    //         expect(arrays.lgNum([])).toBeGreaterThanOrEqual(0);
    //         expect(arrays.lgNum([5, 2, 4])).toEqual(5);
    //     }
    // });
    // it('it expects arrays.addArr([4,2,6]) return the largest number in the array', () => {
    //     {
    //         expect(arrays.addArr([])).toBeInstanceOf(Number);
    //         expect(arrays.addArr([])).toBeGreaterThanOrEqual(0);
    //         expect(arrays.addArr([4, 2, 6])).toBe(12);
    //     }
    // });
    // it('it expects arrays.concatArr([4,2,6],[1,2]) to combine both array to a single array', () => {
    //     {
    //         expect(arrays.concatArr([], [])).toBeInstanceOf(Array);
    //         expect(arrays.concatArr([4, 2, 6], [1, 2])).toEqual([
    //             4, 2, 6, 1, 2
    //         ]);
    //     }
    // });
});
// describe('numbers manipulation', () => {
//     it('it expects numbers.sum([1,3) to add  both numbers', () => {
//         {
//             expect(numbers.sum(1, 3)).toBeInstanceOf(Number);
//             expect(numbers.sum(1, 2)).toEqual(3);
//             expect(numbers.sum(1, 2)).toBeGreaterThan(2);
//             expect(numbers.sum(1, 2)).toBeTruthy();
//         }
//     });
//     it('it expects numbers.multiply(1,2) to multiply two numbers', () => {
//         {
//             expect(numbers.multiply(1, 2)).toBeInstanceOf(Number);
//             expect(numbers.multiply(1, 2)).toEqual(2);
//             expect(numbers.multiply(1, 2)).toBeCloseTo(2);
//             expect(numbers.multiply(1, 2)).toBeLessThan(3);
//         }
//     });
// });
// describe('strings manipulation', () => {
//     it('it expects strings.capitalize() to capitalize the string', () => {
//         {
//             expect(
//                 strings.capitalize('test driven development')
//             ).toBeInstanceOf(String);
//             expect(strings.capitalize('test driven development')).toMatch(
//                 /TEST DRIVEN DEVELOPMENT/
//             );
//         }
//     });
// });
