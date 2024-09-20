var removeElement = function (nums) {
  let uniques = [];
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    let unique = true;

    for (let j = 0; j < uniques.length; j++) {
      if (uniques[j] === nums[i]) {
        unique = false;
        break;
      }
    }

    if (unique) {
      uniques.push(nums[i]);
      k++;
    }
  }

  for (let i = 0; i < uniques.length; i++) {
    nums[i] = uniques[i];
  }

  return k;
};

const nums = [1, 1, 2, 4, 4, 5];

const k = removeElement(nums);

console.log("K", k);
console.log("Arr", nums);
