"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_1 = __importDefault(require("../utilities/arrays"));
const numbers_1 = __importDefault(require("../utilities/numbers"));
const strings_1 = __importDefault(require("../utilities/strings"));
describe("arrays", () => {
    it("it expects arrays.cut3([5, 2, 4, 3]) to remove the third value in the array", () => {
        expect(arrays_1.default.cut3([5, 2, 4, 3])).toEqual([5, 2, 3]);
    });
    it("it expects arrays.concatArr([1,2],[3,4]) to equal [1,2,3,4]", () => {
        expect(arrays_1.default.concatArr([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    });
    it('expects arrays.addArr([1,2,3]) to be 6', () => {
        expect(arrays_1.default.addArr([1, 2, 3])).toBe(6);
    });
    it('expects arrays.lgNum([2,4,6,8,10]) to not be less than 9', () => {
        expect(arrays_1.default.lgNum([2, 4, 6, 8, 10])).not.toBeLessThan(9);
    });
});
describe("numbers", () => {
    it("it expects numbers.sum(1,2) to equal 3", () => {
        expect(numbers_1.default.sum(1, 2)).toEqual(3);
    });
    it('expects numbers.sum(5,6) to be greater than 10', () => {
        expect(numbers_1.default.sum(5, 6)).toBeGreaterThan(10);
    });
    it("it expects numbers.multiply(2,2) to equal 4", () => {
        expect(numbers_1.default.multiply(2, 2)).toEqual(4);
    });
});
describe("strings", () => {
    it('it expects strings.capitalize("sadiq") to be SADIQ', () => {
        expect(strings_1.default.capitalize("sadiq")).toBe("SADIQ");
    });
    it('it expects strings.capitalize("i am the truth") to be truthy', () => {
        expect(strings_1.default.capitalize("i am the truth")).toBeTruthy();
    });
});
