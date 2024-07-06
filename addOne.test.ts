import { addOne } from "./addOne";

describe('addOne', () => {
    test('adds one to a multiple digit array without carry', () => {
        expect(addOne([1, 2, 3])).toEqual([1, 2, 4]);
    });
    test('adds one to an array ending in zero', () => {
        expect(addOne([1, 0])).toEqual([1, 1]);
        expect(addOne([1, 0, 0])).toEqual([1, 0, 1]);
    });
    test('adds one to a single item array', () => {
        expect(addOne([0])).toEqual([1]);
        expect(addOne([1])).toEqual([2]);
    });
    test('carry works for last, middle, and first digits', () => {
        expect(addOne([9])).toEqual([1, 0]);
        expect(addOne([1, 9, 9])).toEqual([2, 0, 0]);
        expect(addOne([9, 9])).toEqual([1, 0, 0]);
    });
    test('adds a digit if carry over happended all the way through', () => {
        expect(addOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
    });

});

