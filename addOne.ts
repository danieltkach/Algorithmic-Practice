export function addOne(numbers: number[]): number[] {
    let returnValue: number[] = [];
    let isCarry: boolean = false;
    let count: number = numbers.length;

    for (let i = count - 1; i >= 0; i--) {
        let digit = numbers[i];
        const isFirstDigit = i === count - 1;
        const notFirstDigit = i !== count - 1;

        if (isFirstDigit) {
            if (digit < 9) {
                returnValue.unshift(digit + 1);
            } else {
                isCarry = true;
                returnValue.unshift(0);
            }
        } else if (notFirstDigit) {
            if (isCarry) digit++;
            if (digit > 9) {
                isCarry = true;
                returnValue.unshift(0);
            } else {
                isCarry = false;
                returnValue.unshift(digit);
            }
        }
    }
    if (isCarry) returnValue.unshift(1);
    return returnValue;
}


