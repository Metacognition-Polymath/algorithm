{
  // 1. 손익분기점
  /**
   * 월드전자는 노트북을 제조하고 판매하는 회사이다.
   * 노트북 판매 대수에 상관없이 매년 임대료, 재산세, 보험료, 급여 등 A만원의 고정 비용이 들며,
   * 한 대의 노트북을 생산하는 데에는 재료비와 인건비 등 총 B만원의 가변 비용이 든다고 한다.
   * 예를 들어 A=1,000, B=70이라고 하자.
   * 이 경우 노트북을 한 대 생산하는 데는 총 1,070만원이 들며, 열 대 생산하는 데는 총 1,700만원이 든다.
   * C만원으로 책정되었다고 한다. 일반적으로 생산 대수를 늘려 가다 보면 어느 순간 총 수입(판매비용)이 총 비용(=고정비용+가변비용)보다 많아지게 된다.
   * 최초로 총 수입이 총 비용보다 많아져 이익이 발생하는 지점을 손익분기점(BREAK-EVEN POINT)이라고 한다.
   * A, B, C가 주어졌을 때, 손익분기점을 구하는 프로그램을 작성하시오.
   * 첫 번째 줄에 손익분기점 즉 최초로 이익이 발생하는 판매량을 출력한다. 손익분기점이 존재하지 않으면 -1을 출력한다.
   * 손익분기점(BREAK-EVEN POINT) : 판매 대수
   * A : 고정비용
   * B : 노트북 한대 생산 원가
   * C : 노트북 판매가
   * input : 1000 70 170, output : 11
   * input : 3 2 1, output : -1
   * input : 2100000 9 10, output: 2100001
   */
  // const fs = require("fs");
  // const [A, B, C] = fs
  //   .readFileSync("/dev/stdin")
  //   .toString()
  //   .split(" ")
  //   .map(Number);
  // const [A, B, C] = [1000, 70, 170];
  const [A, B, C] = [3, 2, 1];
  // const [A, B, C] = [2100000, 9, 10];
  function getBreakEvenPoint(A, B, C) {
    const profitPerUnit = C - B;
    if (profitPerUnit <= 0) {
      return -1;
    }
    let breakPoint = 0;
    let totalProfit = profitPerUnit * breakPoint - A;
    while (totalProfit <= 0) {
      breakPoint++;
      totalProfit = profitPerUnit * breakPoint - A;
    }
    return breakPoint;
  }
  console.log(getBreakEvenPoint(A, B, C));
}
{
  // 다른 사람 풀이
  // var n = require("fs")
  //   .readFileSync("/dev/stdin")
  //   .toString()
  //   .trim()
  //   .split(" ")
  //   .map(function (e) {
  //     return parseInt(e);
  //   });
  const n = [1000, 70, 170];

  if (n[2] <= n[1]) {
    console.log(-1);
  } else {
    console.log(Math.floor(n[0] / (n[2] - n[1])) + 1);
  }
}
// 와.. 이렇게도 할 수 있구나
