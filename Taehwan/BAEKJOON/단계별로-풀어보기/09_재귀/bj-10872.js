{
  // 1. 팩토리얼
  /**
   * 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.
   * input : 10
   * output : 3628800
   */
  // const N = 10;
  const fs = require("fs");
  const inputNumberString = fs.readFileSync("/dev/stdin").toString().trim();
  const N = Number(inputNumberString);
  const factorial = (N) => {
    if (N === 0) return 1;
    return N * factorial(N - 1);
  };
  console.log(factorial(N));
}
// 맞았습니다. 메모리 : 9592KB, 시간 : 120ms
