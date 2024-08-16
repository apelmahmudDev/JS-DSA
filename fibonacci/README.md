# Fibonacci

Fibonacci is a sequence of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1.

## How it works

1. Start with two variables `a` and `b` as 0 and 1.
2. Loop through `n` times, where `n` is the number of Fibonacci numbers to generate.
3. Calculate the next Fibonacci number by adding `a` and `b`, then assign the value of `b` to `a` and the value of the next Fibonacci number to `b`.

## Pseudocode

```javascript
const fibonacci = (n) => {
  let a = 0;
  let b = 1;
  let result = [a, b];

  for (let i = 2; i < n; i++) {
    let next = a + b;
    a = b;
    b = next;
    result.push(next);
  }

  return result;
};

console.log(fibonacci(10)); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
```

## Complexity

- Time complexity: O(n)
- Space complexity: O(n)

## Example

```javascript
const fibonacci = (n) => {
  let a = 0;
  let b = 1;
  let result = [a, b];

  for (let i = 2; i < n; i++) {
    let next = a + b;
    a = b;
    b = next;
    result.push(next);
  }

  return result;
};

console.log(fibonacci(10)); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
```

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Fibonacci_number)
- [GeeksforGeeks](https://www.geeksforgeeks.org/fibonacci-series/)
- [Programiz](https://www.programiz.com/javascript/examples/fibonacci-series)
