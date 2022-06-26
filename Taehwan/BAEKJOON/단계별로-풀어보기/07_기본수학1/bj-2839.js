{
  // 7. 설탕배달
  /**
   * 상근이는 지금 사탕가게에 설탕을 정확하게 N킬로그램을 배달해야 한다.
   * 설탕공장에서 만드는 설탕은 봉지에 담겨져 있다.
   * 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.
   * 상근이는 귀찮기 때문에, 최대한 적은 봉지를 들고 가려고 한다.
   * 예를 들어, 18킬로그램 설탕을 배달해야 할 때, 3킬로그램 봉지 6개를 가져가도 되지만, 5킬로그램 3개와 3킬로그램 1개를 배달하면, 더 적은 개수의 봉지를 배달할 수 있다.
   * 상근이가 설탕을 정확하게 N킬로그램 배달해야 할 때, 봉지 몇 개를 가져가면 되는지 그 수를 구하는 프로그램을 작성하시오.
   * 상근이가 배달하는 봉지의 최소 개수를 출력한다. 만약, 정확하게 N킬로그램을 만들 수 없다면 -1을 출력한다.
   */
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim();
  const N = Number(input);
  // const N = 11; // 3
  // 1. 5로 나누어 떨어지면 그 몫
  // 2. 5로 나누어 떨어지지 않으면 5를 한번씩 빼면서 3으로 나누어 떨어지는지 반복해서 확인
  const getMinSugarBagCount = (N) => {
    const remainderBy5 = N % 5;
    const quotientBy5 = Math.floor(N / 5);
    if (remainderBy5 === 0) {
      return quotientBy5;
    }

    // 5로 나누어 떨어지지 않는 경우
    let bag5 = 0;
    let bag3 = 0;
    let leftWeight = N;
    while (leftWeight > 0) {
      leftWeight -= 3;
      bag3++;
      const remainderBy5 = leftWeight % 5;
      const quotientBy5 = Math.floor(leftWeight / 5);
      if (remainderBy5 === 0) {
        bag5 += quotientBy5;
        leftWeight = 0;
        break;
      }
    }

    if (leftWeight !== 0) {
      return -1;
    }
    return bag5 + bag3;
  };

  console.log(getMinSugarBagCount(N));
}
// 맞았습니다. 9340KB, 128ms
{
  // 다른 사람 풀이
  function solve() {
    let fs = require("fs");
    let input = Number(fs.readFileSync("/dev/stdin").toString());
    let count = 0;
    while (true) {
      if (input % 5 === 0) {
        console.log(count + input / 5);
        break;
      }
      if (0 > input) {
        console.log(-1);
        break;
      }
      count++;
      input -= 3;
    }
  }
  solve();
}
// 같은 방식으로 풀었다
