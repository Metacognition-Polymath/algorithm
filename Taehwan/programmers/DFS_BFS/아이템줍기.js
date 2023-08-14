/**
 * <아이템 줍기>
 *
 * 지형은 각 변이 x축, y축과 평행한 직사각형이 겹쳐진 형태이다
 * 캐릭터는 이 겹쳐진 다각형의 둘레를 따라 움직일 수 있다
 *
 * 만약 직사각형을 겹친 후 중앙에 빈 공간이 생기는 경우, 다각형의 가장 바깥쪽 테두리가 이동 경로가 된다
 *
 * 직사각형: [좌측하단 x, 좌측하단 y, 우측상단 x, 우측상단 y]
 *
 * 캐릭터의 위치: [characterX, characterY]
 * 아이템의 위치: [itemX, itemY]
 *
 * 캐릭터가 아이템을 줍고자 하는 위치까지 이동하는데 필요한 최소 이동거리를 반환하라
 *
 * 입출력 예
 * 직사각형 / characterX / characterY / itemX / itemY / result
 * [[1,1,7,4], [3,2,5,5], [4,3,6,9], [2,6,8,8]] / 1 / 3 / 7 / 8 / 17
 * [[1,1,8,4], [2,2,4,9], [3,6,9,8], [6,3,7,7]] / 9 / 7/ 6 / 1 / 11
 * [[1,1,5,7]] / 1 / 1 / 4 / 7 / 9
 * [[2,1,7,5], [6,4,10,10]] / 3 / 1 / 7 / 10 / 15
 */
const SIZE = 10;
function solution(rectangles, characterX, characterY, itemX, itemY) {
  // 51 * 51 맵
  const map = Array.from(Array(SIZE + 2), () => Array(SIZE + 2).fill(0));

  // 각 직사각형을 맵에 표시
  for (let i = 0; i < rectangles.length; i++) {
    const [x1, y1, x2, y2] = rectangles[i];
    for (let y = y1; y <= y2; y++) {
      for (let x = x1; x <= x2; x++) {
        map[y][x] = 1;
      }
    }
  }

  // 겹쳐진 도형에서 안쪽을 비우기
  const loadMap = emptyInside(map);

  // 남은 길을 따라서 캐릭터의 위치에서 아이템의 위치까지 최단거리 구하기
  const distance = bfs(loadMap, characterX, characterY, itemX, itemY);

  return distance;
}

// BFS
function bfs(map, characterX, characterY, itemX, itemY) {
  // 방문 여부
  const visited = Array.from(Array(SIZE + 2), () =>
    Array(SIZE + 2).fill(false)
  );

  // 상하좌우
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  // 시작점
  const queue = [[characterX, characterY, 0]];
  visited[characterY][characterX] = true;

  while (queue.length) {
    const [x, y, count] = queue.shift();

    // 도착
    if (x === itemX && y === itemY) {
      return count;
    }

    // 상하좌우 탐색
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 맵을 벗어나지 않고, 방문하지 않았으며, 길이라면
      if (
        nx >= 0 &&
        nx <= SIZE &&
        ny >= 0 &&
        ny <= SIZE &&
        !visited[ny][nx] &&
        map[ny][nx] === 1
      ) {
        queue.push([nx, ny, count + 1]);
        visited[ny][nx] = true;
      }
    }
  }

  return -1;
}

function emptyInside(map) {
  // map 복사
  const copyMap = map.map((arr) => arr.slice());

  // 원래 맵에서
  for (let y = 0; y <= SIZE; y++) {
    for (let x = 0; x <= SIZE; x++) {
      if (map[y][x] === 1) {
        if (
          map[y - 1][x] === 1 &&
          map[y + 1][x] === 1 &&
          map[y][x - 1] === 1 &&
          map[y][x + 1] === 1 &&
          map[y - 1][x - 1] === 1 &&
          map[y - 1][x + 1] === 1 &&
          map[y + 1][x - 1] === 1 &&
          map[y + 1][x + 1] === 1
        ) {
          copyMap[y][x] = 0;
        }
      }
    }
  }

  return copyMap;
}

// Test case
console.log(
  solution(
    [
      [1, 1, 7, 4],
      [3, 2, 5, 5],
      [4, 3, 6, 9],
      [2, 6, 8, 8],
    ],
    1,
    3,
    7,
    8
  )
); // Output: 17 // 내가 푼 답: 15
/**
 * 오답이 나온 이유
 * - 직사각형이 1칸 간격으로 겹쳐있는 경우 해당 영역을 구분하지 않고 하나의 직사각형으로 처리했다
 * - 이동 가능한 경로를 그래프로 처리할 필요가 있음
 */
