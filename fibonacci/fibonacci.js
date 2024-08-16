let prev1 = 0;
let prev2 = 1;

const fibonacci = [prev1, prev2];

for (let i = 1; i <= 18; i++) {
  let fibo = prev1 + prev2;

  prev1 = prev2;
  prev2 = fibo;

  fibonacci.push(fibo);
}

console.log(fibonacci);
