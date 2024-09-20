/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let j = heights.length - 1;
  let copy = [...heights];

  for (let i = 0; i < copy.length && j > i; i++) {
    if (copy[i] >= copy[j]) {
      let tmp = copy[j];
      copy[j] = copy[i];
      copy[i] = tmp;
      j--;
      i--;
    }
  }

  let k = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== copy[i]) {
      k++;
    }
  }

  console.log(copy);
  return k;
};

const input = [1, 2, 1, 2, 1, 1, 1, 2, 1];
// expected = [1,1,1,2,3,4]

console.log(heightChecker(input));
