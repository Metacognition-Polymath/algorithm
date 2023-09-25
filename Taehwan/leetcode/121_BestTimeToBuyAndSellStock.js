/**
 * 121. Best Time to Buy and Sell Stock
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 *
 * Example 2:
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 */

// 혼자 풀어보기
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */

// var maxProfit = function (prices) {
//   let maxProfit = 0;

//   for (let i = 0; i < prices.length - 1; i++) {
//     const currentPrice = prices[i];

//     for (let j = i; j < prices.length; j++) {
//       const nextPrice = prices[j];
//       const profit = nextPrice - currentPrice;
//       if (nextPrice > currentPrice && profit > maxProfit) {
//         maxProfit = profit;
//       }
//     }
//   }

//   return maxProfit;
// };

// copilot
// var maxProfit = function (prices) {
//   let maxProfit = 0;
//   let minPrice = prices[0];

//   for (let i = 1; i < prices.length; i++) {
//     const currentPrice = prices[i];
//     const profit = currentPrice - minPrice;
//     if (profit > maxProfit) {
//       maxProfit = profit;
//     }
//     if (currentPrice < minPrice) {
//       minPrice = currentPrice;
//     }
//   }

//   return maxProfit;
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));

// chat gpt
var maxProfit = function (prices) {
  if (!prices || prices.length === 0) {
    return 0;
  }

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
};

// Test cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0
