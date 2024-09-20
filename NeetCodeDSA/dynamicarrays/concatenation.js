/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const ans = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[i];
    ans[i + nums.length] = nums[i];
  }

  return ans;
};

const nums = [1, 2, 1];

console.log(getConcatenation(nums));
