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

  const m = grid[0].length; // column
  const n = grid.length; // row

  const DFS = (row, column) => {
    // 움직일 수 있는 모든 방향 순회
    for (let i = 0; i < movings.length; i++) {
      const nextRow = row + movings[i].row;
      const nextColumn = column + movings[i].col;
      if (
        nextRow >= 0 &&
        nextColumn >= 0 &&
        nextRow < n &&
        nextColumn < m &&
        grid[nextRow][nextColumn] === "1"
      ) {
        grid[nextRow][nextColumn] = "0";
        DFS(nextRow, nextColumn);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "1") {
        grid[i][j] = "0";
        islandCount++;
        DFS(i, j);
      }
    }
  }

  return islandCount;
};

// console.log(
//   numIslands([
//     ["1", "1", "1", "1", "0"],
//     ["1", "1", "0", "1", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "0", "0", "0"],
//   ])
// ); // 1

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
); // 3
