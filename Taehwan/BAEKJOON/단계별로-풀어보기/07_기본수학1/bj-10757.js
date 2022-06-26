{
  // 8. 큰 수 A+B
  /**
   * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
   * 첫째 줄에 A와 B가 주어진다. (0 < A,B < 1010000)
   * 첫째 줄에 A+B를 출력한다.
   */
  const fs = require("fs");
  const [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
  // const [A, B] = ["9223372036854775807", "9223372036854775808"];
  // console.log(A + B);
  const arrA = A.split("").map(Number);
  const arrB = B.split("").map(Number);
  let carry = 0;
  const getSum = (arrA, arrB) => {
    const reversedArrA = arrA.reverse();
    const reversedArrB = arrB.reverse();
    const lengthA = arrA.length;
    const lengthB = arrB.length;
    const loopLength = Math.max(lengthA, lengthB);
    const sum = [];
    for (let i = 0; i < loopLength; i++) {
      const a = reversedArrA[i] || 0;
      const b = reversedArrB[i] || 0;
      if (i !== loopLength - 1) {
        // 마지막 자리수가 아닐 때
        const eachSum = a + b + carry;
        sum.push(eachSum % 10);
        carry = Math.floor(eachSum / 10);
      } else {
        // 마지막 자리수일 때
        const eachSum = a + b + carry;
        sum.push(eachSum);
      }
    }
    return sum.reverse().join("");
  };
  console.log(getSum(arrA, arrB));
}
// 맞았습니다. 10808KB, 184ms
{
  // 다른 사람 풀이
  const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");

  let A = BigInt(input[0]);
  let B = BigInt(input[1]);

  console.log((A + B).toString());
}
// 콘솔에서 빅인트로 하니까 정확하게 안나오던데 여기선 나오나보네 ..
