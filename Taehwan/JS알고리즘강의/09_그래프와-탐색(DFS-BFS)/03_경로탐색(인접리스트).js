/**
 * 경로 탐색(인접 리스트)
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
 * 인접 행렬 : 메모리낭비, 시간복잡도도 높음
 * 인접 리스트
 */
// function solution(n, arr) {
//   let answer = 0;
//   const graph = Array.from(Array(n + 1), () => Array());
//   const ch = Array.from({ length: n + 1 }, () => 0);

//   // 인접 리스트 구하기
//   for (const [a, b] of arr) {
//     graph[a].push(b);
//   }

//   const path = [];

//   function DFS(v) {
//     if (v === n) {
//       answer++;
//       console.log(path);
//     } else {
//       for (let i = 0; i < graph[v].length; i++) {
//         if (ch[graph[v][i]] === 0) {
//           ch[graph[v][i]] = 1;
//           path.push(graph[v][i]);
//           DFS(graph[v][i]);
//           path.pop();
//           ch[graph[v][i]] = 0;
//         }
//       }
//     }
//   }

//   ch[1] = 1;
//   path.push(1);
//   DFS(1);

//   return answer;
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

// function solution(n, arr) {
//   // 1부터 5까지 가는 가지수
//   let count = 0;

//   const graph = Array.from({ length: n + 1 }, () => Array());

//   for (let i = 0; i < arr.length; i++) {
//     const [a, b] = arr[i];
//     graph[a].push(b);
//   }

//   const checkArr = Array(n + 1).fill(0);

//   const target = n;
//   const path = [];
//   /**
//    * @param {number} v
//    */
//   const DFS = (v) => {
//     if (v === target) {
//       count++;
//       console.log(path);
//     } else {
//       for (let i = 0; i < graph[v].length; i++) {
//         if (checkArr[graph[v][i]] === 0) {
//           checkArr[graph[v][i]] = 1;
//           path.push(graph[v][i]);
//           DFS(graph[v][i]);
//           path.pop();
//           checkArr[graph[v][i]] = 0;
//         }
//       }
//     }
//   };

//   checkArr[1] = 1;
//   path.push(1);
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

// 복습 1회차 - 복습
// function solution(n, arr) {
//   const graph = Array.from({ length: n + 1 }, () => []);

//   for (const [a, b] of arr) {
//     graph[a].push(b);
//   }

//   let answer = 0;
//   const path = [];

//   // 해당 노드가 사용됐는지 아닌지 확인하는 체크배열
//   const ch = Array(n + 1).fill(0);

//   const DFS = (a) => {
//     if (a === n) {
//       answer++;
//       console.log(path);
//     } else {
//       for (let i = 0; i < graph[a].length; i++) {
//         if (ch[graph[a][i]] === 0) {
//           ch[graph[a][i]] = 1;
//           path.push(graph[a][i]);
//           DFS(graph[a][i]);
//           path.pop();
//           ch[graph[a][i]] = 0;
//         }
//       }
//     }
//   };

//   ch[1] = 1;
//   path.push(1);
//   DFS(1);

//   return answer;
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

// 복습 1회차 - 스스로 풀어보기
// function solution(n, arr) {
//   // 인접리스트(2차원 배열)
//   const graph = Array.from({ length: n + 1 }, () => []);
//   for (const [a, b] of arr) {
//     graph[a].push(b);
//   }
//   // 체크 배열(1차원 배열)
//   const ch = Array.from({ length: n + 1 }, () => 0);
//   // 경로
//   const path = [];
//   // 경우의 수
//   let answer = 0;

//   // 정점 v 가 들어왔을 때 다음 정점으로 뻣어나가는 DFS
//   const DFS = (v) => {
//     if (v === n) {
//       answer++;
//       console.log("path", path);
//     } else {
//       // 그래프의 각 인접 리스트를 순회하면서 뻣어나감
//       for (let i = 0; i < graph[v].length; i++) {
//         if (ch[graph[v][i]] === 0) {
//           ch[graph[v][i]] = 1;
//           path.push(graph[v][i]);
//           DFS(graph[v][i]);
//           path.pop();
//           ch[graph[v][i]] = 0;
//         }
//       }
//     }
//   };

//   ch[1] = 1;
//   path.push(1);
//   DFS(1);

//   return answer;
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

// 복습 1회차 - 스스로 풀어보기 2회차
function solution(n, arr) {
  // 그래프 == 인접리스트(2차원 배열)
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of arr) {
    graph[a].push(b);
  }

  // 체크배열
  const ch = Array.from({ length: n + 1 }, () => 0);

  // 경로
  const path = [];

  // 경우의 수
  let answer = 0;

  // 인접리스트의 각 정점에서 뻣어나가는 DFS
  const DFS = (v) => {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        if (ch[graph[v][i]] === 0) {
          ch[graph[v][i]] = 1;
          path.push(graph[v][i]);
          DFS(graph[v][i]);
          path.pop();
          ch[graph[v][i]] = 0;
        }
      }
    }
  };

  ch[1] = 1;
  path.push(1);
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
