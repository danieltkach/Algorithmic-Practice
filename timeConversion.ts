type Meridian = 'AM' | 'PM';
export const ERROR_FORMAT = 'Incorrect time format. It must be hh:mm:ssAM or hh:mm:ssPM';

export function timeConversion(ampmTime: string): string {
    let militaryTime: string = "";
    if (ampmTime === "") return "";

    let meridian: Meridian;    
    if (ampmTime.includes('AM')) {
        meridian = 'AM';
    } else if (ampmTime.includes('PM')) {
        meridian = 'PM';
    }

    let timeArray = ampmTime.split(":");
    if (timeArray.length < 3) {
        throw new Error(ERROR_FORMAT);
    }


    return militaryTime;
}