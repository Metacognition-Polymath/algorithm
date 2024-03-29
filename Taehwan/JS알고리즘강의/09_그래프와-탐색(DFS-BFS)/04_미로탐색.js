/**
 * 미로탐색(DFS)
7*7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하세요. 
출발점은 격 자의 (1, 1) 좌표이고, 탈출 도착점은 (7, 7)좌표이다. 
격자판의 1은 벽이고, 0은 통로이다. 
격 자판의 움직임은 상하좌우로만 움직인다. 
미로가 다음과 같다면 
위의 지도에서 출발점에서 도착점까지 갈 수 있는 방법의 수는 8가지이다.
▣ 입력설명
7*7 격자판의 정보가 주어집니다.
▣ 출력설명
첫 번째 줄에 경로의 가지수를 출력한다.
▣ 입력예제
0 0 0 0 0 0 0 
0 1 1 1 1 1 0 
0 0 0 1 0 0 0 
1 1 0 1 0 1 1 
1 1 0 0 0 0 1 
1 1 0 1 1 0 0 
1 0 0 0 0 0 0
▣ 출력예제
8
 */
// function solution(board) {
//   let answer = 0;
//   /**
//    * D(0,0) 을 기준으로 4 방향으로 가는 각각의 경우
//    * D(-1,0), D(0,1), D(1,0), D(0,-1)
//    * 위 4경우를 각각 방향으로 정리
//    * => dx : D(-1,0)에서 x인 -1, D(0,1)에서 x인 0, ...
//    * dx = [-1,0,1,0]
//    * dy = [0,1,0,-1]
//    */
//   let dx = [-1, 0, 1, 0];
//   let dy = [0, 1, 0, -1];
//   const path = [];
//   function DFS(x, y) {
//     if (x === 6 && y === 6) {
//       answer++;
//       console.log(path);
//     } else {
//       for (let k = 0; k < 4; k++) {
//         let nx = x + dx[k]; // 다음 x좌표
//         let ny = y + dy[k]; // 다음 y좌표
//         if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
//           // 경계 조건 안에 있을 때만 뻣어나가도록 함 : nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6
//           // 그리고 갈 수 있는 곳으로만 뻣어나가도록 함 : board[nx][ny] === 0
//           board[nx][ny] = 1; // 지나간 곳은 못가는 곳이라고 체크
//           path.push([nx, ny]);
//           DFS(nx, ny);
//           path.pop();
//           board[nx][ny] = 0; // 다시 백할 땐 지나갈 수 있는 곳이라고 체크
//         }
//       }
//     }
//   }
//   board[0][0] = 1; // 경로 탐색 하듯 처음 시작 지점을 사용했다고 체크
//   DFS(0, 0);
//   return answer;
// }

// let arr = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 1, 1, 0],
//   [0, 0, 0, 1, 0, 0, 0],
//   [1, 1, 0, 1, 0, 1, 1],
//   [1, 1, 0, 0, 0, 0, 1],
//   [1, 1, 0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0],
// ];

// console.log(solution(arr));

// 다시 풀어보기
// function solution(board) {
//   let pathCount = 0;
//   /**
//    * D(0,0) => D(-1, 0), D(0, 1), D(1, 0), D(0, -1)
//    */
//   const rowMoves = [-1, 0, 1, 0];
//   const columnMoves = [0, 1, 0, -1];

//   const path = [];

//   const DFS = (row, column) => {
//     if (row === 6 && column === 6) {
//       pathCount++;
//       console.log(path);
//     } else {
//       for (let i = 0; i < 4; i++) {
//         const nextRow = row + rowMoves[i];
//         const nextColumn = column + columnMoves[i];
//         if (
//           nextRow >= 0 &&
//           nextColumn >= 0 &&
//           nextRow <= 6 &&
//           nextColumn <= 6 &&
//           board[nextRow][nextColumn] === 0
//         ) {
//           board[nextRow][nextColumn] = 1;
//           path.push([nextRow, nextColumn]);
//           DFS(nextRow, nextColumn);
//           path.pop();
//           board[nextRow][nextColumn] = 0;
//         }
//       }
//     }
//   };

//   board[0][0] = 1;
//   path.push([0, 0]);
//   DFS(0, 0);

//   return pathCount;
// }

// let arr = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 1, 1, 0],
//   [0, 0, 0, 1, 0, 0, 0],
//   [1, 1, 0, 1, 0, 1, 1],
//   [1, 1, 0, 0, 0, 0, 1],
//   [1, 1, 0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0],
// ];

// console.log(solution(arr));

// 복습 1회차
// function solution(board) {
//   let pathCount = 0;

//   /**
//    * DFS(row, column)
//    * DFS(0, 0)에서 움직일 수 있는 모든 경우
//    * => 12시 방향(북쪽) : DFS(-1, 0),
//    * 3시 방향(동쪽) : DFS(0, 1),
//    * 6시 방향(남쪽) : DFS(1, 0),
//    * 9시 방향(서쪽) : DFS(0, -1)
//    */
//   const moving = [
//     {
//       row: -1,
//       col: 0,
//     },
//     {
//       row: 0,
//       col: 1,
//     },
//     {
//       row: 1,
//       col: 0,
//     },
//     {
//       row: 0,
//       col: -1,
//     },
//   ];

//   const path = [];
//   const DFS = (row, column) => {
//     if (row === 6 && column === 6) {
//       pathCount++;
//       console.log(path);
//     } else {
//       for (let i = 0; i < 4; i++) {
//         const nextRow = row + moving[i].row;
//         const nextColumn = column + moving[i].col;
//         if (
//           nextRow >= 0 &&
//           nextColumn >= 0 &&
//           nextRow <= 6 &&
//           nextColumn <= 6 &&
//           board[nextRow][nextColumn] === 0
//         ) {
//           board[nextRow][nextColumn] = 1;
//           path.push([nextRow, nextColumn]);
//           DFS(nextRow, nextColumn);
//           path.pop();
//           board[nextRow][nextColumn] = 0;
//         }
//       }
//     }
//   };

//   board[0][0] = 1;
//   path.push([0, 0]);
//   DFS(0, 0);

//   return pathCount;
// }

// let arr = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 1, 1, 0],
//   [0, 0, 0, 1, 0, 0, 0],
//   [1, 1, 0, 1, 0, 1, 1],
//   [1, 1, 0, 0, 0, 0, 1],
//   [1, 1, 0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0],
// ];

// console.log(solution(arr));

// 복습 2회차
// function solution(board) {
//   let pathCount = 0;

//   /**
//    * DFS(row, column)
//    * DFS(0, 0)에서 움직일 수 있는 모든 경우
//    * => 12시 방향(북쪽) : DFS(-1, 0),
//    * 3시 방향(동쪽) : DFS(0, 1),
//    * 6시 방향(남쪽) : DFS(1, 0),
//    * 9시 방향(서쪽) : DFS(0, -1)
//    */
//   const moving = [
//     {
//       row: -1,
//       column: 0,
//     },
//     {
//       row: 0,
//       column: 1,
//     },
//     {
//       row: 1,
//       column: 0,
//     },
//     {
//       row: 0,
//       column: -1,
//     },
//   ];

//   const path = [];

//   const DFS = (row, column) => {
//     if (row === 6 && column === 6) {
//       pathCount++;
//       console.log(path);
//     } else {
//       for (let i = 0; i < moving.length; i++) {
//         const nextRow = row + moving[i].row;
//         const nextColumn = column + moving[i].column;
//         if (
//           nextRow >= 0 &&
//           nextColumn >= 0 &&
//           nextRow <= 6 &&
//           nextColumn <= 6 &&
//           board[nextRow][nextColumn] === 0
//         ) {
//           board[nextRow][nextColumn] = 1;
//           path.push([nextRow, nextColumn]);
//           DFS(nextRow, nextColumn);
//           path.pop();
//           board[nextRow][nextColumn] = 0;
//         }
//       }
//     }
//   };

//   path.push([0, 0]);
//   board[0][0] = 1;
//   DFS(0, 0);

//   return pathCount;
// }

// let arr = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 1, 1, 0],
//   [0, 0, 0, 1, 0, 0, 0],
//   [1, 1, 0, 1, 0, 1, 1],
//   [1, 1, 0, 0, 0, 0, 1],
//   [1, 1, 0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0],
// ];

// console.log(solution(arr));

// 복습 3회차
function solution(board) {
  // 탈출 경로 가지수
  let escapePathCount = 0;

  // 이동 방향
  /**
   * 12시 방향(북쪽) : DFS(-1, 0),
   * 3시 방향(동쪽) : DFS(0, 1),
   * 6시 방향(남쪽) : DFS(1, 0),
   * 9시 방향(서쪽) : DFS(0, -1)
   */
  const movingList = [
    {
      row: -1,
      column: 0,
    },
    {
      row: 0,
      column: 1,
    },
    {
      row: 1,
      column: 0,
    },
    {
      row: 0,
      column: -1,
    },
  ];

  // 경로
  const path = [];

  // 경로 탐색 DFS
  const DFS = (row, column) => {
    if (row === 6 && column === 6) {
      escapePathCount++;
      console.log(path);
    } else {
      for (let i = 0; i < movingList.length; i++) {
        const nextRow = row + movingList[i].row;
        const nextColumn = column + movingList[i].column;
        if (
          nextRow >= 0 &&
          nextColumn >= 0 &&
          nextRow <= 6 &&
          nextColumn <= 6 &&
          board[nextRow][nextColumn] === 0
        ) {
          board[nextRow][nextColumn] = 1;
          path.push([nextRow, nextColumn]);
          DFS(nextRow, nextColumn);
          path.pop();
          board[nextRow][nextColumn] = 0;
        }
      }
    }
  };

  // 시작점
  path.push([0, 0]);
  board[0][0] = 1;
  DFS(0, 0);

  return escapePathCount;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
