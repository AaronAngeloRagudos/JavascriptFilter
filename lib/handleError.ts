interface dataSet {
    rawData: object[],
    dataToBeMatched: string[][],
    matchTo: string[]
}

export default function handleError({
    rawData,
    dataToBeMatched,
    matchTo
}: dataSet) {

    return {
        status: false,
        message: ''
    }
};