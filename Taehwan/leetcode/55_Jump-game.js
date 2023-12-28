/**
 * nums : number[]
 * You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
 * return true if you can reach the last index, or false otherwise.
 *
 * Example 1:
 * Input: nums = [2,3,1,1,4]
 * Output: true
 * Explanation Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 * Example 2:
 * Input: nums = [3,2,1,0,4]
 * Output: false
 * Explanation You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 */
// /**
//  * @param {number[]} nums
//  */
// const canJump = (nums) => {
//   const arrivedCounts = Array.from({ length: nums.length }, () => 0);
//   nums.forEach((num, index) => {
//     for (let i = index + 1; i <= index + num; i++) {
//       if (i > nums.length - 1) {
//         break;
//       }
//       arrivedCounts[i]++;
//     }
//   });
//   console.log(arrivedCounts);
//   return !!arrivedCounts[arrivedCounts.length - 1];
// };
// console.log(canJump([2, 3, 1, 1, 4]));
// console.log(canJump([3, 2, 1, 0, 4]));

const canJump = (nums) => {
  const maxReach = nums.length - 1;
  let maxIndex = 0;

  for (let i = 0; i <= maxIndex; i++) {
    const currentMax = i + nums[i];
    maxIndex = Math.max(maxIndex, currentMax);

    if (maxIndex >= maxReach) {
      return true;
    }
  }

  return false;
};
console.log(canJump([2, 3, 1, 1, 4]));
// console.log(canJump([3, 2, 1, 0, 4]));
