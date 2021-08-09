const bubbleSort = (arr: number[]): number[] => {
  let checkLength = arr.length;
  //by using checkLength i can reduce the length of checking. because in bubble sort when inner loop completely done- the last element(number) will the big. so that why i don't need to check those last elements
  let swapCount = 0;

  const swap = (arr: number[], j: number, i: number) => {
    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  };

  for (let i = 0; i < checkLength; i) {
    for (let j = 0; j < checkLength - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swapCount++;
        swap(arr, j, i);
      }
    }
    if (swapCount === 0) {
      break;
    }
    checkLength = checkLength - 1;
    swapCount = 0;
  }
  return arr;
};
console.log(bubbleSort([0, 1, 2, 3, 4, 5, 6, 8, 7]));

//big O of Bubble Sort is O(n^2); but if our data is almost sorted then it will O(n);
