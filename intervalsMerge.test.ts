import { intervalsMerge } from "./intervalsMerge";

describe("intervalsMerge", () => {
    test("cases with no need to merge", () => {
        expect(intervalsMerge([[1, 2]])).toEqual([[1, 2]]);
        expect(intervalsMerge([[1, 2], [3, 4]])).toEqual([[1, 2], [3, 4]]);
        expect(intervalsMerge([[1, 2], [3, 4], [5, 6]])).toEqual([[1, 2], [3, 4], [5, 6]]);
        expect(intervalsMerge([[1, 2], [3, 4], [5, 6], [7, 8]])).toEqual([[1, 2], [3, 4], [5, 6], [7, 8]]);
    });
    test("solves [[1,4], [3,6], [7,10]]", () => {
        const intervals = [[1, 4], [3, 6], [7, 10]];
        expect(intervalsMerge(intervals)).toEqual([[1, 6], [7, 10]]);
    });
    test("solves a containing case", () => {
        const intervals = [[0, 10], [2, 4]];
        expect(intervalsMerge(intervals)).toEqual([[0, 10]]);
    });
    test("solves an unordered case", () => {
        const intervals = [[5, 7], [1, 2]];
        expect(intervalsMerge(intervals)).toEqual([[1, 2], [5, 7]]);
    });
    test("solves an containing case with bigger first coordinate", () => {
        const intervals = [[5, 7], [1, 8]];
        expect(intervalsMerge(intervals)).toEqual([[1, 8]]);
    });
    test("solves a mixed case", () => {
        const intervals = [[1, 4], [3, 6], [6, 10], [3, 4], [9, 14]];
        expect(intervalsMerge(intervals)).toEqual([[1, 14]]);
    });
});
