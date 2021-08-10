const selectionSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr, arr[smallestIndex]);
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j;
      }
    }
    if (smallestIndex !== i) {
      [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]];
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

const selectionSortMd = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length - 1; i++) {
    let nextElementsAreSorted = true;
    let smallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
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
      [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]];
    }
    if (nextElementsAreSorted) break;
    console.log("one done");
  }
  return arr;
};
console.log(selectionSortMd([1, 2, 0, 3, 4, 5, 6, 7]));
