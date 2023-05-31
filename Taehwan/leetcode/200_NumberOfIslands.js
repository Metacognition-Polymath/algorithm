/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
 * return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
// var numIslands = function (grid) {
//   let islandCount = 0;

//   // 움직 일 수 있는 방향
//   /**
//    *       row, column
//    * 12시 : -1, 0
//    *  3시 :  0, 1
//    *  6시 :  1, 0
//    *  9시 :  0, -1
//    */
//   const movings = [
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

//   const m = grid[0].length; // column
//   const n = grid.length; // row

//   const DFS = (row, column) => {
//     // 움직일 수 있는 모든 방향 순회
//     for (let i = 0; i < movings.length; i++) {
//       const nextRow = row + movings[i].row;
//       const nextColumn = column + movings[i].col;
//       if (
//         nextRow >= 0 &&
//         nextColumn >= 0 &&
//         nextRow < n &&
//         nextColumn < m &&
//         grid[nextRow][nextColumn] === "1"
//       ) {
//         grid[nextRow][nextColumn] = "0";
//         DFS(nextRow, nextColumn);
//       }
//     }
//   };

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (grid[i][j] === "1") {
//         grid[i][j] = "0";
//         islandCount++;
//         DFS(i, j);
//       }
//     }
//   }

//   return islandCount;
// };

// // console.log(
// //   numIslands([
// //     ["1", "1", "1", "1", "0"],
// //     ["1", "1", "0", "1", "0"],
// //     ["1", "1", "0", "0", "0"],
// //     ["0", "0", "0", "0", "0"],
// //   ])
// // ); // 1

// console.log(
//   numIslands([
//     ["1", "1", "0", "0", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "1", "0", "0"],
//     ["0", "0", "0", "1", "1"],
//   ])
// ); // 3

// BFS
// var numIslands = function (grid) {
//   let islandCount = 0;

//   // 움직 일 수 있는 방향
//   /**
//    *       row, column
//    * 12시 : -1, 0
//    *  3시 :  0, 1
//    *  6시 :  1, 0
//    *  9시 :  0, -1
//    */
//   const movings = [
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

//   const m = grid[0].length; // column
//   const n = grid.length; // row

//   const queue = [];

//   // 모든 지점 탐색
//   for (let r = 0; r < n; r++) {
//     for (let c = 0; c < m; c++) {
//       if (grid[r][c] === "1") {
//         grid[r][c] = "0";
//         queue.push([r, c]);
//         islandCount++;
//         console.log([r, c]);
//         while (queue.length) {
//           const [r, c] = queue.shift();
//           for (let k = 0; k < movings.length; k++) {
//             const nr = r + movings[k].row;
//             const nc = c + movings[k].col;
//             if (
//               nr >= 0 &&
//               nc >= 0 &&
//               nr < n &&
//               nc < m &&
//               grid[nr][nc] === "1"
//             ) {
//               grid[nr][nc] = "0";
//               queue.push([nr, nc]);
//             }
//           }
//         }
//       }
//     }
//   }

//   return islandCount;
// };

// console.log(
//   numIslands([
//     ["1", "1", "1", "1", "0"],
//     ["1", "1", "0", "1", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "0", "0", "0"],
//   ])
// ); // 1

// // console.log(
// //   numIslands([
// //     ["1", "1", "0", "0", "0"],
// //     ["1", "1", "0", "0", "0"],
// //     ["0", "0", "1", "0", "0"],
// //     ["0", "0", "0", "1", "1"],
// //   ])
// // ); // 3

// BFS 복습
var numIslands = function (grid) {
  let islandCount = 0;

  // 움직 일 수 있는 방향
  /**
   *       row, column
   * 12시 : -1, 0
   *  3시 :  0, 1
   *  6시 :  1, 0
   *  9시 :  0, -1
   */
  const movings = [
    {
      row: -1,
      col: 0,
    },
    {
      row: 0,
      col: 1,
    },
    {
      row: 1,
      col: 0,
    },
    {
      row: 0,
      col: -1,
    },
  ];

  const columnLength = grid[0].length;
  const rowLength = grid.length;

  const queue = [];

  const isSearchable = (row, col) => {
    return !!(
      row >= 0 &&
      col >= 0 &&
      row < rowLength &&
      col < columnLength &&
      grid[row][col] === "1"
    );
  };

  // 모든 좌표 탐색
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < columnLength; col++) {
      // 조건에 맞는 다면 BFS 탐색 시작
      if (isSearchable(row, col)) {
        // 탐색을 시작할 때가 섬의 개수가 증가할 때
        islandCount++;
        // 탐색 시작한 점은 탐색했다는 표시를 해줌
        grid[row][col] = "-1";
        // BFS를 위해 queue에 넣어줌
        queue.push([row, col]);
        console.log([row, col]);
        while (queue.length) {
          const [row, col] = queue.shift();
          // 움직일 수 있는 모든 경로를 탐색하면서 표시
          for (let k = 0; k < movings.length; k++) {
            const nextRow = row + movings[k].row;
            const nextCol = col + movings[k].col;
            if (isSearchable(nextRow, nextCol)) {
              grid[nextRow][nextCol] = "-1";
              queue.push([nextRow, nextCol]);
            }
          }
        }
      }
    }
  }

  return islandCount;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
); // 1

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
); // 3
