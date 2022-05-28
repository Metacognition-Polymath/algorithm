{
  // 1 - 2739 - 구구단
  /**
   * N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.
   */
  // const fs = require("fs");
  // const input = fs.readFileSync("/dev/stdin").toString();
  // const n = parseInt(input);
  // for(let i = 0; i < 9; i++) {
  //   console.log(`${n} * ${i+1} = ${n*(i+1)}`);
  // }
}
{
  // 2 - 10950 => A + B -3
  /**
   * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
   */
  // A + B를 출력하는데 하나라도 없으면 출력을 안하는 것 같다
  // const fs = require("fs");
  // const input = fs.readFileSync("/dev/stdin").toString();
  // // const input = `7\n5 3\n4 2\n1 6`;
  // const lines = input.split("\n");
  // lines.forEach(line => {
  //   const [a, b] = line.split(" ").map(Number);
  //   if (Number.isNaN(a+b)) {
  //     return;
  //   }
  //   console.log(a + b);
  // })
}
{
  // 3 - 8393 : 합
  /**
   * n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
   */
  // const fs = require("fs");
  // const input = fs.readFileSync("/dev/stdin").toString();
  // const n = parseInt(input);
  // // 방법 1
  // // let sum = 0;
  // // for(let i = 1; i <= n; i++) {
  // //   sum += i;
  // // }
  // // console.log(sum);

  // // 방법 2
  // const sum = Array(n).fill(1).reduce((acc, cur, idx) => acc + idx + 1, 0);
  // console.log(sum);
}
{
  // 5 - 2741 : N 찍기
  /**
   * 1 ~ N 까지 한줄에 하나씩
   */
  // const fs = require("fs");
  // const input = fs.readFileSync("/dev/stdin").toString();
  // const n = parseInt(input);
  // const n = 5;
  // for(let i = 1; i <= n; i++) {
  //   console.log(i);
  // }
  // 시간초과
}
{
  // 6 - 2742 : 기찍 N
  /**
   * 자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
   */
  // const fs = require("fs");
  // const input = fs.readFileSync("/dev/stdin").toString();
  // const n = parseInt(input);
  // for(let i = n; i >= 1; i--) {
  //   console.log(i);
  // }
  // 시간 초과
}
{
  // 9 - 2438 : 별 찍기
  // 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
  // const fs = require("fs");
  // const input = fs.readFileSync("/dev/stdin").toString();
  // const n = parseInt(input);
  // for(let i = 1; i <= n; i++) {
  //   console.log("*".repeat(i));
  // }
}
{
  // 10 - 2439 : 공백 + 별찍기
  /**
    첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
    하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.
   */
  // const fs = require("fs");
  // const input = fs.readFileSync("/dev/stdin").toString();
  // const n = parseInt(input);
  // for(let i = 1; i <= n; i++) {
  //   console.log(" ".repeat(n-i) + "*".repeat(i));
  // }
}
{
  // 11 - 10871 : X보다 작은 수
  /**
   * // 문제
   * 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.
   * // 입력
   * 첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000)
    둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.
   */
  // const fs = require("fs");
  // const input = fs.readFileSync("/dev/stdin").toString();
  // const [firstLine, secondLine] = input.split("\n");
  // const [n, x] = firstLine.split(" ").map(Number);
  // const arr = secondLine.split(" ").map(Number);
  // arr.filter(num => num < x).forEach(num => console.log(num));
}
{
  // 14 - 1110 : 더하기 사이클
  /**
   * 0보다 크거나 같고, 99보다 작거나 같은 정수가 주어질 때 다음과 같은 연산을 할 수 있다.
   * 먼저 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고, 각 자리의 숫자를 더한다.
   * 그 다음, 주어진 수의 가장 `오른쪽 자리 수`와 앞에서 구한 합의 가장 `오른쪽 자리 수`를 이어 붙이면
   * 새로운 수를 만들 수 있다.
   * 다음 예를 보자.
   * 26부터 시작한다. 2+6 = 8이다.
   * 새로운 수는 68이다. 6+8 = 14이다.
   * 새로운 수는 84이다. 8+4 = 12이다.
   * 새로운 수는 42이다. 4+2 = 6이다.
   * 새로운 수는 26이다.
   * 위의 예는 4번만에 원래 수로 돌아올 수 있다. 따라서 26의 사이클의 길이는 4이다.
   * N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.
   */
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString();
  const n = parseInt(input);
  // const n = 26;
  function getCount(n) {
    let count = 0;
    let numStr = String(n);
    while (true) {
      count++;
      let num = Number(numStr);
      if (num < 10) {
        numStr = "0" + numStr;
      }
      numStr = numStr[1] + String((Number(numStr[0]) + Number(numStr[1]))%10);
      // console.log('numStr at the end', numStr);
      if (Number(numStr) === n) {
        break;
      }
    }
    console.log(count);
  }
  getCount(n);
  // 시간 초과
}