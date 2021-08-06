//Problem: write a function called sumZero which accepts a sorted array of integers,
//the function should find the first pair where the sum is 0.
//Return an array that includes both values that sum to zero or undefined if pair not exist
var sumZero = function (arr) {
    //ran a for loop half of the array
    var fastCheckElementIndex = 0;
    var lastCheckElementIndex = arr.length - 1;
    while (fastCheckElementIndex < lastCheckElementIndex) {
        var fastCheckElement = arr[fastCheckElementIndex];
        var lastCheckElement = arr[lastCheckElementIndex];
        var sum = fastCheckElement + lastCheckElement;
        if (sum === 0) {
            return [fastCheckElement, lastCheckElement];
        }
        else if (sum > 0)
            lastCheckElementIndex--;
        else
            fastCheckElementIndex++;
    }
};
console.log(sumZero([-1, 0, 1, 2, 3]));
console.log(sumZero([-2, -1, 3, 4, 5]));

// PROBLEM: implement a function called countUniqueValue, witch accepts a sorted array, and counts the unique values in the array, there can be negative number's in the array, but it will always be sorted
var countUniqueValue = function (arr) {
    var uniqueValue = 0;
    for (var i = 0; i < arr.length; i++) {
        var nextElement = arr[i + 1];
        var currentElement = arr[i];
        if (nextElement !== currentElement) {
            uniqueValue++;
        }
    }
    return uniqueValue;
};
console.log(countUniqueValue([1, 2, 2, 3]));
console.log(countUniqueValue([-2, -2, -1, 0]));
