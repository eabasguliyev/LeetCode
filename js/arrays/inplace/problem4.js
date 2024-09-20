/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let k = 0;
  let tmp = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      tmp = nums[k];
      nums[k] = nums[i];
      nums[i] = tmp;
      k++;
    }
  }
  return nums;
};

const arr = [3, 1, 2, 4];

sortArrayByParity(arr);

console.log(arr);
