{
  // 3. 한수
  /**
   * 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다.
   * 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다.
   * N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오.
   * 1, ..., 99, 111, 123, 135, 147, 159, 210
   * 첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.
   * 첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.
   */
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim();
  const endOfRange = Number(input);
  // const endOfRange = 500;
  // 한수인지 체크하는 함수
  const isHansu = (num) => {
    const numStr = num.toString();
    const diff = Number(numStr[1]) - Number(numStr[0]);
    for (let i = 1; i < numStr.length; i++) {
      if (numStr[i] - numStr[i - 1] !== diff) {
        return false;
      }
    }
    return true;
  };
  let count = 0;
  for (let i = 1; i <= endOfRange; i++) {
    if (isHansu(i)) {
      count++;
    }
  }
  console.log(count);
}
