import { ERROR_FORMAT } from "./timeConversion";
import { timeConversion } from "./timeConversion";

describe('timeConversion', () => {
    test('handles empty values', () => {
        expect(timeConversion("")).toEqual("");
    });
    
    test('handles times missing hh, mm, ss or am/pm', ()=> {
        expect(()=> timeConversion("12am")).toThrow(ERROR_FORMAT);
        expect(()=> timeConversion("12pm")).toThrow(ERROR_FORMAT);
        expect(()=> timeConversion("12:00am")).toThrow(ERROR_FORMAT);
        expect(()=> timeConversion("12:00pm")).toThrow(ERROR_FORMAT);
        expect(()=> timeConversion("12:00:00")).toThrow(ERROR_FORMAT); 
    });
    
    test('handles incorrect times with hours over 12, and minutes or seconds over 59', ()=> {
        expect(()=> timeConversion("13:00:00pm")).toThrow(ERROR_FORMAT);
        expect(()=> timeConversion("12:60:00pm")).toThrow(ERROR_FORMAT);
        expect(()=> timeConversion("12:00:60pm")).toThrow(ERROR_FORMAT);
    });

    test('returns the correct time', ()=> {
        expect(timeConversion("12:25:59am")).toEqual("00:25:59");
        expect(timeConversion("12:25:59pm")).toEqual("12:25:59");
        expect(timeConversion("10:09:09am")).toEqual("10:09:09");
        expect(timeConversion("10:59:13pm")).toEqual("22:59:13");
        expect(timeConversion("01:30:00am")).toEqual("01:30:00");
        expect(timeConversion("01:30:00pm")).toEqual("13:30:00");
    });
});
