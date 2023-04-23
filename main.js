import { filter } from "./dist/filter.js";

const rawData = [
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

const dataToBeMatched = [];

rawData.forEach((data) => {
    dataToBeMatched.push(data.type);
});

const matchTo = ['greeting'];

const toConsole = filter.sortData({ rawData, dataToBeMatched, matchTo });

console.log(toConsole)