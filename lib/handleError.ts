interface dataSet {
    rawData: object[],
    dataToBeMatched: string[][],
    matchTo: string[]
}

let i: number,
j: number,
k: number;

export default function handleError({
    rawData,
    dataToBeMatched,
    matchTo
}: dataSet) {
    let message: undefined | string;
    let status: boolean = false;
    let type: string;

    if (!rawData && !dataToBeMatched && !matchTo) {
        status = true;
        message = 'There is no data at all. Please refer to the documentation for the data required.'
        type = 'TypeError'
    }

    if (!matchTo || matchTo.length === 0) {
        status = true;
        message = 'There is no preference/s specified. Please make sure to specify what preferences are desired for the filter to work.'
    }

    // if there is one value inside the preferences but its length is zero or an empty string,
    // then send an error
    if (matchTo.length === 1 && matchTo[0].length === 0) {
        status = true;
        message = 'The preference provided is an empty string, so this process will return an empty array[]. Are you sure you want to use this filter?';
    }

    if (matchTo.length > 1) {
        for (i = 0; i < matchTo.length; i++) {
            if (typeof matchTo[i] !== 'string') {
                return {
                    status: true,
                    message: 'This filter only accepts an array[] of strings. Please refactor the preferences.',
                    type: 'TypeError'
                }
            }
        }
    }

    return {
        status: status,
        message: message,
        type: type
    }
};