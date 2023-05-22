/**
 * You are given an integer array coins representing coins of different denominations
 * and an integer amount representing a total amount of money.
 *
 * Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 *
 * You may assume that you have an infinite number of each kind of coin.
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // dy는 제한된 자원으로 배열을 만든다
  // 여기에서 가치는 최소 개수이다
  // 최소값을 구하기 위해 초기값으로 큰 수를 넣는다
  const dy = Array.from({ length: amount + 1 }, () => Number.MAX_SAFE_INTEGER);
  dy[0] = 0;

  // 마지막에 리턴할 때 가치(최소 개수)가 초기값이라면 -1을 리턴한다
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dy[j] = Math.min(dy[j], dy[j - coins[i]] + 1); // 개수는 하나씩 증가
    }
  }

  const answer = dy[amount] === Number.MAX_SAFE_INTEGER ? -1 : dy[amount];
  return answer;
};

// console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
