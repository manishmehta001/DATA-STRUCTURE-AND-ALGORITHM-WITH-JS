const bubbleSort = (array) => {
  let noSwap;
  for (let i = array.length; i > 0; i--) {
    noSwap = true;
    for (j = 0; j < i - 1; j++) {
      console.log(array, array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
  }
  return array;
};

// console.log(bubbleSort([4, 8, 3, 1, 8, 13, 2]));
console.log(bubbleSort([1, 2, 4, 3]));
