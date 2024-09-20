/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i - 1] !== nums[i]) {
      nums[k++] = nums[i];
    }
  }

  return k;
};

const arr = [1, 1, 2];

console.log(removeDuplicates(arr));

console.log(arr);
