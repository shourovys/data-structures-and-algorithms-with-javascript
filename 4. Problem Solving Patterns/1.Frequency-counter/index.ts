//                                       Frequency-counter
//PROBLEM: write a function which accepts tow arrays. The function should return if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

const a1: number[] = [1, 2, 3, 4, 3];
const a2: number[] = [1, 4, 9, 16, 9];

// with out Frequency-counter // A Naive Solution
const same = (arr1: number[], arr2: number[]): boolean => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const currentIndex = arr2.indexOf(arr1[i] ** 2);
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
const same2 = (arr1: number[], arr2: number[]): boolean => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  //create object with arr elements
  //key will element and value will there count of a array
  const obj1: object = {};
  arr1.forEach((element) => {
    // obj1[element] = obj1[element] + 1 || 1;
    obj1[element] = (obj1[element] || 0) + 1;
  });
  const obj2: object = {};
  arr2.forEach((element) => {
    obj2[element] = (obj2[element] || 0) + 1;
  });

  for (const key in obj1) {
    const squareKey = Number(key) ** 2;
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
const str1: string = "aaz";
const str2: string = "aza";
const validAnagram = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) {
    return false;
  }
  const obj1: object = {};
  for (let i = 0; i < str1.length; i++) {
    const element = str1[i];
    obj1[element] = (obj1[element] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const element = str2[i];
    if (!obj1[element]) {
      return false;
    }
    obj1[element] -= 1;
  }

  return true;
};
console.log(validAnagram(str1, str2));
