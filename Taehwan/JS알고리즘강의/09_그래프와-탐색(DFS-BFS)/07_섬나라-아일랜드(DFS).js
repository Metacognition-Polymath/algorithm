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

//   // 연결된 모든 지점을 탐색했다고 표시하는 DFS 함수
//   function DFS(x, y) {
//     board[x][y] = 0; // 방문한 곳은 0으로 바꾸기
//     for (let k = 0; k < 8; k++) {
//       // 동서남북 + 대각선 => 8방향 탐색
//       let nx = x + dx[k];
//       let ny = y + dy[k];
//       if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
//         // 맵의 범위 안에 있고 다음 좌표가 섬인 경우 뻣어나감
//         DFS(nx, ny);
//       }
//     }
//   }

//   // 맵의 모든 지점 탐색
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (board[i][j] === 1) {
//         // 섬인 경우 해당 위치 기준 연결된 모든 지점을 탐색하는 DFS 함수를 실행
//         answer++; // 섬을 발견했으니 카운트 횟수를 올림
//         DFS(i, j);
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

// DFS 방식으로 혼자서 풀어보기
function solution(board) {
  let answer = 0;
  let n = board.length;
  /**
   * 방향 : 좌표
   * 12시 : -1, 0
   *  1시 : -1, 1
   *  3시 : 0, 1
   *  5시 : 1, 1
   *  6시 : 1, 0
   *  7시 : 1, -1
   *  9시 : 0, -1
   * 11시 : -1, -1
   */
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  // 해당 위치를 기준으로 연결된 모든 섬을 찾는 DFS 함수
  const DFS = (x, y) => {
    // 상하좌우 + 대각선 => 8방향 탐색 시작
    for (let k = 0; k < 8; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      // 다음 좌표가 맵 안에 존재하고, 다음 좌표의 값이 섬인 경우에 DFS를 뻣어나감
      if (nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] === 1) {
        board[nx][ny] = 0; // 뻣기 전에 해당 지점은 탐색한 곳이라고 표시
        DFS(nx, ny);
      }
    }
  };

  // 맵의 모든 지점을 탐색
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        answer++;
        board[i][j];
        DFS(i, j);
      }
    }
  }

  console.log("DFS");
  return answer;
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
