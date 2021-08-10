var selectionSort = function (arr) {
    var _a;
    for (var i = 0; i < arr.length - 1; i++) {
        var smallestIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            console.log(arr, arr[smallestIndex]);
            if (arr[j] < arr[smallestIndex]) {
                smallestIndex = j;
            }
        }
        if (smallestIndex !== i) {
            _a = [arr[smallestIndex], arr[i]], arr[i] = _a[0], arr[smallestIndex] = _a[1];
        }
        console.log("one done");
    }
    return arr;
};
// console.log(selectionSort([1, 2, 3, 4, 5, 6, 7]));
//big O of Selection Sort is O(n^2);
//if can use when i need ot reduce the swap;
console.log("====================fast one done=====================");
//modify Selection Sort for if all the after element i is sorted then stop the loop and return the arr because the array is already sorted 
var selectionSortMd = function (arr) {
    var _a;
    for (var i = 0; i < arr.length - 1; i++) {
        var nextElementsAreSorted = true;
        var smallestIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            console.log(arr, arr[smallestIndex]);
            if (arr[j] < arr[smallestIndex]) {
                smallestIndex = j;
            }
            if (arr[j] > arr[j + 1]) {
                nextElementsAreSorted = false;
            }
            console.log(nextElementsAreSorted);
        }
        if (smallestIndex !== i) {
            _a = [arr[smallestIndex], arr[i]], arr[i] = _a[0], arr[smallestIndex] = _a[1];
        }
        if (nextElementsAreSorted)
            break;
        console.log("one done");
    }
    return arr;
};
console.log(selectionSortMd([1, 2, 0, 3, 4, 5, 6, 7]));
