# JavascriptFilter

## Hello! This library or source code is written in TypeScript (I'm new to TS, so it would be my pleasure to work with you if you want to refactor my code.), and the functions this filter provides are:

### 1. sortData()

#### - sortData() accepts one argument, but that argument should be an object{} that contains three values / variables:

##### a. The raw data itself that you want to filter.
 ##### b. The characteristics / traits of each object of the raw data you want to filter (e.g. A raw data of [{ name: 'Aaron', characteristics: ['charismatic','passionate']}, { name: 'Angel', characteristics: ['clever', 'enthusiastic']} ] will have the second data turned into [ ['charismatic', 'passionate'], ['clever', 'enthusiastic] ] );
 
 #### NOTE: You need to do this yourself as I do not know of a way to target a variable from an object without knowings its name.
 
 #### c. The third data is the preferences you want or the wants of your users. (e.g. ['funny', 'charismatic', 'enthusiastic']); 

#### This returns all the data that had a match of characteristics with the preferences at least once.

### 2. getPercentageOccurence()

#### - getPercentageOccurence() is the same as sortData(), however, this function returns not only the filtered data, but also the percentage and decimal value of the rate of match each object's characteristics/traits with the preferences.

## Demo
### Currently being built
