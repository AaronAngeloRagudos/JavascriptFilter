import sorting from "./sorting.js";
var Filter = (function () {
    function Filter() {
        this.sortData = function (_a) {
            var rawData = _a.rawData, dataToBeMatched = _a.dataToBeMatched, matchTo = _a.matchTo;
            var isSorted = sorting({
                rawData: rawData,
                dataToBeMatched: dataToBeMatched,
                matchTo: matchTo
            });
            if (!isSorted.status) {
                throw new Error('Something went wrong in sorting the data provided. Please submit an issue in the github repository.');
            }
            var sortedData = isSorted.data;
            return sortedData;
        };
    }
    return Filter;
}());
export default Filter;
;
export var filter = new Filter();
