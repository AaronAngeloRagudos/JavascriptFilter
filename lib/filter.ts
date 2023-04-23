import sorting from "../dist/sorting.js";
import handleError from "../dist/handleError.js";

interface dataSet {
    rawData: object[],
    dataToBeMatched: string[][],
    matchTo: string[]
}

interface sortingStatus {
    status: boolean,
    data: object[]
}

interface error {
    status: boolean,
    message: undefined | string,
    type: undefined | string
}

export default class Filter {
    constructor() { }

    sortData = ({
        rawData,
        dataToBeMatched,
        matchTo
    }: dataSet) => {
        const isError: error = handleError({
            rawData,
            dataToBeMatched,
            matchTo
        })

        // check if there's an error,
        // if there's none, ignore the statements below this if
        // if statement
        if (isError.status) {
            if (isError.type === 'TypeError') {
                throw new TypeError(isError.message);
            }

            throw new Error(isError.message);
        }

        const isSorted: sortingStatus = sorting({
            rawData,
            dataToBeMatched,
            matchTo
        });

        // if the sorting function returns a status of false, then that means that something went wrong.
        if (!isSorted.status) {
            throw new Error('Something went wrong in sorting the data provided. Please submit an issue in the github repository.')
        }

        const sortedData: undefined | object[] = isSorted.data;
        return sortedData;
    };

    getPercentageOccurence = ({
        rawData,
        dataToBeMatched,
        matchTo
    }: dataSet) => {

    };

};

export const filter = new Filter();