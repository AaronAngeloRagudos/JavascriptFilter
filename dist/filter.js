import sorting from "../dist/sorting.js";
import handleError from "../dist/handleError.js";
var Filter = /** @class */ (function () {
    function Filter() {
        this.sortData = function (_a) {
            var rawData = _a.rawData, dataToBeMatched = _a.dataToBeMatched, matchTo = _a.matchTo;
            var isError = handleError({
                rawData: rawData,
                dataToBeMatched: dataToBeMatched,
                matchTo: matchTo
            });
            if (isError.status) {
                throw new Error(isError.message);
            }
            var isSorted = sorting({
                rawData: rawData,
                dataToBeMatched: dataToBeMatched,
                matchTo: matchTo
            });
            //if the sorting function returns a status of false, then that means that something went wrong.
            if (!isSorted.status) {
                throw new Error('Something went wrong in sorting the data provided. Please submit an issue in the github repository.');
            }
            var sortedData = isSorted.data;
            return sortedData;
        };
        this.getPercentageOccurence = function (_a) {
            var rawData = _a.rawData, dataToBeMatched = _a.dataToBeMatched, matchTo = _a.matchTo;
        };
    }
    return Filter;
}());
export default Filter;
;
export var filter = new Filter();
//# sourceMappingURL=filter.js.map