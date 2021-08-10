// insertion Sort with swap;
var insertionSortWithSwap = function (arr) {
    var _a;
    for (var i = 1; i < arr.length; i++) {
        var currentIIndex = i;
        for (var j = i - 1; j >= 0; j--) {
            console.log(arr, arr[currentIIndex], arr[j], arr[currentIIndex] < arr[j]);
            if (arr[currentIIndex] < arr[j]) {
                _a = [arr[j], arr[currentIIndex]], arr[currentIIndex] = _a[0], arr[j] = _a[1];
                currentIIndex = j;
            }
            else
                break;
        }
    }
    return arr;
};
// console.log(insertionSortWithSwap([4, 6, 5, 8, 7, 0, 1, 2, 3]));
// insertion Sort with out swap.
// if j value is bigger then currentValue i will increase it by 1;
var insertionSort = function (arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentIValue = arr[i];
        for (var j = i - 1; j >= 0 && currentIValue < arr[j]; j--) {
            console.log(arr, currentIValue, arr[j], currentIValue < arr[j]);
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentIValue;
    }
    return arr;
};
console.log(insertionSort([7, 0, 1]));
