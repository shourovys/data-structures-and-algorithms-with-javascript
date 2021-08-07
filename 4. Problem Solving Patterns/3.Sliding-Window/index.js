// PROBLEM: Write a function called mexSubArraySum which accepts an array of integers and a number called n. the function should calculate the maximum sum of n consecutive elements in the array
// with out sliding window
var mexSubArraySum = function (arr, n) {
    if (n > arr.length) {
        return null;
    }
    var maxSum = -Infinity;
    for (var i = 0; i <= arr.length - n; i++) {
        var currentMaxSum = 0;
        for (var j = 0; j < n; j++) {
            var nElement = arr[i + j];
            currentMaxSum += nElement;
        }
        if (currentMaxSum > maxSum) {
            maxSum = currentMaxSum;
        }
    }
    return maxSum;
};
console.log(mexSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
//10
console.log(mexSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
//17
// with out sliding window
var mexSubArraySumRefactor = function (arr, n) {
    if (n > arr.length) {
        return null;
    }
    var maxSum = -Infinity;
    var currentMaxSum = 0;
    for (var j = 0; j < n; j++) {
        var element = arr[j];
        currentMaxSum += element;
    }
    //   maxSum = currentMaxSum;
    for (var i = n; i <= arr.length; i++) {
        currentMaxSum = currentMaxSum - arr[i - n] + arr[i];
        if (currentMaxSum > maxSum) {
            maxSum = currentMaxSum;
        }
    }
    return maxSum;
};
console.log(mexSubArraySumRefactor([1, 2, 5, 2, 8, 1, 5], 2));
//10
console.log(mexSubArraySumRefactor([1, 2, 5, 2, 8, 1, 5], 4));
//17
