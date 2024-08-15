# Bubble Sort

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the

Simply, Bubble Sort is an algorithm that sorts an array from the lowest value to the highest value.

## How it works

1. Compare the first two elements of the array.
2. If the first element is greater than the second element, swap them.
3. Move to the next pair of elements and repeat step 1 and 2.
4. Continue this process until the last element of the array.

## Pseudocode

```
procedure bubbleSort(A : list of sortable items)
    n = length(A)
    repeat
        swapped = false
        for i = 1 to n-1 inclusive do
            if A[i-1] > A[i] then
                swap(A[i-1], A[i])
                swapped = true
            end if
        end for
        n = n - 1
    until not swapped
end procedure
```

## Complexity

- Worst-case time complexity: O(n^2)
- Best-case time complexity: O(n)
- Average time complexity: O(n^2)
- Space complexity: O(1)

## Example

```javascript
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

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr)); // [ 11, 12, 22, 25, 34, 64, 90 ]
```

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
- [GeeksforGeeks](https://www.geeksforgeeks.org/bubble-sort/)
- [Programiz](https://www.programiz.com/dsa/bubble-sort)
- [w3schools](https://www.w3schools.com/dsa/dsa_algo_bubblesort.php)
