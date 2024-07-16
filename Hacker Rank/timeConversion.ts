type Meridian = 'AM' | 'PM';
export const ERROR_FORMAT = 'Incorrect time format. It must be hh:mm:ssAM or hh:mm:ssPM';

export function timeConversion(ampmTime: string): string {
    let militaryTime: string = "";
    if (ampmTime === "") return "";

    let timeArray = ampmTime.split(":");
    if (timeArray.length < 3) {
        throw new Error(ERROR_FORMAT);
    }

    const hh = timeArray[0];
    const mm = timeArray[1];
    const ss = timeArray[2].substring(0,2);
    if (+hh > 12 || +mm > 59 || +ss > 59) throw new Error(ERROR_FORMAT);

    let meridian: Meridian;    
    if (ampmTime.toUpperCase().includes('AM')) {
        meridian = 'AM';
    } else if (ampmTime.toUpperCase().includes('PM')) {
        meridian = 'PM';
    } else {
        throw new Error(ERROR_FORMAT);
    }

    if (hh === "12") {
        if (meridian === "AM") militaryTime += "00:";
        if (meridian === "PM") {
            militaryTime += "12:"
        } 
    } else {
        if (meridian === "PM") {
            militaryTime += (parseInt(hh) + 12).toString() + ":";
        } else {
            militaryTime += hh + ":";
        }
    }

    militaryTime += mm + ":";
    militaryTime += ss;

    return militaryTime;
}
