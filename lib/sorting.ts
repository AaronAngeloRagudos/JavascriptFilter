interface dataSet {
    rawData: object[],
    dataToBeMatched: string[][],
    matchTo: string[]
}

interface filterNecessities {
    characteristics: string[],
    currentPreference: string
}

interface isToBeRemoved {
    status: boolean,
    dataForComparison: string[] | null | undefined
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

export default function sorting({ rawData, dataToBeMatched, matchTo }: dataSet, isGetPercentage: boolean) {
    const sortedData: object[] = [];
    const sortedDataForPercentageAcquisition: string[][] = [];

    // loop through the data for comparison.
    for (i = 0; i < dataToBeMatched.length; i++) {
        // for each data for comparison, loop through all the preferences[].
        for (j = 0; j < matchTo.length; j++) {
            const characteristics = dataToBeMatched[i];
            const currentPreference = matchTo[j].toUpperCase();

            // now call upon the function identifyThoseThatDoNotMatch()
            // and if returns false, which means the current data for comparison
            // we are at matches with the values of the preferences at least once
            const isToBeRemoved: isToBeRemoved = identifyThoseThatDoNotMatch({
                characteristics,
                currentPreference,
            }, isGetPercentage);

            // if the result from the function identifyThoseThatDoNotMatch() returns false,
            // then that means the rawData[i] consists of at least one characteristic or trait
            // that matches with matchTo, specified by the user, so we push that onto the sorted data.
            if (!isToBeRemoved.status) {
                // since the index of the data for comparison is the same as that of rawData[],
                // since the data for comparison is taken from the rawData[],
                // then push that rawData[] into the sortedData[].
                sortedData.push(rawData[i]);

                // remove the data that matched
                // if this loop is accessed by the getPercentageOccurence function, then include these.
                if (isGetPercentage) {
                    sortedDataForPercentageAcquisition.push(isToBeRemoved.dataForComparison);
                    break;
                }

                // we break this for loop since we are only looking for a match
                // of at least once.
                break;
            }
        }
    };

    if (sortedData) {
        return {
            sortedData: {
                status: true,
                dataForComparison: sortedDataForPercentageAcquisition,
                data: sortedData,
            }
        };
    } else {
        return {
            sortedData: {
                status: false,
                data: null
            }
        };
    }
}

function identifyThoseThatDoNotMatch({ characteristics, currentPreference }: filterNecessities, isGetPercentage: boolean) {
    // loop through each characteristic,
    // if it matches with the current preference at least once
    // return false. Which means the characteristics[] not matching is not
    // true.
    for (k = 0; k < characteristics.length; k++) {
        const characteristic = characteristics[k].toUpperCase();
        if (characteristic === currentPreference) {
            return {
                status: false,
                dataForComparison: characteristics
            };
        }
    }
    return {
        status: true,
        dataForComparison: null || undefined
    };
};