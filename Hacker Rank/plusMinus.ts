export function plusMinus(numbers: number[]): number[] {
        let count = numbers.length;
        if (count === 0) return [0,0,0];
        
        let positives: number = 0;
        let negatives: number = 0;
        let zeros: number = 0;
        let ratios: number[] = [];

        for (let i=0; i<count; i++) {
                if (numbers[i] > 0) positives++;
                if (numbers[i] < 0) negatives++;
                if (numbers[i] === 0) zeros++;
        }

        let pRatio = Math.trunc(positives / count * 100);
        let nRatio = Math.trunc(negatives / count * 100);
        let zRatio = Math.trunc(zeros / count * 100);
        ratios.push(pRatio, nRatio, zRatio);
        
        return ratios;
}
