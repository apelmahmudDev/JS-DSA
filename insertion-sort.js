let khata = [4, 9, 2, 1, 7, 5, 3, 8, 6, 5];

let sortKhata = [];
let smallest = 1;
for (let i = 0; i <= khata.length; i++) {
  let x = khata[i];
  if (smallest <= x) {
    sortKhata.push(x);
    smallest = x;
  }
}

console.log(sortKhata);
