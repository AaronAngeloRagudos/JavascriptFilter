var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var i, j, k, m, n;
export default function percentage(_a) {
    var data = _a.data, dataForComparison = _a.dataForComparison, preferences = _a.preferences;
    preferences = preferences.sort(function (a, b) { return a - b; });
    var filteredData = [];
    for (i = 0; i < dataForComparison.length; i++) {
        var amountOfOccurences = 0;
        for (j = 0; j < preferences.length; j++) {
            var loop = loopThroughCharacteristics({
                characteristics: dataForComparison[i],
                preference: preferences[j]
            });
            if (loop) {
                amountOfOccurences += 1;
            }
        }
        var timesMatched = {
            similarity: (amountOfOccurences / preferences.length).toFixed(6),
            similarityPercentage: "".concat(((amountOfOccurences / preferences.length) * 100).toFixed(4), "%")
        };
        filteredData.push(__assign(__assign({}, data[i]), { timesMatched: timesMatched }));
    }
    return {
        filteredData: filteredData
    };
}
;
function loopThroughCharacteristics(_a) {
    var characteristics = _a.characteristics, preference = _a.preference;
    preference = preference.toUpperCase();
    for (k = 0; k < characteristics.length; k++) {
        var characteristic = characteristics[k].toUpperCase();
        if (characteristic === preference) {
            return true;
        }
    }
    return false;
}
;
//# sourceMappingURL=percentage.js.map