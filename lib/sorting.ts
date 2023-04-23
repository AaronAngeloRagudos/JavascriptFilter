interface dataSet {
    rawData: object[],
    dataToBeMatched: string[][],
    matchTo: string[]
}

interface filterNecessities {
    characteristics: string[],
    currentPreference: string
}

let i: number,
    j: number,
    k: number,
    m: number,
    n: number,
    p: number,
    q: number,
    r: number,
    s: number,
    t: number;

export default function sorting({ rawData, dataToBeMatched, matchTo }: dataSet) {
    const sortedData: object[] = [];

    for (i = 0; i < dataToBeMatched.length; i++) {
        for (j = 0; j < matchTo.length; j++) {
            const characteristics = dataToBeMatched[i];
            const currentPreference = matchTo[j].toUpperCase();

            const isToBeRemoved: boolean = identifyThoseThatDoNotMatch({
                characteristics,
                currentPreference
            });

            if (!isToBeRemoved) {
                // if the result from the function identifyThoseThatDoNotMatch() returns false,
                // then that means the rawData[i] consists of at least one characteristic or trait
                // that matches with matchTo, specified by the user, so we push that onto the sorted data.
                sortedData.push(rawData[i]);
            }
        }
    };

    if (sortedData) {
        return {
            status: true,
            data: sortedData
        };
    } else {
        return {
            status: false,
            data: null
        };
    }
}

function identifyThoseThatDoNotMatch({ characteristics, currentPreference }: filterNecessities) {
    for (k = 0; k < characteristics.length; k++) {
        const characteristic = characteristics[k].toUpperCase();
        if (characteristic === currentPreference) {
            return false;
        }
    }
    return true;
};