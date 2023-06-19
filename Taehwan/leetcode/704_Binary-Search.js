/**
 * Given an array of integers nums which is sorted in ascending order,
 * and an integer target, write a function to search target in nums.
 * If target exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let lt = 0;
  let rt = nums.length - 1;
  while (lt <= rt) {
    const mid = ~~((lt + rt) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return -1;
};
