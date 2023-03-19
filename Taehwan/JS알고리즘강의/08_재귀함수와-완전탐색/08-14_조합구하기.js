/**
 * 1부터N까지번호가적힌구슬이있습니다.이중 M개를뽑는방법의수를출력하는프로그 램을 작성하세요.
 */

/**
 * 강의해설
 * D(level, startNumber)
 * D(0, 1)
 * D(1, 2) // startNumber += 1
 * D(2, 3), D(2, 4)
 */
/**
 * @param {number} n 1~n 까지 적힌 구슬
 * @param {number} m m개를 뽑는다
 */
// function solution(n, m) {
//   let answer = [];
//   let tmp = Array.from({ length: m }, () => 0);
//   // const tmp = [];
//   function DFS(L, s) {
//     if (L === m) {
//       answer.push(tmp.slice());
//     } else {
//       for (let i = s; i <= n; i++) {
//         tmp[L] = i;
//         // tmp.push(i);
//         DFS(L + 1, i + 1);
//         // tmp.pop();
//       }
//     }
//   }
//   DFS(0, 1);
//   return answer;
// }

// console.log(solution(4, 2));

// 순열 요소 구하기 복습 2회차
// function solution(n, m) {
//   const answer = [];
//   const tempCombination = Array(m).fill(0);
//   const DFS = (level, start) => {
//     if (level === m) {
//       answer.push([...tempCombination]);
//     } else {
//       for (let i = start; i <= n; i++) {
//         tempCombination[level] = i;
//         // DFS(level + 1, start + 1); // wrong !!
//         DFS(level + 1, i + 1);
//       }
//     }
//   };
//   DFS(0, 1);
//   return answer;
// }

// console.log(solution(4, 2));

function solution(n, m) {
  // 0. 어떤 규칙이 있는지 파악하기
  // 1. DFS가 for문을 돌 때 현재 시작 인덱스보다 큰 숫자부터 돌아야 한다
  const answer = [];
  const tempArr = Array(m).fill(0);
  const DFS = (level, start) => {
    if (level === m) {
      answer.push([...tempArr]);
    } else {
      for (let i = start; i <= n; i++) {
        tempArr[level] = i;
        DFS(level + 1, i + 1); // 시작 인덱스보다 큰 숫자부터 돌아야 한다
      }
    }
  };
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));
