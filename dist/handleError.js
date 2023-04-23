var i, j, k;
export default function handleError(_a) {
    var rawData = _a.rawData, dataToBeMatched = _a.dataToBeMatched, matchTo = _a.matchTo;
    var message;
    var status = false;
    var type;
    if (!rawData || rawData.length === 0) {
        return {
            status: true,
            message: 'There is no raw data provided. This filter will not work if that is the case, so please provide the raw data.',
            type: 'TypeError'
        };
    }
    if (!rawData && !dataToBeMatched && !matchTo) {
        status = true;
        message = 'There is no data at all. Please refer to the documentation for the data required.';
        type = 'TypeError';
    }
    if (!matchTo || matchTo.length === 0) {
        status = true;
        message = 'There is no preference/s specified. Please make sure to specify what preferences are desired for the filter to work.';
    }
    if (matchTo.length === 1 && matchTo[0].length === 0) {
        status = true;
        message = 'The preference provided is an empty string, so this process will return an empty array[]. Are you sure you want to use this filter?';
    }
    if (matchTo.length >= 1) {
        for (i = 0; i < matchTo.length; i++) {
            if (typeof matchTo[i] !== 'string') {
                return {
                    status: true,
                    message: "This filter only accepts an array[] of strings for preferences. Please refactor the preferences. The preferences: ".concat(matchTo),
                    type: 'TypeError'
                };
            }
        }
    }
    if (dataToBeMatched.length >= 1) {
        for (j = 0; j < dataToBeMatched.length; j++) {
            if (typeof dataToBeMatched[j] === 'object') {
                if (dataToBeMatched[j].constructor !== Array) {
                    return {
                        status: true,
                        message: "This filter only accepts an array[] that contains an array[] of strings for data comparison. Please refactor the array[][] of data you want to compare with the preferences. The data: ".concat(dataToBeMatched),
                        type: 'TypeError'
                    };
                }
            }
            else {
                return {
                    status: true,
                    message: "This filter only accepts an array[] that contains an array[] of strings for data comparison. Please refactor the array[][] of data you want to compare with the preferences. The data: ".concat(dataToBeMatched),
                    type: 'TypeError'
                };
            }
            for (k = 0; k < dataToBeMatched[j].length; k++) {
                if (typeof dataToBeMatched[j][k] !== 'string') {
                    return {
                        status: true,
                        message: "This filter only accepts an array[] that contains an array[] of strings for data comparison. Please refactor the array[][] of data you want to compare with the preferences. The data: ".concat(dataToBeMatched),
                        type: 'TypeError'
                    };
                }
            }
            ;
        }
        ;
    }
    return {
        status: status,
        message: message,
        type: type
    };
}
;
//# sourceMappingURL=handleError.js.map