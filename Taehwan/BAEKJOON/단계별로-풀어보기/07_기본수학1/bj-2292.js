{
  // 2. 벌집
  /**
   * 위의 그림과 같이 육각형으로 이루어진 벌집이 있다.
   * 중앙의 방 1부터 시작해서 이웃하는 방에 돌아가면서 1씩 증가하는 번호를 주소로 매길 수 있다.
   * 숫자 N이 주어졌을 때, 벌집의 중앙 1에서 N번 방까지 최소 개수의 방을 지나서 갈 때 몇 개의 방을 지나가는지(시작과 끝을 포함하여)를 계산하는 프로그램을 작성하시오.
   * 예를 들면, 13까지는 3개, 58까지는 5개를 지난다.
   * 처음 시작하는 방(1번방) 포함하여 지나온 방의 수를 출력한다.
   * input : 13
   * output : 3
   * 1 -> 13 : 1 -> 4 -> 13
   * 1, 4, 13, 28, 49
   *  3, 9, 15, 21
   *   6,  6,  6
   * 1 -> 59 : 1 -> 6 -> 18 -> 35 -> 59
   */
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim();
  // const input = "58";
  const inputNumber = Number(input);
  // 그룹화 해보자
  // 1번 그룹 : [1]
  // 2번 그룹 : [2, 3, 4, 5, 6, 7]
  // 3번 그룹 : [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  // 4번 그룹 : [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37]
  // const groups = {
  //   0: [1],
  //   1: [2, 3, 4, 5, 6, 7],
  //   2: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  //   3: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
  //   4: [
  //     38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
  //     56, 57, 58, 59, 60, 61,
  //   ],
  // };
  // console.log(groups[1].length); // 2~7
  // console.log(groups[2].length); // 8~19
  // console.log(groups[3].length); // 20~37
  // console.log(groups[4].length); // 38~61
  // console.log(groups[3][groups[3].length - 1]);

  // const groupList = [
  //   [1],
  //   [2, 7],
  //   [8, 19],
  //   [20, 37],
  //   [38, 61],
  // ]
  // 각 그룹의 첫 번째 수 : groups[i][0]
  // 각 그룹의 마지막 수 : groups[i][groups[i].length - 1]

  const groupCountTerm = 6;
  function getInputGroup(inputNumber, groupCountTerm) {
    if (inputNumber <= 1) {
      return 1;
    }
    let stepCount = 2;
    const firstGroupLastNumber = 1;
    let currentTerm = groupCountTerm; // 6, 12, 18
    let currentLastNumber = firstGroupLastNumber + currentTerm; // 7, 19, 37
    // console.log(currentLastNumber);
    // inputNumber가 마지막 그룹의 마지막 수 보다 작거나 같을 때 까지 반복
    while (inputNumber > currentLastNumber) {
      stepCount++;
      // console.log(stepCount);
      currentTerm += groupCountTerm;
      currentLastNumber += currentTerm;
    }
    return stepCount;
  }

  console.log(getInputGroup(inputNumber, groupCountTerm));
}

{
  // 다른 사람 풀이
  const fs = require("fs");
  const input = Number(fs.readFileSync("/dev/stdin").toString());

  let range = 1;
  let block = 1;

  while (block < input) {
    block += 6 * range;

    range++;
  }

  console.log(range);
}
// 다들 비슷하게 풀은 것 같다
