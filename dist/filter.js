var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import sorting from "../dist/sorting.js";
import handleError from "../dist/handleError.js";
import percentage from "../dist/percentage.js";
var Filter = (function () {
    function Filter() {
        var _this = this;
        this.sortData = function (_a) {
            var rawData = _a.rawData, dataToBeMatched = _a.dataToBeMatched, matchTo = _a.matchTo;
            return __awaiter(_this, void 0, void 0, function () {
                var isError, isSorted, sortedData;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4, handleError({
                                rawData: rawData,
                                dataToBeMatched: dataToBeMatched,
                                matchTo: matchTo
                            })];
                        case 1:
                            isError = _b.sent();
                            if (isError.status) {
                                if (isError.type === 'TypeError') {
                                    throw new TypeError(isError.message);
                                }
                                throw new Error(isError.message);
                            }
                            return [4, sorting({
                                    rawData: rawData,
                                    dataToBeMatched: dataToBeMatched,
                                    matchTo: matchTo
                                })];
                        case 2:
                            isSorted = _b.sent();
                            if (!isSorted.status) {
                                throw new Error('Something went wrong in sorting the data provided. Please submit an issue in the github repository.');
                            }
                            sortedData = isSorted.data;
                            return [2, sortedData];
                    }
                });
            });
        };
        this.getPercentageOccurence = function (_a) {
            var rawData = _a.rawData, dataToBeMatched = _a.dataToBeMatched, matchTo = _a.matchTo;
            var sortedData = _this.sortData({
                rawData: rawData,
                dataToBeMatched: dataToBeMatched,
                matchTo: matchTo
            });
            var dataWithPercentageOccurence = percentage({
                data: sortedData,
                preferences: matchTo
            });
        };
    }
    return Filter;
}());
export default Filter;
;
export var filter = new Filter();
//# sourceMappingURL=filter.js.map