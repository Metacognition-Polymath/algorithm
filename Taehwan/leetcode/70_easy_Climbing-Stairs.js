/**
 * You are climbing a staircase.
 * - 계단을 오릅니다
 * It takes n steps to reach the top.
 * - 계단의 개수는 n개
 * Each time you can either climb 1 or 2 steps.
 * - 1 또는 2개의 계단을 오를 수 있습니다
 * In how many distinct ways can you climb to the top?
 * - 얼마나 많은 방법으로 계단을 오를 수 있나요?
 */
/**
 * @param {number} n
 * @return {number}
 */
// 스스로 풀어보기
var climbStairs = function (n) {
  // n번째 계단을 오르는 방법의 수 = (n - 1) + (n - 2)
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = 1;
  dp[2] = 2; // 1 + 1, 2
  if (n < 3) {
    return dp[n];
  }
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
console.log(climbStairs(1)); // 1
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
