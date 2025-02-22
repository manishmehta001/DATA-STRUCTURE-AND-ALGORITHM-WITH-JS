const generateLargeArray = (size) => {
  return Array.from({ length: size }, () =>
    Math.floor(Math.random() * 1000000)
  );
};

const quickSort = (array) => {
  if (array.length <= 1) return array;

  let pivot = array[array.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      left.push(array[i]);
    }
  }
  let sortedLeft = quickSort(left);
  let sortedRight = quickSort(right);

  let sortedArray = [];
  sortedArray.push(...sortedLeft);
  sortedArray.push(pivot);
  sortedArray.push(...sortedRight);

  return sortedArray;
  //   return [...quickSort(left), pivot, ...quickSort(right)];
};
console.log(quickSort([8, 3, 1, 7]));

/*
let largeArray = generateLargeArray(1000000);

// Measure sorting time
console.time("QuickSort Time");
let sortedArray = quickSort(largeArray);
console.timeEnd("QuickSort Time");

console.log("Sorting Done!");

*/
