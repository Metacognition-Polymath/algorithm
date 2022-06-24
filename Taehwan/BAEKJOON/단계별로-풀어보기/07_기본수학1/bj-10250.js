{
  // 5. ACM 호텔
  // 백준 10250번 문제
  // https://www.acmicpc.net/problem/10250
  const fs = require("fs");
  const inputs = fs
    .readFileSync("/dev/stdin", "utf8")
    .toString()
    .split("\n")
    .trim();
  // const inputs = ["2", "6 12 10", "30 50 72"];
  const [testCaseCount, ...testCases] = inputs;
  const testCasesArray = testCases.map((testCase) => {
    const [floor, room, nth] = testCase.split(" ").map(Number);
    return { floor, room, nth };
  });
  // console.log(testCasesArray);

  function getRoomNumber(nThVisitor, floorCount) {
    const room = Math.floor(nThVisitor / floorCount) + 1;
    const floor = nThVisitor % floorCount;
    // 두자리 숫자로 변환
    const convertNumber = (number) => {
      return number < 10 ? `0${number}` : `${number}`;
    };
    return `${floor}${convertNumber(room)}`;
  }

  testCasesArray.forEach((item) => {
    console.log(getRoomNumber(item.nth, item.floor));
  });

  // console.log(getRoomNumber(10, 6));
}
// 테스트 케이스는 통과 되지만 왜인지 틀렸다고 나옴

{
  // 다른 사람 풀이
  // https://velog.io/@dragoocho/%EB%B0%B1%EC%A4%80-10250%EB%B2%88-Node.js-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4
  const fs = require("fs");
  const [n, ...arr] = (
    process.platform === "linux"
      ? fs.readFileSync("/dev/stdin").toString()
      : `2
6 12 10
30 50 72`
  )
    .trim()
    .split("\n");

  let nArrNumber = Number(n);
  let newArr = arr.map((e) => e.split(" "));
  let nAnswer = "";

  for (let i = 0; i < nArrNumber; i++) {
    let H = newArr[i][0],
      N = newArr[i][2];

    let answerH = N % H;
    if (answerH === 0) {
      answerH = H;
    }

    let answerW = Math.ceil(N / H);
    answerW < 10 ? (answerW = String(0) + answerW) : answerW;

    nAnswer += `${answerH}${answerW}` + "\n";
  }

  console.log(nAnswer);
}
// 나랑 같은 방법으로 풀었다
