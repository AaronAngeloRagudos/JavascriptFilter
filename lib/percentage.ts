interface dataInterface {
    data: object[],
    dataForComparison: string[][],
    preferences: string[],
    indecesOfValueThatMatched: number[],
}

interface forLooping {
    characteristics: string[],
    preference: string
}

let i: number,
j: number,
k: number,
m: number,
n: number

export default function percentage({ data, dataForComparison, preferences }: dataInterface) {
    preferences = preferences.sort((a: any, b: any) => a - b);

    const filteredData: object[] = [];

    for (i = 0; i < dataForComparison.length; i++) {
        let amountOfOccurences: number = 0;
        for (j = 0; j < preferences.length; j++) {
            const loop = loopThroughCharacteristics({
                characteristics: dataForComparison[i],
                preference: preferences[j]
            });
            
            if (loop) {
                amountOfOccurences +=1;
            }
        }
        const timesMatched = {
            similarity: (amountOfOccurences / preferences.length).toFixed(6),
            similarityPercentage: `${((amountOfOccurences / preferences.length) * 100).toFixed(4)}%`
        }
        
        filteredData.push({
            ...data[i],
            timesMatched
        });
     }

    return {
        filteredData
    };
};

function loopThroughCharacteristics({ characteristics, preference }: forLooping) {
    preference = preference.toUpperCase();
    for (k = 0; k < characteristics.length; k++) {
        const characteristic = characteristics[k].toUpperCase();
        if (characteristic === preference) {
            return true;
        }
    }
    return false;
};