//                                       Frequency-counter
//PROBLEM: write a function which accepts tow arrays. The function should return if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
var a1 = [1, 2, 3, 4, 3];
var a2 = [1, 4, 9, 16, 9];
// with out Frequency-counter // A Naive Solution
var same = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
        var currentIndex = arr2.indexOf(Math.pow(arr1[i], 2));
        if (currentIndex === -1) {
            return false;
        }
        arr2.splice(currentIndex, 1);
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
        // obj1[element] = obj1[element] + 1 || 1;
        obj1[element] = (obj1[element] || 0) + 1;
    });
    var obj2 = {};
    arr2.forEach(function (element) {
        obj2[element] = (obj2[element] || 0) + 1;
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
//there is on nested loop present so O(n)
// PROBLEM: A function name validAnagram, will take 2 string and if the second string is an anagram of the fast. An anagram is a word, phrase, or name formed by reattaching the letter of another,
// such as cinema, formed from iceman
var str1 = "aaz";
var str2 = "aza";
var validAnagram = function (str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    var obj1 = {};
    for (var i = 0; i < str1.length; i++) {
        var element = str1[i];
        obj1[element] = (obj1[element] || 0) + 1;
    }
    for (var i = 0; i < str2.length; i++) {
        var element = str2[i];
        if (!obj1[element]) {
            return false;
        }
        obj1[element] -= 1;
    }
    return true;
};
console.log(validAnagram(str1, str2));
