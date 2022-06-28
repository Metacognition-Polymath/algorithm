{
  // 2. 소수
  /**
   * 자연수 M과 N이 주어질 때 M이상 N이하의 자연수 중 소수인 것을 모두 골라 이들 소수의 합과 최솟값을 찾는 프로그램을 작성하시오.
   * 예를 들어 M=60, N=100인 경우 60이상 100이하의 자연수 중 소수는 61, 67, 71, 73, 79, 83, 89, 97 총 8개가 있으므로, 이들 소수의 합은 620이고, 최솟값은 61이 된다.
   * 입력의 첫째 줄에 M이, 둘째 줄에 N이 주어진다.
   */
  const fs = require("fs");
  const [M, N] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  // const [M, N] = [60, 100];
  // const [M, N] = [64, 65];
  const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };
  const primeList = [];
  for (let i = M; i <= N; i++) {
    if (isPrime(i)) {
      primeList.push(i);
    }
  }
  const primeSum = primeList.reduce((acc, cur) => acc + cur, 0);
  const primeMin = Math.min(...primeList);
  if (primeList.length > 0) {
    console.log(primeSum, primeMin);
  } else {
    console.log(-1);
  }
}
// 맞았습니다. 메모리 : 9732KB, 시간 : 208ms
