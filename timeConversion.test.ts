import { ERROR_FORMAT } from "./timeConversion";
import { timeConversion } from "./timeConversion";

describe('timeConversion', () => {
    test('handles empty values', () => {
        expect(timeConversion("")).toEqual("");
    });
    
    test('handles incomplete times', ()=> {
        expect(()=> timeConversion("12am")).toThrow(ERROR_FORMAT);
        expect(()=> timeConversion("12pm")).toThrow(ERROR_FORMAT);
        expect(()=> timeConversion("12:00am")).toThrow(ERROR_FORMAT);
        expect(()=> timeConversion("12:00pm")).toThrow(ERROR_FORMAT);
    })
});
