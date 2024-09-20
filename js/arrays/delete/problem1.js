var removeElement = function (nums, val) {
  let arr = [];
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      arr.push(nums[i]);
      k++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    nums[i] = arr[i];
  }

  return k;
};

const nums = [3, 2, 2, 3];
const val = 3;

const k = removeElement(nums, val);

console.log("K", k);
console.log("Arr", nums);
