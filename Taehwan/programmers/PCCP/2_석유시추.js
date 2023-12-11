/**
 * [석유 시추]
 * 세로 길이가 n, 가로 길이가 m인 2차원 모양의 땅에 석유가 있다
 * 수직으로 하나만 뚫어서 가장 많은 석유를 뽑을 수 있는 곳을 찾아야 한다
 * 시추관은 열 하나를 관통하는 형태
 * 시추관이 지나가는 땅에 있는 석유와 연결된 석유는 모두 뽑을 수 있다
 *
 * 시추관은 아래쪽으로 이동, 시추관이 끝까지 이동하면 다음 칸으로 이동
 *
 * 최대 석유를 뽑을 수 있는 양을 리턴하라
 *
 * 입출력 예
 * land / result
 * [[0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [1, 1, 0, 0, 0, 1, 1, 0], [1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 1, 1]] / 9
 * [[1, 0, 1, 0, 1, 1], [1, 0, 1, 0, 0, 0], [1, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0], [1, 0, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1]] / 16
 *
 * 입출력 예 중 1번째에 대한 설명
 * 예를 들어 가로가 8, 세로가 5인 격자 모양의 땅 속에 위 그림처럼 석유가 발견되었다고 가정하겠습니다. 상, 하, 좌, 우로 연결된 석유는 하나의 덩어리이며, 석유 덩어리의 크기는 덩어리에 포함된 칸의 수입니다. 그림에서 석유 덩어리의 크기는 왼쪽부터 8, 7, 2입니다.
 * 시추관은 위 그림처럼 설치한 위치 아래로 끝까지 뻗어나갑니다. 만약 시추관이 석유 덩어리의 일부를 지나면 해당 덩어리에 속한 모든 석유를 뽑을 수 있습니다. 시추관이 뽑을 수 있는 석유량은 시추관이 지나는 석유 덩어리들의 크기를 모두 합한 값입니다. 시추관을 설치한 위치에 따라 뽑을 수 있는 석유량은 다음과 같습니다.
 * 시추관의 위치 / 획득한 덩어리 / 총 석유량
 * 1 / [8] / 8
 * 2 / [8] / 8
 * 3 / [8] / 8
 * 4 / [7] / 7
 * 5 / [7] / 7
 * 6 / [7] / 7
 * 7 / [7, 2] / 9
 * 8 / [2] / 2
 * 따라서 시추관을 설치할 위치를 7번째 칸으로 정하면 총 석유량이 9로 최대가 됩니다.
 */
// function solution(land) {
//   const rows = land.length;
//   const cols = land[0].length;
//   const oilAmounts = [];

//   // 각 열에서 시추관을 설치할 때 최대 석유 양 계산
//   for (let col = 0; col < cols; col++) {
//     let currentOil = 0;
//     const copiedLand = land.map((row) => row.slice());
//     // 현재 열에서 아래로 이동하면서 석유 양 계산
//     for (let row = 0; row < rows; row++) {
//       if (copiedLand[row][col] === 1) {
//         currentOil += findConnectedOil(copiedLand, row, col);
//       }
//     }

//     // 현재 열에서 시추관을 설치했을 때 최대 석유 양 저장
//     oilAmounts.push(currentOil);
//   }

//   // console.log("oilAmounts", oilAmounts);

//   return Math.max(...oilAmounts);
// }

// // 연결된 석유 양 찾기 (깊이 우선 탐색)
// function findConnectedOil(land, row, col) {
//   if (
//     row < 0 ||
//     row >= land.length ||
//     col < 0 ||
//     col >= land[0].length ||
//     land[row][col] === 0
//   ) {
//     return 0;
//   }

//   // 현재 위치의 석유를 뽑았다고 표시
//   land[row][col] = 0;

//   // 상, 하, 좌, 우로 이동하면서 연결된 석유 양 계산
//   return (
//     1 +
//     findConnectedOil(land, row - 1, col) +
//     findConnectedOil(land, row + 1, col) +
//     findConnectedOil(land, row, col - 1) +
//     findConnectedOil(land, row, col + 1)
//   );
// }

// 다른 사람 풀이 - https://velog.io/@_jake/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-PCCP-%EA%B8%B0%EC%B6%9C%EB%AC%B8%EC%A0%9C-2%EB%B2%88-JavaScript
/**
 * 코드의 핵심은 각 석유 덩어리를 찾아내고, 해당 덩어리의 정보를 이용하여 dp 배열을 업데이트하고, 최종적으로 최대 석유 양을 찾아내는 것입니다.
 */
function solution(land) {
  const n = land.length; // 세로 : i
  const m = land[0].length; // 가로 : j
  const moves = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]; // 상하좌우 이동

  const dp = new Array(m + 1).fill(0); // 각 열의 누적 석유량(?)

  /**
   * 석유 덩어리를 찾아내고 정보를 업데이트하는 BFS 함수
   * - 석유 덩어리를 찾고, 해당 덩어리의 크기와 석유가 있는 열의 범위를 landObj에 저장
   * @param {number[][]} moveGroup
   * @param {{ area: number; minJ: number; maxJ: number;}} landObj
   */
  const bfs = (moveGroup, landObj) => {
    const newMoveGroup = [];
    // 덩어리의 크기를 업데이트
    landObj.area += moveGroup.length;

    for (const [i, j] of moveGroup) {
      // 덩어리의 최소, 최대 열 범위를 업데이트
      if (landObj.minJ > j) landObj.minJ = j;
      if (landObj.maxJ < j) landObj.maxJ = j;

      for (const [mi, mj] of moves) {
        const [movedI, movedJ] = [mi + i, mj + j];
        // 범위 내에 있고, 석유가 있는 경우
        if (
          movedI >= 0 &&
          movedI < n &&
          movedJ >= 0 &&
          movedJ < m &&
          land[movedI][movedJ]
        ) {
          land[movedI][movedJ] = 0;
          newMoveGroup.push([movedI, movedJ]);
        }
      }
    }

    // 새로운 덩어리가 있으면 재귀 호출
    if (newMoveGroup.length) bfs(newMoveGroup, landObj);
  };

  // 모든 땅을 순회
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      // 석유가 있는 경우
      if (land[i][j]) {
        const landObj = { area: 0, minJ: j, maxJ: j };
        // 석유를 뽑았다고 표시하고 BFS로 덩어리 찾기
        land[i][j] = 0;
        bfs([[i, j]], landObj);

        // dp 배열 업데이트
        dp[landObj.minJ] += landObj.area;
        dp[landObj.maxJ + 1] -= landObj.area;
      }
    }
  }

  // 누적 석유량을 계산하여 최대 석유 양 찾기
  let sum = 0;
  let result = 0;

  for (let i = 0; i < m; i += 1) {
    if (dp[i]) {
      sum += dp[i];

      // 최대 석유 양 갱신
      if (sum > result) result = sum;
    }
  }

  // console.log("dp", dp);

  return result;
}

console.log(
  solution([
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1],
  ])
);
console.log(
  solution([
    [1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0],
    [1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1],
  ])
);
