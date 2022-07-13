{
  // 구간 합 구하기 4
  /**
   * 수 N개가 주어졌을 때, i번째 수부터 j번째 수까지 합을 구하는 프로그램을 작성하시오.
   * 첫째 줄에 수의 개수 N과 합을 구해야 하는 횟수 M이 주어진다.
   * 둘째 줄에는 N개의 수가 주어진다.
   * 셋째 줄부터 M개의 줄에는 합을 구해야 하는 구간 i와 j가 주어진다.
   * 총 M개의 줄에 입력으로 주어진 i번째 수부터 j번째 수까지 합을 출력한다.
   */
  // const inputs = `
  // 5 3
  // 5 4 3 2 1
  // 1 3
  // 2 4
  // 5 5`;
  // const numbers = [5, 4, 3, 2, 1];
  // const fromToArr = [
  //   [1, 3],
  //   [2, 4],
  //   [5, 5],
  // ];
  const fs = require("fs");
  const inputs = fs.readFileSync("/dev/stdin").toString().trim();
  const [firstLine, numbersString, ...fromToArrString] = inputs.split("\n");
  const numbers = numbersString.split(" ").map(Number);
  const fromToArr = fromToArrString.map((item) => item.split(" ").map(Number));

  const getSumFromTo = (numbers, fromTo) => {
    const [from, to] = fromTo;
    const sum = numbers.slice(from - 1, to).reduce((acc, cur) => acc + cur);
    return sum;
  };
  fromToArr.forEach((fromTo) => {
    console.log(getSumFromTo(numbers, fromTo));
  });
}

{
  // 다른 사람 풀이
  const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  const arr = input[1].split(" ").map((v) => +v);
  const cumsum = new Array(arr.length + 1).fill(0);
  const output = [];

  arr.forEach((v, i) => {
    cumsum[i + 1] = cumsum[i] + v;
  });

  input.slice(2).forEach((ij) => {
    const [i, j] = ij.split(" ").map((v) => +v);
    output.push(cumsum[j] - cumsum[i - 1]);
  });

  console.log(output.join("\n"));
}
