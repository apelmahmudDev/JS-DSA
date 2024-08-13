{
  /*************************************
    Algorithm:

    STEP-1: Create a variable 'lowest' and set it equal to the first element of the array
    STEP-2: Go throw every element of the array
    STEP-3: If the current element has lower than 'lowest' update 'lowest' to this value
    STEP-4: After looking at all the elements of the array, the 'lowest' variable now contain the lowest value

**************************************/
}

const trees = [3, 55, 11, 44, 55, 6, 3, 10];

let lowest = trees[0];

for (let i = 0; i <= trees.length; i++) {
  let item = trees[i];

  if (item < lowest) {
    lowest = item;
  }
}

console.log("lowest Value", lowest);
