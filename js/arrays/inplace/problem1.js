/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let prev = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    const curr = arr[i];
    arr[i] = prev;

    prev = Math.max(curr, prev);
  }

  return arr;
};

const arr = [17, 18, 5, 4, 6, 1];

console.log("final", replaceElements(arr));
