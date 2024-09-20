/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const squaredNums = [];

  for (let i = 0; i < nums.length; i++) {
    squaredNums.push(nums[i] * nums[i]);
  }

  return squaredNums.sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
