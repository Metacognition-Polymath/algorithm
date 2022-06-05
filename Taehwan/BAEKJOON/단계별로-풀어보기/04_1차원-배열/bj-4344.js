{
  // 7. 평균은 넘겠지
  /**
   * 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 당신은 그들에게 슬픈 진실을 알려줘야 한다.
   * 첫째 줄에는 테스트 케이스의 개수 C가 주어진다.
   * 둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.
   * 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.
   * 평균값을 구하고 그거보다 높은 점수를 받은 학생의 수를 비율로 표현.
   * 소수점 셋째 자리까지 값이 나오는 경우에는 반올림하여 출력한다.
   */
  const fs = require("fs");
  const [testCase, ...inputs] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  // const inputs = ["5 50 50 70 80 100", "7 100 95 90 80 70 60 50"];
  inputs.forEach((eachLine) => {
    const [n, ...scores] = eachLine.split(" ").map(Number);
    const avg = scores.reduce((acc, cur) => acc + cur, 0) / n;
    const overAvgStudentCount = scores.filter((score) => score > avg).length;
    const ratio = (overAvgStudentCount / n) * 100;
    console.log(`${ratio.toFixed(3)}%`);
  });
}
