/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = (arr) => {
  let k = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      k++;
    }
  }

  const newArr = new Array(k);

  for (let i = 0, j = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      newArr[j] = arr[i];
      j++;
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    arr[i] = newArr[i];
  }

  return k;
};

var removeDuplicates = (arr) => {
  let k = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      arr[k] = arr[i];
      k++;
    }
  }

  return k;
};

const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(arr));
console.log(arr);
