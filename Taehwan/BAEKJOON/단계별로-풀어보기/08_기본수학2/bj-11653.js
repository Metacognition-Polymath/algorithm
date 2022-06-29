{
  // 3. 소인수 분해
  /**
   * 정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.
   * N의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력한다. N이 1인 경우 아무것도 출력하지 않는다.
   * input : 72
   * output : [2, 2, 2, 3, 3]
   */
  const N = 72;
  // const fs = require("fs");
  // const inputNumberString = fs.readFileSync("/dev/stdin").toString().trim();
  // const N = Number(inputNumberString);
  const getFactorization = (N) => {
    const factorization = [];
    console.log(N);
    for (let i = 2; i <= N; i++) {
      // console.log(N);
      while (N % i === 0) {
        factorization.push(i);
        N /= i;
        // console.log(N);
      }
    }
    return factorization;
  };
  const factorization = getFactorization(N);
  factorization.forEach((factor) => {
    console.log(factor);
  });
}
// 맞았습니다. 메모리: 9892KB, 시간: 252ms
