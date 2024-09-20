/**
 * @param {number[]} arr
 * @return {boolean}
 */

var validMountainArray = function (arr) {
  let increasingOrder = true;
  let isMountain = false;

  if (arr.length < 3) {
    return false;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
      return false;
    }

    if (arr[i] > arr[i + 1]) {
      if (i >= 1 && increasingOrder) {
        increasingOrder = false;
        isMountain = true;
      } else if (increasingOrder) {
        return false;
      }
    } else {
      isMountain = false;
    }
  }

  return isMountain;
};

// [1,2,3,4,3,2,1]

const arr = [4, 4, 3, 2, 1];

console.log(validMountainArray(arr));
