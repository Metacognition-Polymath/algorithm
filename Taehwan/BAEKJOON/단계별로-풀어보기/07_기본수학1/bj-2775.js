{
  // 6. 부녀회장이 될테야
  /**
   * 이 아파트에 거주를 하려면 조건이 있는데,
   * a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다
   * 아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정했을 때,
   * 주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력하라.
   * 단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.
   * 첫 번째 줄에 Test case의 수 T가 주어진다. 그리고 각각의 케이스마다 입력으로 첫 번째 줄에 정수 k, 두 번째 줄에 정수 n이 주어진다
   */
  // {floor: k, roomNumber: n} => k + n(n+1)/2
  // const fsRead = require("fs").readFileSync("/dev/stdin");
  const fsRead = `2
  1
  3
  2
  3`;
  const [testCaseCount, ...testCases] = fsRead
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  const testCaseFloorArr = testCases.filter(
    (testCase, index) => index % 2 === 0
  );
  const testCaseRoomNumberArr = testCases.filter(
    (testCase, index) => index % 2 !== 0
  );
  const testCaseArr = testCaseFloorArr.map((testCaseFloor, index) => ({
    floor: testCaseFloor,
    roomNumber: testCaseRoomNumberArr[index],
  }));
  // console.log(testCaseArr);
  // const k = 2;
  // const n = 3;
  function getNumberOfPeople(k, n) {
    const peopleNumberArray = Array(k + 1)
      .fill(1)
      .map((item) => Array(n).fill(1));
    // console.log(peopleNumberArray);
    for (let i = 0; i <= k; i++) {
      for (let j = 1; j < n; j++) {
        if (i === 0) {
          peopleNumberArray[i][j] = j + 1;
        } else {
          peopleNumberArray[i][j] =
            peopleNumberArray[i - 1][j] + peopleNumberArray[i][j - 1];
          // console.log(peopleNumberArray[i][j]);
        }
      }
    }
    return peopleNumberArray[k][n - 1];
  }
  // console.log(peopleNumberArray);
  // console.log(getNumberOfPeople(k, n));
  testCaseArr.forEach((testCase) => {
    console.log(getNumberOfPeople(testCase.floor, testCase.roomNumber));
  });
}
// 맞았습니다. 메모리 : 10004KB, 시간 : 132ms

{
  // 다른 사람 풀이
  var fs, input, tests, memo;
  fs = require("fs");
  input = fs.readFileSync("/dev/stdin").toString().split("\n");

  var memo = [];
  function result(k, n) {
    memo[k] = memo[k] || [];
    if (k === 0 || n === 1) {
      memo[k][n - 1] = n;
    } else {
      memo[k][n - 1] = memo[k][n - 1] || result(k - 1, n) + result(k, n - 1);
    }
    return memo[k][n - 1];
  }

  tests = parseInt(input[0]);
  for (var i = 1; i <= tests; i++) {
    var row, col;
    row = parseInt(input[2 * i - 1]);
    col = parseInt(input[2 * i]);

    console.log(result(row, col));
  }
}
// 똑같이 풀었다
