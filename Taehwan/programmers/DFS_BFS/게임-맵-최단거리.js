/**
 * 매번 동서남북으로 한칸씩 이동할 수 있다
 * 0,0 -> 4,4 까지 최단거리를 구하라
 * 도달할 수 없는 경우 -1을 리턴
 * maps => answer
 * [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]] => 11
 * [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]] => -1
 */
// function solution(maps) {
//   const n = maps.length;
//   const m = maps[0].length;
//   const visited = Array.from(Array(n), () => new Array(m).fill(false));
//   console.log("visited", visited);
//   const dx = [0, 0, -1, 1];
//   const dy = [-1, 1, 0, 0];
//   const queue = [];
//   queue.push([0, 0, 1]);
//   visited[0][0] = true;
//   while (queue.length) {
//     const [x, y, count] = queue.shift();
//     if (x === n - 1 && y === m - 1) {
//       return count;
//     }
//     for (let i = 0; i < 4; i++) {
//       const nx = x + dx[i];
//       const ny = y + dy[i];

//       if (
//         nx >= 0 &&
//         nx < n &&
//         ny >= 0 &&
//         ny < m &&
//         maps[nx][ny] === 1 &&
//         !visited[nx][ny]
//       ) {
//         visited[nx][ny] = true;
//         queue.push([nx, ny, count + 1]);
//       }
//     }
//   }
//   return -1;
// }

// console.log(
//   solution([
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 1],
//     [0, 0, 0, 0, 1],
//   ])
// );

// function solution(maps) {
//   const rows = maps.length;
//   const cols = maps[0].length;

//   // 이동할 네 방향을 나타내는 배열
//   const dr = [-1, 1, 0, 0];
//   const dc = [0, 0, -1, 1];

//   // BFS를 위한 큐
//   const queue = [];

//   // 시작 위치를 큐에 추가
//   queue.push([0, 0, 1]); // 시작 위치: (0, 0), 이동 거리: 1

//   // 방문한 위치를 기록하기 위한 배열
//   const visited = Array.from(Array(rows), () => Array(cols).fill(false));

//   // 시작 위치를 방문한 것으로 표시
//   visited[0][0] = true;

//   while (queue.length > 0) {
//     const [curRow, curCol, distance] = queue.shift();

//     // 목적지에 도착한 경우 최단거리 반환
//     if (curRow === rows - 1 && curCol === cols - 1) {
//       return distance;
//     }

//     // 네 방향으로 이동 가능한 경우 탐색
//     for (let i = 0; i < 4; i++) {
//       const newRow = curRow + dr[i];
//       const newCol = curCol + dc[i];

//       // 이동 가능한 위치인지, 범위를 벗어나지 않는지 확인
//       if (
//         newRow >= 0 &&
//         newRow < rows &&
//         newCol >= 0 &&
//         newCol < cols &&
//         maps[newRow][newCol] === 1 &&
//         !visited[newRow][newCol]
//       ) {
//         // 새로운 위치를 큐에 추가하여 탐색
//         queue.push([newRow, newCol, distance + 1]);
//         // 새로운 위치를 방문한 것으로 표시
//         visited[newRow][newCol] = true;
//       }
//     }
//   }

//   // 도달할 수 없는 경우 -1 반환
//   return -1;
// }

// console.log(
//   solution([
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 1],
//     [0, 0, 0, 0, 1],
//   ])
// );

/**
 * 위 코드에서는 큐를 사용하여 BFS를 구현하였습니다.
 * 이동 가능한 위치를 탐색하면서 도착 지점에 도달하면 해당 지점까지의 최단거리를 반환하고,
 * 도착할 수 없는 경우 -1을 반환합니다.
 * BFS 알고리즘은 시작 위치에서부터 단계별로 탐색하며 최단거리를 구하는 특성을 가지고 있기 때문에 이 문제에 적합합니다.
 */

// /**
//  * 다시 풀어보기
//  * @param {number[][]} maps
//  */
// function solution(maps) {
//   const rows = maps.length;
//   const cols = maps[0].length;

//   // 이동 방향
//   const dx = [-1, 1, 0, 0];
//   const dy = [0, 0, -1, 1];

//   // BFS 큐
//   const queue = [];

//   const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

//   queue.push([0, 0, 1]); // x, y, count
//   visited[0][0] = true;

//   while (queue.length) {
//     const [curX, curY, count] = queue.shift();

//     if (curX === cols - 1 && curY === rows - 1) {
//       return count;
//     }

//     for (let i = 0; i < dx.length; i++) {
//       const nx = dx[i] + curX;
//       const ny = dy[i] + curY;
//       if (
//         nx >= 0 &&
//         ny >= 0 &&
//         nx < cols &&
//         ny < rows &&
//         maps[ny][nx] === 1 &&
//         !visited[ny][nx]
//       ) {
//         queue.push([nx, ny, count + 1]);
//         visited[ny][nx] = true;
//       }
//     }
//   }

//   return -1;
// }

// console.log(
//   solution([
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 1],
//     [0, 0, 0, 0, 1],
//   ])
// );

// console.log(
//   solution([
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 1],
//   ])
// );

/**
 * 복습 1회차
 * @param {number[][]} maps
 */
function solution(maps) {
  const rowsLength = maps.length;
  const colsLength = maps?.[0].length ?? 0;

  // 움직일 수 있는 경우의 수
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];

  // 방문한 곳 체크
  const visited = Array.from({ length: rowsLength }, () =>
    Array(colsLength).fill(false)
  );

  // BFS 큐
  const queue = []; // [row, col, stepCount];
  queue.push([0, 0, 1]);
  visited[0][0] = true;

  // BFS 순회 : 단계적으로 순회하기 때문에 최단거리를 구할 수 있다
  while (queue.length) {
    const [curRow, curCol, stepCount] = queue.shift();

    if (curRow === rowsLength - 1 && curCol === colsLength - 1) {
      return stepCount;
    }

    for (let i = 0; i < dr.length; i++) {
      const nextRow = curRow + dr[i];
      const nextCol = curCol + dc[i];

      if (
        nextRow >= 0 &&
        nextCol >= 0 &&
        nextRow < rowsLength &&
        nextCol < colsLength &&
        !visited[nextRow][nextCol] &&
        maps[nextRow][nextCol] === 1
      ) {
        queue.push([nextRow, nextCol, stepCount + 1]);
        visited[nextRow][nextCol] = true;
      }
    }
  }

  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
