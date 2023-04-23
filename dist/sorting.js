var i, j, k, m, n, p, q, r, s, t;
export default function sorting(_a) {
    var rawData = _a.rawData, dataToBeMatched = _a.dataToBeMatched, matchTo = _a.matchTo;
    var sortedData = [];
    for (i = 0; i < dataToBeMatched.length; i++) {
        for (j = 0; j < matchTo.length; j++) {
            var characteristics = dataToBeMatched[i];
            var currentPreference = matchTo[j].toUpperCase();
            var isToBeRemoved = identifyThoseThatDoNotMatch({
                characteristics: characteristics,
                currentPreference: currentPreference
            });
            if (!isToBeRemoved) {
                // if the result from the function identifyThoseThatDoNotMatch() returns false,
                // then that means the rawData[i] consists of at least one characteristic or trait
                // that matches with matchTo, specified by the user, so we push that onto the sorted data.
                sortedData.push(rawData[i]);
            }
        }
    }
    ;
    if (sortedData) {
        return {
            status: true,
            data: sortedData
        };
    }
    else {
        return {
            status: false,
            data: null
        };
    }
}
function identifyThoseThatDoNotMatch(_a) {
    var characteristics = _a.characteristics, currentPreference = _a.currentPreference;
    for (k = 0; k < characteristics.length; k++) {
        var characteristic = characteristics[k].toUpperCase();
        if (characteristic === currentPreference) {
            return false;
        }
    }
    return true;
}
;
//# sourceMappingURL=sorting.js.map