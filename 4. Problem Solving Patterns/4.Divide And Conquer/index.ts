//we deviled a big problem in some small problem then we try to make it solve
//binary search is a example of this pattern

//PROBLEM: Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value pressed. it the value is not found, return -1.

const search = (arr: number[], num: number): number => {
  let leftIndex = 0;
  let rightIndex = arr.length;
  while (leftIndex <= rightIndex) {
    const medIndex = Math.round((leftIndex + rightIndex) / 2);
    console.log(medIndex);

    const medElement = arr[medIndex];
    if (medElement === num) {
      return medIndex;
    } else if (medElement > num) {
      rightIndex = medIndex - 1;
    } else {
      leftIndex = medIndex + 1;
    }
  }
  return -1;
};
// console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 5, 6], 4));
// console.log(search([1, 2, 3, 4, 5, 6], 7));

// time complexity O(log n) better then leaner search O(n^2)
