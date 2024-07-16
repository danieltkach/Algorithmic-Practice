export function intervalsMerge(intervals: number[][]): number[][] {
    if (intervals.length === 0) return [];
    if (intervals.length === 1) return intervals;

    let normalizedIntervals: number[][] = [];

    let pointerA = 0;
    let pointerB = 1;
    let intervalA = intervals[pointerA];
    let intervalB = intervals[pointerB];
    let [iAx, iAy] = intervalA;
    let [iBx, iBy] = intervalB;

    // intervals = [[1, 4], [3, 6], [6, 10], [3, 4], [9, 14]]
    if (iAy < iBx) {
        let resulting = [intervalA, intervalB];
        normalizedIntervals.push(...resulting);
        intervalA = normalizedIntervals[normalizedIntervals.length - 1];
        pointerB++;
        intervalB = intervals[pointerB];
    } else if (iAx > iBx && iAy > iBy) {
        let tempInterval = intervalA;
        intervalA = intervalB;
        intervalB = tempInterval;
        let resulting = [intervalA, intervalB];
        normalizedIntervals.push(...resulting);
        pointerB++;
    } else {
        let x = iAx <= iBx ? iAx : iBx;
        let y = iAy >= iBy ? iAy : iBy;
        let interval = [x, y];
        normalizedIntervals.push(interval);
        pointerB++;
    }
    // [[1, 6], [6, 10], [3, 4], [9, 14]]
    // A = [1,6] -- B = [6,10]
    while (pointerB < intervals.length) {
        intervalA = normalizedIntervals[normalizedIntervals.length - 1];
        intervalB = intervals[pointerB];
        let [iAx, iAy] = intervalA;
        let [iBx, iBy] = intervalB;
        if (iAy < iBx) {
            normalizedIntervals.push(intervalB);
            pointerB++;
        } else if (iAx > iBx && iAy > iBy) {
            let tempInterval = intervalA;
            intervalA = intervalB;
            intervalB = tempInterval;
            let resulting = [intervalA, intervalB];
            normalizedIntervals.push(...resulting);
            pointerB++;
        } else {
            let x = iAx <= iBx ? iAx : iBx;
            let y = iAy >= iBy ? iAy : iBy;
            let interval = [x, y];
            normalizedIntervals.push(interval);
            pointerB++;
        }
    }

    return normalizedIntervals;
}
