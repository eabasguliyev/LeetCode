function merge(nums1, m, nums2, n) {
  if (!n) return;

  let median = +((m + n) / 2).toFixed();
  let cursor = median - 1;

  for (let i = 0; i < median; i++) {
    let x = nums2.length - 1 - i;
    let lastIndex = nums1.length - 1 - i;

    if (nums1[cursor] > nums2[x]) {
      nums1[lastIndex] = nums1[cursor];
      nums1[cursor] = nums2[x];

      cursor--;
    } else {
      nums1[lastIndex] = nums2[x];
    }
  }
}

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);

console.log(nums1);
