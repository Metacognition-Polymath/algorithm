/**
 * There are n gas stations along a circular route,
 * where the amount of gas at the ith station is gas[i].
 * You have a car with an unlimited gas tank
 * and it costs cost[i] of gas to travel
 * from the ith station to its next (i + 1)th station.
 * You begin the journey with an empty tank
 * at one of the gas stations.
 * Given two integer arrays gas and cost,
 * return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique
 */
// /**
//  * @param {number[]} gas
//  * @param {number[]} cost
//  * @return {number}
//  */
// // 혼자 풀어보기
// var canCompleteCircuit = function (gas, cost) {
//   //
//   // const gasSum = gas.reduce((acc, cur) => acc + cur, 0);
//   // const costSum = cost.reduce((acc, cur) => acc + cur, 0);
//   // if (costSum > gasSum) {
//   //   return -1;
//   // }
//   // wrong !!
//   // let maxDiffIndex = 0;
//   // let maxDiff = Number.MIN_SAFE_INTEGER;
//   // const diffArr = gas.map((g, i) => {
//   //   const diff = g - cost[i];
//   //   if (maxDiff < diff) {
//   //     maxDiff = diff;
//   //     maxDiffIndex = i;
//   //   }
//   //   return diff;
//   // });
//   // console.log("diffArr", diffArr);
//   // return maxDiffIndex;
//   // brute force -> Time Limit Exceeded !!
//   // for (let i = 0; i < gas.length; i++) {
//   //   let leftGas = 0;
//   //   let count = 0;
//   //   for (let j = i; j < i + gas.length; j++) {
//   //     const pointer = j < gas.length ? j : j - gas.length;
//   //     leftGas = leftGas + gas[pointer] - cost[pointer];
//   //     if (leftGas < 0) {
//   //       break;
//   //     }
//   //     count++;
//   //     if (count === gas.length) {
//   //       return i;
//   //     }
//   //   }
//   // }
//   // return -1;
// };

// console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
// console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));

// 정답해설
// /**
//  * @param {number[]} gas
//  * @param {number[]} cost
//  * @return {number}
//  */
// var canCompleteCircuit = function (gas, cost) {
//   let gasSum = 0;
//   let costSum = 0;
//   for (let i = 0; i < gas.length; i++) {
//     gasSum += gas[i];
//     costSum += cost[i];
//   }
//   if (gasSum < costSum) {
//     return -1;
//   }

//   let total = 0;
//   res = 0; // starting position
//   for (let i = 0; i < gas.length; i++) {
//     const diff = gas[i] - cost[i];
//     total += diff;
//     if (total < 0) {
//       total = 0;
//       res = i + 1;
//     }
//   }

//   return res;
// };

// console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
// console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));

// 다시 풀어보기
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let gasSum = 0;
  let costSum = 0;
  for (let i = 0; i < gas.length; i++) {
    gasSum += gas[i];
    costSum += cost[i];
  }

  if (costSum > gasSum) {
    return -1;
  }

  let index = 0;
  let total = 0;
  for (let i = 0; i < gas.length; i++) {
    const diff = gas[i] - cost[i];
    total += diff;
    if (total < 0) {
      total = 0; // it's the key of the solution !
      index++;
    }
  }
  return index;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
