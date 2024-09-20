/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      counter++;
    }
  }

  return counter;
};

console.log(findNumbers([555, 901, 482, 1771]));
