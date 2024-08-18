let age = [34, 33, 21, 55, 80, 10, 44, 15];

const bubbleSort = (arr) => {
  let swapped = false;
  let n = arr.length;

  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);

  return arr;
};

console.log(bubbleSort(age));
