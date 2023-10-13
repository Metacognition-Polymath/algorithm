/**
 * 53. Maximum Subarray
 * Given an integer array `nums`, find the subarray with the largest sum, and return its sum.
 *
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 *
 * Example 2:
 * Input: nums = [1]
 * Output: 1
 * Explanation: The subarray [1] has the largest sum 1.
 *
 * Example 3:
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 * Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 */

// 혼자 풀어보기
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const maxSubArray = function (nums) {
//   // 계속 최대값을 갱신하자
//   // 0 ~ 0, 0 ~ 1, 0 ~ 2, ... 0 ~ n, 1 ~ 1, 1 ~ 2, ...
//   let maxNum = Number.MIN_SAFE_INTEGER;

//   const getSumFromAtoB = (nums, a, b) => {
//     let sum = 0;
//     if (a > b) return 0;
//     for (let i = a; i <= b; i++) {
//       sum += nums[i];
//     }
//     return sum;
//   };

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//       const sum = getSumFromAtoB(nums, i, j);
//       if (sum > maxNum) {
//         maxNum = sum;
//       }
//     }
//   }

//   return maxNum;
// };

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubArray([1]));
// console.log(maxSubArray([5, 4, -1, 7, 8]));

// 다른 사람 풀이
/**
 * Kadane's Algorithm
 * - 핵심 아이디어
 *   - 현재 위치까지의 최대 부분 배열합(maxCurrent)과 지금까지 발견한 최대 부분 배열의 합(maxGlobal)을 유지하는 것
 */
// const maxSubArray = (nums) => {
//   let maxCurrent = nums[0];
//   let maxGlobal = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     maxCurrent = Math.max(nums[i], maxCurrent + nums[i]); // 현재 요소 + 이전까지의 maxCurrent 중 더 큰 값을 선택 => 현재 요소를 포함하는 최대 부분 배열의 합
//     maxGlobal = Math.max(maxGlobal, maxCurrent); // maxGlobal과 maxCurrent 중 더 큰 값을 선택 => 지금까지 발견한 최대 부분 배열의 합
//   }

//   return maxGlobal;
// };

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
// console.log(maxSubArray([1])); // 1
// console.log(maxSubArray([5, 4, -1, 7, 8])); // 23

// 따라 풀어보기
// const maxSubArray = (nums) => {
//   let maxCurrent = nums[0]; // 인덱스별로 구한 부분합
//   let maxGlobal = nums[0]; // 최종적으로 리턴할 변수

//   // 0번 인덱스는 포함되어 있으니 1번부터 마지막까지 돌림
//   for (let i = 1; i < nums.length; i++) {
//     maxCurrent = Math.max(nums[i], maxCurrent + nums[i]); // 나 자신과 이전까지의 최대합을 더해서 비교 - 부분합의 최대
//     maxGlobal = Math.max(maxGlobal, maxCurrent); // 현재 부분합과 전체 부분합들 중에서 더 큰 수가 있으면 갱신
//   }

//   return maxGlobal;
// };

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
// console.log(maxSubArray([1])); // 1
// console.log(maxSubArray([5, 4, -1, 7, 8])); // 23

/**
 * Kanane 알고리즘 설명
 * - https://scavienger.tistory.com/19
 * - DP -> 점화식
 *
 * n-1번째와 n번째의 관계
 * - 뒤에서 부터 돌아간다고 생각해보자
 * - n번째 인덱스까지의 부분합은 배열의 n번째 값과 n-1번째 인덱스까지의 부분합을 더한 값을 비교해서 큰 것을 선택하면 그게 최대 부분합이 된다
 */
// 복습 1회차
const maxSubArray = (nums) => {
  let currentMax = nums[0];
  let globalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    globalMax = Math.max(globalMax, currentMax);
  }

  return globalMax;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
