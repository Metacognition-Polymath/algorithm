{
  // 수 정렬하기
  // 오름차순으로 정렬, 중복 제거
  // const fs = require("fs");
  // const inputs = fs.readFileSync("/dev/stdin").toString().trim();
  const inputs = `5
  5 
  2 
  3
  4
  1`;
  const inputArr = inputs.split("\n").map(Number);

  // input Arr 중복제거
  const inputArrUnique = [...new Set(inputArr)];
  // console.log(inputArrUnique);

  // inputArrUnique 오름차순으로 정렬
  const inputArrUniqueSorted = inputArrUnique.sort((a, b) => a - b);
  inputArrUniqueSorted.forEach((item) => console.log(item));
}
