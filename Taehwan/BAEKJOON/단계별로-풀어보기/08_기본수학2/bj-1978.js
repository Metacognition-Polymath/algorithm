{
  // 1. 소수 찾기
  /**
   * 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.
   * [1, 3, 5, 7] => 3
   */
  // const N = [1, 3, 5, 7];
  const fs = require("fs");
  const [testCaseCount, inputs] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  const N = inputs.split(" ").map((input) => Number(input));
  const primeCount = N.filter((n) => {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }).length;
  console.log(primeCount);
}
