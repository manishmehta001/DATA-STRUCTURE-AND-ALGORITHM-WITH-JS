const binarySearch = (array, n) => {
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (array[middle] !== n && left <= right) {
    if (array[middle] < n) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return array[middle] === n ? middle : -1;
};

console.log(
  binarySearch(
    [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    -90
  )
);
