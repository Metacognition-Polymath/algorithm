/**
 * 문제
 * N개의 평면상의 좌표(x, y)가 주어지면
 * 모든 좌표를 오름차순으로 정렬하는 프로그램을 작성하 세요.
 * 정렬기준은 먼저 x값의 의해서 정렬하고,
 * x값이 같을 경우 y값에 의해 정렬합니다.
 */
// /**
//  * 내 풀이
//  * @param {number[][]} arr
//  * @returns {number[][]}
//  */
// function solution(arr) {
//   const answer = [...arr];
//   return answer.sort((a, b) => {
//     const [xa, ya] = a;
//     const [xb, yb] = b;
//     if (xa === xb) {
//       return ya - yb;
//     }
//     return xa - xb;
//   });
// }

/**
 * 강의 해설
 * 이 문제는 이 다음에 나올 회의실 배정에서 사용할 그리디 같은 것을 이해하기 위해 풀어보는 문제입니다
 */
function solution(arr) {
  let answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  return answer;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
