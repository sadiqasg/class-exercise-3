import arrays from "../utilities/arrays";
import numbers from "../utilities/numbers";
import strings from "../utilities/strings";

describe("arrays", () => {
    it("it expects arrays.cut3([5, 2, 4, 3]) to remove the third value in the array", () => {
        expect(arrays.cut3([5, 2, 4, 3])).toEqual([5, 2, 3]);
    });
    it("it expects arrays.concatArr([1,2],[3,4]) to equal [1,2,3,4]", () => {
        expect(arrays.concatArr([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    });
    it('expects arrays.addArr([1,2,3]) to be 6', () => {
        expect(arrays.addArr([1,2,3])).toBe(6);
    })
    it('expects arrays.lgNum([2,4,6,8,10]) to not be less than 9', () => {
        expect(arrays.lgNum([2,4,6,8,10])).not.toBeLessThan(9);
    })
});

describe("numbers", () => {
    it("it expects numbers.sum(1,2) to equal 3", () => {
        expect(numbers.sum(1, 2)).toEqual(3);
    });

    it('expects numbers.sum(5,6) to be greater than 10', () => {
        expect(numbers.sum(5,6)).toBeGreaterThan(10);
    })

    it("it expects numbers.multiply(2,2) to equal 4", () => {
        expect(numbers.multiply(2, 2)).toEqual(4);
    });
});

describe("strings", () => {
    it('it expects strings.capitalize("sadiq") to be SADIQ', () => {
        expect(strings.capitalize("sadiq")).toBe("SADIQ");
    });
    it('it expects strings.capitalize("i am the truth") to be truthy', () => {
        expect(strings.capitalize("i am the truth")).toBeTruthy();
    });
});
