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
function solution(land) {
  const rows = land.length;
  const cols = land[0].length;
  const oilAmounts = [];

  // 각 열에서 시추관을 설치할 때 최대 석유 양 계산
  for (let col = 0; col < cols; col++) {
    let currentOil = 0;
    const copiedLand = land.map((row) => row.slice());
    // 현재 열에서 아래로 이동하면서 석유 양 계산
    for (let row = 0; row < rows; row++) {
      if (copiedLand[row][col] === 1) {
        currentOil += findConnectedOil(copiedLand, row, col);
      }
    }

    // 현재 열에서 시추관을 설치했을 때 최대 석유 양 저장
    oilAmounts.push(currentOil);
  }

  // console.log("oilAmounts", oilAmounts);

  return Math.max(...oilAmounts);
}

// 연결된 석유 양 찾기 (깊이 우선 탐색)
function findConnectedOil(land, row, col) {
  if (
    row < 0 ||
    row >= land.length ||
    col < 0 ||
    col >= land[0].length ||
    land[row][col] === 0
  ) {
    return 0;
  }

  // 현재 위치의 석유를 뽑았다고 표시
  land[row][col] = 0;

  // 상, 하, 좌, 우로 이동하면서 연결된 석유 양 계산
  return (
    1 +
    findConnectedOil(land, row - 1, col) +
    findConnectedOil(land, row + 1, col) +
    findConnectedOil(land, row, col - 1) +
    findConnectedOil(land, row, col + 1)
  );
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
