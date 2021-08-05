//                                       Frequency-counter
//PROBLEM: write a function which accepts tow arrays. The function should return if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
var a1 = [1, 2, 3, 4, 3];
var a2 = [1, 4, 9, 16, 9];
// with out Frequency-counter
var same = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
        var lestElement = arr1.pop();
        var index = arr2.indexOf(Math.pow(lestElement, 2));
        if (index < 0) {
            return false;
        }
        arr2.splice(index, 1);
    }
    return true;
};
console.log(same(a1, a2));
// is this solution O(n^2). Because i use indexOf inside for loop
// with Frequency-counter
var same2 = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    //create object with arr elements
    //key will element and value will there count of a array
    var obj1 = {};
    arr1.forEach(function (element) {
        obj1[element] = obj1[element] + 1 || 1;
    });
    var obj2 = {};
    arr2.forEach(function (element) {
        obj2[element] = obj2[element] + 1 || 1;
    });
    for (var key in obj1) {
        var squareKey = Math.pow(Number(key), 2);
        if (obj1[key] !== obj2[squareKey]) {
            return false;
        }
    }
    return true;
};
console.log(same2(a1, a2));
