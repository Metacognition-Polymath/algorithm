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
// const SIZE = 10;
// function solution(rectangles, characterX, characterY, itemX, itemY) {
//   // 51 * 51 맵
//   const map = Array.from(Array(SIZE + 2), () => Array(SIZE + 2).fill(0));

//   // 각 직사각형을 맵에 표시
//   for (let i = 0; i < rectangles.length; i++) {
//     const [x1, y1, x2, y2] = rectangles[i];
//     for (let y = y1; y <= y2; y++) {
//       for (let x = x1; x <= x2; x++) {
//         map[y][x] = 1;
//       }
//     }
//   }

//   // 겹쳐진 도형에서 안쪽을 비우기
//   const loadMap = emptyInside(map);

//   // 남은 길을 따라서 캐릭터의 위치에서 아이템의 위치까지 최단거리 구하기
//   const distance = bfs(loadMap, characterX, characterY, itemX, itemY);

//   return distance;
// }

// // BFS
// function bfs(map, characterX, characterY, itemX, itemY) {
//   // 방문 여부
//   const visited = Array.from(Array(SIZE + 2), () =>
//     Array(SIZE + 2).fill(false)
//   );

//   // 상하좌우
//   const dx = [0, 0, -1, 1];
//   const dy = [-1, 1, 0, 0];

//   // 시작점
//   const queue = [[characterX, characterY, 0]];
//   visited[characterY][characterX] = true;

//   while (queue.length) {
//     const [x, y, count] = queue.shift();

//     // 도착
//     if (x === itemX && y === itemY) {
//       return count;
//     }

//     // 상하좌우 탐색
//     for (let i = 0; i < dx.length; i++) {
//       const nx = x + dx[i];
//       const ny = y + dy[i];

//       // 맵을 벗어나지 않고, 방문하지 않았으며, 길이라면
//       if (
//         nx >= 0 &&
//         nx <= SIZE &&
//         ny >= 0 &&
//         ny <= SIZE &&
//         !visited[ny][nx] &&
//         map[ny][nx] === 1
//       ) {
//         queue.push([nx, ny, count + 1]);
//         visited[ny][nx] = true;
//       }
//     }
//   }

//   return -1;
// }

// function emptyInside(map) {
//   // map 복사
//   const copyMap = map.map((arr) => arr.slice());

//   // 원래 맵에서
//   for (let y = 0; y <= SIZE; y++) {
//     for (let x = 0; x <= SIZE; x++) {
//       if (map[y][x] === 1) {
//         if (
//           map[y - 1][x] === 1 &&
//           map[y + 1][x] === 1 &&
//           map[y][x - 1] === 1 &&
//           map[y][x + 1] === 1 &&
//           map[y - 1][x - 1] === 1 &&
//           map[y - 1][x + 1] === 1 &&
//           map[y + 1][x - 1] === 1 &&
//           map[y + 1][x + 1] === 1
//         ) {
//           copyMap[y][x] = 0;
//         }
//       }
//     }
//   }

//   return copyMap;
// }

// // Test case
// console.log(
//   solution(
//     [
//       [1, 1, 7, 4],
//       [3, 2, 5, 5],
//       [4, 3, 6, 9],
//       [2, 6, 8, 8],
//     ],
//     1,
//     3,
//     7,
//     8
//   )
// ); // Output: 17 // 내가 푼 답: 15
/**
 * 오답이 나온 이유
 * - 직사각형이 1칸 간격으로 겹쳐있는 경우 해당 영역을 구분하지 않고 하나의 직사각형으로 처리했다
 * - 이동 가능한 경로를 그래프로 처리할 필요가 있음
 */

/**
 * 다른 사람 풀이
 * - 참고: https://cocococo.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4JavaScript-Lv3-%EC%95%84%EC%9D%B4%ED%85%9C-%EC%A4%8D%EA%B8%B0
 * - 좌표를 두배로 늘리는 이유
 *   - 1칸 간격을 구분할 수 없다
 */

// function solution(rectangle, characterX, characterY, itemX, itemY) {
//   // 1) 좌표를 2배로 늘린다.
//   characterX *= 2;
//   characterY *= 2;
//   itemX *= 2;
//   itemY *= 2;
//   let dobuleRec = rectangle.map((rec) => rec.map((point) => point * 2));

//   // 2) 위, 아래, 우측, 좌측 방향 설정
//   const moveX = [1, -1, 0, 0];
//   const moveY = [0, 0, 1, -1];

//   // 3) 시작 위치를 최초의 큐에 담는다.
//   const start = [characterX, characterY, 0];
//   let que = [start];

//   // 4) 움직일 수 있는 좌표를 2차원 배열로 정의하여 모두 0으로 채운다.
//   let range = Array.from({ length: 103 }, () => Array(103).fill(0));

//   // 5) 테두리는 1, 테두리의 내부는 2로 값을 변경한다.
//   dobuleRec.forEach(([x1, y1, x2, y2]) => {
//     for (let i = x1; i <= x2; i++) {
//       for (let j = y1; j <= y2; j++) {
//         if (i === x1 || i === x2 || j === y1 || j === y2) {
//           if (range[i][j] === 0) range[i][j] = 1;
//         } else {
//           range[i][j] = 2;
//         }
//       }
//     }
//   });

//   // 6) 시작 위치를 0으로 변경하여 다시 돌아가지 못하게 한다.
//   range[characterX][characterY] = 0;

//   // 7) 큐에 담긴 값이 없을 때(도착지점에 도착했을 때)까지 반복한다.
//   while (que.length > 0) {
//     // 8) 처음 값(shift)을 가져와 BFS 탐색을 한다.
//     let [x, y, cnt] = que.shift();

//     // 9) 현재 위치가 도착 위치에 도달하면 리턴한다.
//     if (x === itemX && y === itemY) return cnt / 2;

//     // 10) 도착하지 않았다면 움직일 수 있는( 1인 경우 ) 좌표 값가 횟수를 큐에 담는다.
//     for (let i = 0; i < 4; i++) {
//       let chX = x + moveX[i];
//       let chY = y + moveY[i];
//       if (range[chX][chY] === 1) {
//         que.push([chX, chY, cnt + 1]);
//         range[chX][chY] = 0;
//       }
//     }
//   }
//   return 0;
// }

// // Test case
// console.log(
//   solution(
//     [
//       [1, 1, 7, 4],
//       [3, 2, 5, 5],
//       [4, 3, 6, 9],
//       [2, 6, 8, 8],
//     ],
//     1,
//     3,
//     7,
//     8
//   )
// ); // Output: 17

// 따라 풀어보기
function solution1(rectangle, characterX, characterY, itemX, itemY) {
  // 1) 좌표를 2배로 늘린다
  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;
  const doubleRec = rectangle.map((rec) => rec.map((point) => point * 2));

  // 2) 위, 아래, 우측, 좌측 방향 설정
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  // 3) 시작 위치를 최초의 큐에 담는다
  const queue = [];
  queue.push([characterX, characterY, 0]);

  // 4) 움직일 수 있는 좌표를 2차원 배열로 정의하여 모두 0으로 채운다
  const range = Array.from(Array(103), () => Array(103).fill(0));

  // 5) 테두리는 1, 테두리의 내부는 2로 값을 변경한다
  doubleRec.forEach(([x1, y1, x2, y2]) => {
    for (let x = x1; x <= x2; x++) {
      for (let y = y1; y <= y2; y++) {
        if (x === x1 || x === x2 || y === y1 || y === y2) {
          if (range[x][y] === 0) range[x][y] = 1;
        } else {
          range[x][y] = 2;
        }
      }
    }
  });

  // 6) 시작 위치를 0으로 변경하여 다시 돌아가지 못하게 한다
  range[characterX][characterY] = 0;

  // 7) 큐에 담긴 값이 없을 때(도착지점에 도착했을 때)까지 반복한다
  while (queue.length) {
    // 8) 처음 값(shift)을 가져와 BFS 탐색을 한다
    const [x, y, count] = queue.shift();

    // 9) 현재 위치가 도착 위치에 도달하면 리턴한다
    if (x === itemX && y === itemY) return count / 2;

    // 10) 도착하지 않았다면 움직일 수 있는(1인 경우) 좌표 값과 횟수를 큐에 담는다
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (range[nx][ny] === 1) {
        queue.push([nx, ny, count + 1]);
        range[nx][ny] = 0;
      }
    }
  }

  return 0;
}

// Test case
console.log(
  solution1(
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
); // Output: 17
