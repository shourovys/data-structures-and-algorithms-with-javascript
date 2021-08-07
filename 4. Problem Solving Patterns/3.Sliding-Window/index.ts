// PROBLEM: Write a function called mexSubArraySum which accepts an array of integers and a number called n. the function should calculate the maximum sum of n consecutive elements in the array

// with out sliding window

const mexSubArraySum = (arr: number[], n: number) => {
  if (n > arr.length) {
    return null;
  }
  let maxSum = -Infinity;
  for (let i = 0; i <= arr.length - n; i++) {
    let currentMaxSum = 0;
    for (let j = 0; j < n; j++) {
      const nElement = arr[i + j];
      currentMaxSum += nElement;
    }
    if (currentMaxSum > maxSum) {
      maxSum = currentMaxSum;
    }
  }
  return maxSum;
};
console.log(mexSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(mexSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
// in this solution O(n^2)

// with out sliding window

const mexSubArraySumRefactor = (arr: number[], n: number) => {
  if (n > arr.length) {
    return null;
  }
  let maxSum = -Infinity;
  let currentMaxSum = 0;

  for (let j = 0; j < n; j++) {
    const element = arr[j];
    currentMaxSum += element;
  }
  //   maxSum = currentMaxSum;
  for (let i = n; i <= arr.length; i++) {
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
// in this solution O(n)
