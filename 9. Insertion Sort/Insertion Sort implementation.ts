// insertion Sort with swap;
const insertionSortWithSwap = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    let currentIIndex = i;
    for (let j = i - 1; j >= 0; j--) {
      console.log(arr, arr[currentIIndex], arr[j], arr[currentIIndex] < arr[j]);

      if (arr[currentIIndex] < arr[j]) {
        [arr[currentIIndex], arr[j]] = [arr[j], arr[currentIIndex]];
        currentIIndex = j;
      } else break;
    }
  }
  return arr;
};
// console.log(insertionSortWithSwap([4, 6, 5, 8, 7, 0, 1, 2, 3]));

// insertion Sort with out swap.
// if j value is bigger then currentValue i will increase it by 1;
const insertionSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    let currentIValue = arr[i];
    for (var j = i - 1; j >= 0 && currentIValue < arr[j]; j--) {
      console.log(arr, currentIValue, arr[j], currentIValue < arr[j]);

      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentIValue;
  }

  return arr;
};
console.log(insertionSort([7, 0, 1]));
//big O of Insertion Sort is O(n^2); but if our data is almost sorted then it will O(n);
//it is useful data is continuously coming form source-- because it always sorted left part of array;
