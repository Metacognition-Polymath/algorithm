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
