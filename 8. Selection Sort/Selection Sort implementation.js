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
        _a = [arr[smallestIndex], arr[i]], arr[i] = _a[0], arr[smallestIndex] = _a[1];
        console.log("one done");
    }
    return arr;
};
console.log(selectionSort([1, 2, 0, 3, 4, 7, 6]));
