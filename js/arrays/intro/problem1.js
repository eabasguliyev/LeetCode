/**
 * @param {number[]} nums
 * @return {number}
 * @example [1, 0, 1, 1, 0, 1]
 */
function findMaxConsecutiveOnes(nums) {
  let counter = 0;
  let lastCounter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      counter++;
    }

    if (!nums[i] || i === nums.length - 1) {
      if (counter > lastCounter) {
        lastCounter = counter;
      }

      counter = 0;
    }
  }

  return lastCounter;
}

console.log(findMaxConsecutiveOnes([1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1]));
