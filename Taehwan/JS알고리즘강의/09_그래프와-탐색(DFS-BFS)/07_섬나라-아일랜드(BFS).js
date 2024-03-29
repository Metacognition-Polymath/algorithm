/**
 * 섬나라 아일랜드(DFS 활용)
 * N*N의 섬나라 아일랜드의 지도가 격자판의 정보로 주어집니다.
 * 각 섬은 1로 표시되어 상하좌 우와 대각선으로 연결되어 있으며, 0은 바다입니다.
 * 섬나라 아일랜드에 몇 개의 섬이 있는지 구하는 프로그램을 작성하세요.
 * 1 1 0 0 0 1 0
 * 0 1 1 0 1 1 0
 * 0 1 0 0 0 0 0
 * 0 0 0 1 0 1 1
 * 1 1 0 1 1 0 0
 * 1 0 0 0 1 0 0
 * 1 0 1 0 1 0 0

▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=20)이 주어집니다. 두 번째 줄부터 격자판 정보가 주어진다.

▣ 출력설명
첫 번째 줄에 섬의 개수를 출력한다.
 */

/**
 * 강의 해설
 * 대각선연결까지 포함이므로 8방향을 모두 봐야 합니다
 * 탐색 시 경계조건안에서 탐색하도록 하고
 * 왔던 길은 0으로 바꿔서 왔던 길은 다시 탐색하지 않도록 한다
 */
/**
 * @param {number[][]} board
 */
// function solution(board) {
//   let answer = 0;
//   let n = board.length;
//   /**
//    * 방향 : 좌표
//    * 12시 : -1, 0
//    *  1시 : -1, 1
//    *  3시 : 0, 1
//    *  5시 : 1, 1
//    *  6시 : 1, 0
//    *  7시 : 1, -1
//    *  9시 : 0, -1
//    * 11시 : -1, -1
//    */
//   let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
//   let dy = [0, 1, 1, 1, 0, -1, -1, -1];

//   const queue = [];

//   // 맵의 모든 칸을 탐색(n * n) -> 2중 for문
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       // 섬인 경우에 탐색 시작 : board[i][j] === 1
//       if (board[i][j] === 1) {
//         // 한번 탐색한 곳은 0으로 표시하여 다시 탐색하지 않도록 함
//         board[i][j] = 0;
//         queue.push([i, j]); // BFS를 위해 큐에 넣음
//         answer++;
//         while (queue.length) {
//           let [x, y] = queue.shift(); // BFS 큐에서 꺼내서 현재 위치를 가져옴
//           console.log(x, y);
//           for (let k = 0; k < 8; k++) {
//             // 상하좌우 + 대각선 => 8방향 탐색 시작
//             let nx = x + dx[k]; // 다음 행
//             let ny = y + dy[k]; // 다음 열
//             if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
//               // 다음행과 다음열이 맵안에 존재하고 다음 위치가 섬일 때 탐색을 위한 BFS 큐에 넣음
//               board[nx][ny] = 0; // 큐에 넣기전에 해당 위치는 탐색한 곳이라고 표시
//               queue.push([nx, ny]); // BFS 큐에 넣어서 다음 탐색을 가능하게 함
//             }
//           }
//         }
//         console.log("BFS end");
//       }
//     }
//   }

//   return answer;
// }

// const arr = [
//   [1, 1, 0, 0, 0, 1, 0],
//   [0, 1, 1, 0, 1, 1, 0],
//   [0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0, 1, 1],
//   [1, 1, 0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 1, 0, 0],
//   [1, 0, 1, 0, 1, 0, 0],
// ];

// console.log(solution(arr));

// BFS 방식으로 혼자 풀어보기
// function solution(board) {
//   let answer = 0;
//   let n = board.length;
//   /**
//    * 방향 : 좌표
//    * 12시 : -1, 0
//    *  1시 : -1, 1
//    *  3시 : 0, 1
//    *  5시 : 1, 1
//    *  6시 : 1, 0
//    *  7시 : 1, -1
//    *  9시 : 0, -1
//    * 11시 : -1, -1
//    */
//   let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
//   let dy = [0, 1, 1, 1, 0, -1, -1, -1];

//   const queue = [];

//   // 맵의 모든 위치 탐색
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (board[i][j] === 1) {
//         board[i][j] = 0; // BFS 큐에 넣기전에 탐색한 곳이라고 체크
//         queue.push([i, j]);
//         answer++;
//         while (queue.length) {
//           const [x, y] = queue.shift(); // 현재 위치
//           for (let k = 0; k < dx.length; k++) {
//             // 상하좌우 + 대각선
//             const nx = x + dx[k];
//             const ny = y + dy[k];
//             // 맵의 범위 안에 있고 다음 탐색 위치가 섬인 경우에만 뻣어나감
//             if (nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] === 1) {
//               board[nx][ny] = 0;
//               queue.push([nx, ny]);
//             }
//           }
//         }
//       }
//     }
//   }

//   return answer;
// }

// const arr = [
//   [1, 1, 0, 0, 0, 1, 0],
//   [0, 1, 1, 0, 1, 1, 0],
//   [0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0, 1, 1],
//   [1, 1, 0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 1, 0, 0],
//   [1, 0, 1, 0, 1, 0, 0],
// ];

// console.log(solution(arr));

// 복습 1회차
function solution(board) {
  let islandCount = 0;

  // BFS queue
  const queue = [];

  // 이동 가능한 방향
  /**
   * 12시 : -1, 0
   *  1시 : -1, 1
   *  3시 : 0, 1
   *  5시 : 1, 1
   *  6시 : 1, 0
   *  7시 : 1, -1
   *  9시 : 0, -1
   * 11시 : -1, -1
   */
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  // 모든 공간 순회
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0; // 밟은 땅은 체크
        queue.push([i, j]);
        islandCount++;

        // BFS 시작
        while (queue.length) {
          const [x, y] = queue.shift();
          for (let k = 0; k < dx.length; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];

            if (
              nx >= 0 &&
              ny >= 0 &&
              nx < board.length &&
              ny < board.length &&
              board[nx][ny] === 1
            ) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }

  return islandCount;
}

const arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
