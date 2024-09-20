let orgArr = [1, 0, 2, 3, 0, 4, 5, 0];
// let orgArr = [0, 0, 0, 0, 0, 0, 0];
// let orgArr = [1, 5, 2, 0, 6, 8, 0, 6, 0];
// let orgArr = [0, 4, 1, 0, 0, 8, 0, 0, 3];

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

const duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    // find next occurence
    let found = false;

    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;

      if (arr[i] === 0) {
        found = true;
        break;
      }
    }

    if (found) {
      for (let j = arr.length - 1; j > i + 1; j--) {
        arr[j] = arr[j - 1];
      }

      arr[i] = 0;

      if (i + 1 < arr.length) {
        arr[i + 1] = 0;
      }
      i++;
    }
  }
};

const duplicateZeros2 = function (arr) {
  let tmpArr = [];
  for (let i = 0; i < arr.length; i++) {
    tmpArr.push(arr[i]);
    if (!arr[i]) {
      tmpArr.push(0);
    }

    arr[i] = tmpArr[i];
  }
};

duplicateZeros(orgArr);

console.log(orgArr);
