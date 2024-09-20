/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let writePointer = 0;

  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    if (nums[readPointer]) {
      nums[writePointer] = nums[readPointer];

      if (writePointer !== readPointer) {
        nums[readPointer] = 0;
      }
      writePointer++;
    }
  }

  //   for (let i = writePointer; i < nums.length; i++) {
  //     nums[i] = 0;
  //   }
};

let nums = [0, 1, 0, 3, 12];

moveZeroes(nums);

console.log(nums);
