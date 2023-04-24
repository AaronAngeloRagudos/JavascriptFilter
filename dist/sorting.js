var i, j, k, m, n, p, q, r, s, t;
export default function sorting(_a, isGetPercentage) {
    var rawData = _a.rawData, dataToBeMatched = _a.dataToBeMatched, matchTo = _a.matchTo;
    var sortedData = [];
    var sortedDataForPercentageAcquisition = [];
    for (i = 0; i < dataToBeMatched.length; i++) {
        for (j = 0; j < matchTo.length; j++) {
            var characteristics = dataToBeMatched[i];
            var currentPreference = matchTo[j].toUpperCase();
            var isToBeRemoved = identifyThoseThatDoNotMatch({
                characteristics: characteristics,
                currentPreference: currentPreference,
            }, isGetPercentage);
            if (!isToBeRemoved.status) {
                sortedData.push(rawData[i]);
                if (isGetPercentage) {
                    sortedDataForPercentageAcquisition.push(isToBeRemoved.dataForComparison);
                    break;
                }
                break;
            }
        }
    }
    ;
    if (sortedData) {
        return {
            sortedData: {
                status: true,
                dataForComparison: sortedDataForPercentageAcquisition,
                data: sortedData,
            }
        };
    }
    else {
        return {
            sortedData: {
                status: false,
                data: null
            }
        };
    }
}
function identifyThoseThatDoNotMatch(_a, isGetPercentage) {
    var characteristics = _a.characteristics, currentPreference = _a.currentPreference;
    for (k = 0; k < characteristics.length; k++) {
        var characteristic = characteristics[k].toUpperCase();
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
}
;
//# sourceMappingURL=sorting.js.map