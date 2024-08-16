let count = 2;
function fibonacci(prev1, prev2) {
  let newFibo;

  if ((prev1 === 0) & (prev2 === 1)) {
    console.log(prev1);
    console.log(prev2);
  }

  if (count <= 19) {
    newFibo = prev1 + prev2;
    console.log(newFibo);
    prev1 = prev2;
    prev2 = newFibo;
    count++;
    fibonacci(prev1, prev2);
  } else {
    return;
  }
}

fibonacci(0, 1);
