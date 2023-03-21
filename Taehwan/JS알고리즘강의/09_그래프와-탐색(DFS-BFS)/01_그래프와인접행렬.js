/**
 * 경로 탐색(인접 행렬)
 *
 * 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프로그램을 작성하세요
 * 아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지수는
 * 12345
 * 125
 * 13425
 * 1345
 * 1425
 * 145
 *
 * 총 6가지 입니다
 */
/**
 * @param {number} n
 * @param {number[]} arr
 */
// function solution(n, arr) {
//   // 1. 인접행렬로 그래프를 저장
//   // const graph = Array(n + 1).fill(Array(n + 1).fill(0)); // 2차원에선 적용 안되네
//   const graph = Array.from({ length: n + 1 }, () =>
//     Array.from({ length: n + 1 }, () => 0)
//   );

//   for (const [a, b] of arr) {
//     graph[a][b] = 1;
//   }

//   // 2. DFS로 순회하면서 모든 경로를 탐색
//   let count = 0;
//   const checkArr = Array.from({ length: n + 1 }, () => 0);
//   const tempArr = [];
//   const DFS = (vertex) => {
//     if (vertex === 5) {
//       count++;
//       console.log(tempArr);
//     } else {
//       for (let i = 1; i <= n; i++) {
//         if (checkArr[i] === 0 && graph[vertex][i] === 1) {
//           checkArr[i] = 1;
//           tempArr.push(i);
//           DFS(i);
//           checkArr[i] = 0;
//           tempArr.pop();
//         }
//       }
//     }
//   };

//   tempArr.push(1);
//   checkArr[1] = 1;
//   DFS(1);

//   return count;
// }

// let arr = [
//   [1, 2],
//   [1, 3],
//   [1, 4],
//   [2, 1],
//   [2, 3],
//   [2, 5],
//   [3, 4],
//   [4, 2],
//   [4, 5],
// ];
// console.log(solution(5, arr));

// 강의 풀이
function solution(n, arr) {
  let answer = 0;
  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  const ch = Array.from({ length: n + 1 }, () => 0);

  // 인접 행렬 구하기
  for (const [a, b] of arr) {
    graph[a][b] = 1;
  }

  function DFS(v) {
    if (v === n) answer++;
    else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          DFS(i);
          ch[i] = 0;
        }
      }
    }
  }

  ch[1] = 1;
  DFS(1);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
