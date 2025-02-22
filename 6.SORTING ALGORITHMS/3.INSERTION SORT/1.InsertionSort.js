const InsertionSort = (array) => {
  for (i = 1; i < array.length; i++) {
    let currentValue = array[i];
    for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }
  return array;
};

console.log(InsertionSort([2, 1, 9, 76, 4]));
