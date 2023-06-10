/**
 * Maximum Product Subarray
 * Given an integer array nums, find a subarray that has the largest product, and return the product.
 * The test cases are generated so that the answer will fit in a 32-bit integer.

Example 1.
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2.
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 */

// 답이 나오지 않음
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxProduct = function (nums) {
//   /**
//    * 부분집합의 최대 곱
//    */
//   /**
//    * 제한된 자원으로 dy를 만든다 - 전체 배열의 길이
//    * 하나 씩 늘리면서 최대 효율을 찾는다
//    */
//   // 최대 값을 찾는 것이므로 초기값은 작은 값인 0으로 초기화
//   const dy = Array.from({ length: nums.length + 1 }, () => 0);

//   // dy[1] = Math.max(...nums);
//   // dy[2] = dy[1] * secondMaxNumber
//   // dy[1] = Math.max(nums[i], dy[1])
//   // const productNumber = dy[1] * nums[i];
//   // dy[2] = Math.max(dy[2], productNumber)

//   // // ...
//   // let answer = Math.max(...dy);

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = nums.length; j >= i; j--) {
//       if (j <= 0) continue;
//       const productNumber = dy[j - 1] * nums[i];
//       dy[j] = Math.max(dy[j], productNumber, nums[i]);
//     }
//     console.log("dy", dy);
//   }

//   return Math.max(...dy);
// };

// console.log(maxProduct([2, 3, -2, 4]));

// 시간 초과
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxProduct = function (nums) {
//   let max = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     let tempMax = nums[i];
//     let tempAcc = 1;
//     for (let j = i; j < nums.length; j++) {
//       // 누적 곱
//       tempAcc = tempAcc * nums[j];
//       if (tempAcc > tempMax) {
//         tempMax = tempAcc;
//       }
//     }
//     if (tempMax > max) {
//       max = tempMax;
//     }
//   }

//   return max;
// };

// // console.log(maxProduct([2, 3, -2, 4]));
// console.log(maxProduct([-2, 0, -1]));

// 정답해설
/**
 * brute force -> 2중 for 문, O(n^2)
 * Can we do better?
 * if all positive
 * no matter what happen it keep increasing
 * what if all negative
 * odd : negative
 * even : positive
 * e.g. [-1, -2, -3]
 * -> -1,-2 => max : 2, min -2
 * -> -1,-2,-3 => max : 6, min : -6
 *
 * Edge case -> including '0'
 * [-1, -2, -3, 0, 3, 5]
 * 0을 만나면 max, min을 각각 1으로 초기화
 */

/**
 * 교훈
 * 냅색이 아닌데 냅색으로 풀려고 하니까 답이 안나왔다
 */
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxProduct = function (nums) {
//   let res = Math.max(...nums);

//   let curMin = 1;
//   let curMax = 1;

//   for (const n of nums) {
//     if (n === 0) {
//       curMax = 1;
//       curMin = 1;
//       continue;
//     }
//     tmp = curMax * n;
//     curMax = Math.max(n * curMax, n * curMin, n); // 자기 자신이 될 수도 있음
//     curMin = Math.min(tmp, n * curMin, n);
//     res = Math.max(res, curMax, curMin);
//   }

//   return res;
// };

// console.log(maxProduct([2, 3, -2, 4]));
// console.log(maxProduct([-2, 0, -1]));

// 다시 풀어보기
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function (nums) {
//   let maxNumber = Math.max(...nums); // 초기 최대값은 숫자중 제일 큰 수

//   let curMax = 1; // 곱해야 하므로 초기값은 1이 됨
//   // curMin을 구하는 이유는 최소 값이 음수이고 현재 숫자가일 때 음수 * 음수로 최대값이 나올 수 있기 때문
//   let curMin = 1; // 곱해야 하므로 초기값은 1이 됨

//   for (const n of nums) {
//     if (n === 0) {
//       // 현재 숫자가 0이면 다음 숫자에서 curMax가 초기화 되기 때문
//       curMax = 1;
//       curMin = 1;
//       continue;
//     }
//     temp = curMax * n; // 최대값과 곱을 임시 저장
//     curMax = Math.max(temp, n, curMin * n);
//     curMin = Math.min(temp, n, curMin * n);
//     maxNumber = Math.max(curMax, curMin, maxNumber);
//   }

//   return maxNumber;
// };

// console.log(maxProduct([2, 3, -2, 4]));
// console.log(maxProduct([-2, 0, -1]));

// 다시 풀어보기 2회차
// var maxProduct = function (nums) {
//   let maxNumber = Math.max(...nums);

//   let curMax = 1; //
//   let curMin = 1;

//   for (const num of nums) {
//     if (num === 0) {
//       curMax = 1;
//       curMin = 1;
//       continue;
//     } else {
//       const temp = curMax * num;
//       curMax = Math.max(temp, num, curMin * num);
//       curMin = Math.min(temp, num, curMin * num);
//       maxNumber = Math.max(curMax, curMin, maxNumber);
//     }
//   }

//   return maxNumber;
// };

// console.log(maxProduct([2, 3, -2, 4]));
// console.log(maxProduct([-2, 0, -1]));

// 다시 풀어보기 3회차
var maxProduct = function (nums) {
  let maxNum = Math.max(...nums);
  let curMax = 1;
  let curMin = 1;

  for (const num of nums) {
    if (num === 0) {
      // 초기화
      curMax = 1;
      curMin = 1;
    } else {
      const temp = curMax * num;
      curMax = Math.max(temp, num, curMin * num); // curMin * num 이 핵심 !!
      curMin = Math.max(temp, num, curMin * num);
      maxNum = Math.max(curMax, curMin, maxNum);
    }
  }

  return maxNum;
};

console.log(maxProduct([2, 3, -2, 4, 2]));
console.log(maxProduct([-2, 0, -1]));
