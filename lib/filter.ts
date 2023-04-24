import sorting from "../dist/sorting.js";
import handleError from "../dist/handleError.js";
import percentage from "../dist/percentage.js";

interface dataSet {
    rawData: object[],
    dataToBeMatched: string[][],
    matchTo: string[]
}

interface sortingStatus {
    sortedData: {
        status: boolean,
        dataForComparison: string[][],
        data: object[]
    }
}

interface SortedDataInterface {
    status: boolean,
    dataForComparison: string[][],
    data: object[]
}

interface error {
    status: boolean,
    message: undefined | string,
    type: undefined | string
}

export default class Filter {
    constructor() { }

    sortData = async ({
        rawData,
        dataToBeMatched,
        matchTo
    }: dataSet,
    isGetPercentage: boolean | null | undefined) => {
        const isError: error = await handleError({
            rawData,
            dataToBeMatched,
            matchTo
        }, isGetPercentage);

        // check if there's an error,
        // if there's none, ignore the statements below this if
        // if statement
        if (isError.status) {
            if (isError.type === 'TypeError') {
                throw new TypeError(isError.message);
            }

            throw new Error(isError.message);
        }

        const isSorted: sortingStatus = await sorting({
            rawData,
            dataToBeMatched,
            matchTo,
        }, isGetPercentage);

        // if the sorting function returns a status of false, then that means that something went wrong.
        if (!isSorted.sortedData.status) {
            throw new Error('Something went wrong in sorting the data provided. Please submit an issue in the github repository.')
        }

        if (isGetPercentage) {
            const sortedData: any = isSorted.sortedData;
            return sortedData;
        } else {
            const sortedData: SortedDataInterface = isSorted.sortedData;
            return sortedData.data;
        }
    };

    getPercentageOccurence = async ({
        rawData,
        dataToBeMatched,
        matchTo
    }: dataSet) => {
        // no need to add an errorhandler here since we are going to sort
        // the data first before we get the
        // percentages of how much the characteristics of a data
        // matches with the references of the user.
        const sortedData = await this.sortData({
            rawData,
            dataToBeMatched,
            matchTo,
        }, true);

        const dataWithPercentageOccurence = await percentage({
            data: sortedData.data,
            dataForComparison: sortedData.dataForComparison,
            preferences: matchTo,
            indecesOfValueThatMatched: sortedData.indecesOfDataThatMatched
        });

        return dataWithPercentageOccurence;
    };

};

export const filter = new Filter();