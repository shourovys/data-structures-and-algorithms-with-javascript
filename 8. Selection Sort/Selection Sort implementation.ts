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
console.log(selectionSort([1, 2, 0, 3, 4, 7, 6]));
//big O of Selection Sort is O(n^2);
//if can use when i need ot reduce the swap;
