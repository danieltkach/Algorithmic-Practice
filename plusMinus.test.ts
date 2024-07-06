import { plusMinus } from "./plusMinus";

describe('plusMinus', () => {
  test('handles an empty array', () => {
    expect(plusMinus([])).toEqual([0, 0, 0]);
  });

  test('handles arrays with 1 element', () => {
    expect(plusMinus([-1])).toEqual([0, 100, 0]);
    expect(plusMinus([0])).toEqual([0, 0, 100]);
    expect(plusMinus([1])).toEqual([100, 0, 0]);
  });

  test('handles arrays with 2 elements', () => {
    expect(plusMinus([-1, 0])).toEqual([0, 50, 50]);
    expect(plusMinus([0, 1])).toEqual([50, 0, 50]);
    expect(plusMinus([1, -1])).toEqual([50, 50, 0]);
    expect(plusMinus([0, 0])).toEqual([0, 0, 100]);
  });


  test('calculates exclusive positives ratio', () => {
    expect(plusMinus([1, 1, 1])).toEqual([100, 0, 0]);
    expect(plusMinus([1, 1, 0])).toEqual([66, 0, 33]);
    expect(plusMinus([1, 0, 0])).toEqual([33, 0, 66]);
  });

  test('calculates exclusive negatives ratio', () => {
    expect(plusMinus([-1, -1, -1])).toEqual([0, 100, 0]);
    expect(plusMinus([-1, -1, 0])).toEqual([0, 66, 33]);
    expect(plusMinus([-1, 0, 0])).toEqual([0, 33, 66]);
  });

  test('calculates exclusive zeros ratio', () => {
    expect(plusMinus([0, 0, 0])).toEqual([0, 0, 100]);
    expect(plusMinus([1, 1, 0])).toEqual([66, 0, 33]);
    expect(plusMinus([1, 0, 0])).toEqual([33, 0, 66]);
  });

  test('variable amount array test', () => {
    expect(plusMinus([5, 3, 0, 0, -2, 5, 0, -10, 2, 99])).toEqual([50, 20, 30]);
  });
});

