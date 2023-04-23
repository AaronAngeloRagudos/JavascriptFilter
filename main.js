import { filter } from "./dist/filter.js";

let rawData = [
    {
        greeting: 'hello',
        type: ['hello','greeting', 'respects']
    },
    {
        greeting: 'fuck you',
        type: ['insult', 'offense']
    },
    {
        greeting: 'thank you',
        type: ['gratitude', 'appreciation']
    },
];

let dataToBeMatched = [];

rawData.forEach((data) => {
    dataToBeMatched.push(data.type);
});

let matchTo = ['greeting'];

const toConsole = filter.sortData({ rawData, dataToBeMatched, matchTo });

console.log(toConsole)