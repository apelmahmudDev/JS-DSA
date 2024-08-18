O(n²) is a term used in Big O notation to describe the time complexity of an algorithm. It represents how the runtime of an algorithm increases with the size of the input.

When an algorithm has a time complexity of O(n²), it means that if the input size doubles, the time it takes to run the algorithm increases by four times (since \(2^2 = 4\)). This is because the algorithm typically involves nested loops, where each loop iterates over the input, leading to a quadratic growth in the number of operations.

For example, consider a simple algorithm that compares every element in an array to every other element:

```javascript
function example(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // Some operation
    }
  }
}
```

Here, for an array of size `n`, the outer loop runs `n` times, and for each iteration of the outer loop, the inner loop also runs `n` times, resulting in `n * n = n²` operations. Hence, the time complexity of this algorithm is O(n²).

This is generally considered less efficient for large inputs compared to algorithms with linear time complexity (O(n)) or logarithmic time complexity (O(log n)).
