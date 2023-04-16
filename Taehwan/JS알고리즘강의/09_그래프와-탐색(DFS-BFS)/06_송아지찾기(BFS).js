/**
 * 송아지 찾기(BFS: 상태트리탐색)
 * 현수는 송아지를 잃어버렸다. 다행히 송아지에는 위치추적기가 달려 있다.
 * 현수의 위치와 송아지의 위치가 수직선상의 좌표 점으로 주어지면
 * 현수는 현재 위치에서 송아지의 위치까지 다음과 같은 방법으로 이동한다.
 * 송아지는 움직이지 않고 제자리에 있다.
 * 현수는 스카이 콩콩을 타고 가는데 한 번의 점프로
 * 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 있다.
 * 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램을 작성 하세요.
▣ 입력설명
첫 번째 줄에 현수의 위치 S와 송아지의 위치 E가 주어진다. 
직선의 좌표 점은 1부터 10,000 까지이다.
▣ 출력설명
점프의 최소횟수를 구한다. 답은 1이상입니다.
▣ 입력예제 1
5 14
▣ 출력예제 2
3
▣ 입력예제 2
8 3
▣ 출력예제 2
5
 */
/**
 * @param {number} s 현수의 위치
 * @param {number} e 송아지의 위치
 */
// function solution(s, e) {
//   let answer = 0;
//   // 중복 체크 배열
//   let ch = Array.from({ length: 10001 }, () => 0); // 1~10000까지 이므로 10001개를 만들음
//   // 각 지점 최단 거리
//   let dis = Array.from({ length: 10001 }, () => 0);
//   let queue = []; // BFS를 위한 큐
//   ch[s] = 1; // 시작점 체크
//   queue.push(s); // 시작점을 큐에 넣고 시작
//   dis[s] = 0; // 시작점의 최단거리는 0레벨
//   while (queue.length) {
//     let x = queue.shift(); // 큐에서 하나씩 꺼내는 것이 BFS 공식
//     for (let nx of [x - 1, x + 1, x + 5]) {
//       if (nx === e) {
//         // 종착점
//         return dis[x] + 1; // 부모 노드의 다음 레벨이므로
//       }
//       if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
//         ch[nx] = 1;
//         queue.push(nx); // 다음 지점을 큐에 넣는다
//         dis[nx] = dis[x] + 1; // 부모 노드의 다음 레벨이므로
//       }
//     }
//   }

//   return answer;
// }

// console.log(solution(5, 14)); // 3
// console.log(solution(8, 3)); // 5

// level로 구하기 더 복잡하니 생략
// function solution(s, e) {
//   let answer = 0;
//   let ch = Array.from({ length: 10001 }, () => 0);
//   let queue = [];
//   queue.push(s);
//   ch[s] = 1;
//   let L = 0;
//   while (queue.length) {
//     let len = queue.length;
//     for (let i = 0; i < len; i++) {
//       let x = queue.shift();
//       for (let nx of [x - 1, x + 1, x + 5]) {
//         if (nx === e) return L + 1;
//         if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
//           ch[nx] = 1;
//           queue.push(nx);
//         }
//       }
//     }
//     L++;
//   }
//   return answer;
// }

// console.log(solution(5, 14));

// function solution(s, e) {
//   const ch = Array.from({ length: 101 }, () => 0);
//   const dis = Array.from({ length: 101 }, () => -1);
//   const queue = [];

//   ch[s] = 1;
//   dis[s] = 0;
//   queue.push(s);

//   while (queue.length) {
//     const x = queue.shift();

//     for (const nx of [x - 1, x + 1, x + 5]) {
//       if (nx === e) {
//         console.log(dis);
//         return dis[x] + 1;
//       }
//       if (ch[nx] === 0 && nx > 0 && nx <= 10000) {
//         ch[nx] = 1;
//         dis[nx] = dis[x] + 1;
//         queue.push(nx);
//       }
//     }
//   }

//   return 0;
// }

// console.log(solution(5, 14));
// console.log(solution(8, 3));

// function solution(s, e) {
//   const dist = Array(101).fill(-1);
//   const queue = [];
//   dist[s] = 0;
//   queue.push(s);

//   while (queue.length) {
//     const x = queue.shift();
//     for (const nx of [x - 1, x + 1, x + 5]) {
//       if (nx === e) {
//         console.log(dist);
//         return dist[x] + 1;
//       }
//       if (nx > 0 && nx <= 100 && dist[nx] === -1) {
//         dist[nx] = dist[x] + 1;
//         queue.push(nx);
//       }
//     }
//   }

//   return 0;
// }
// // console.log(solution(8, 3));
// console.log(solution(5, 14));

// function solution(s, e) {
//   // 거리 배열
//   const dist = Array(101).fill(-1);
//   // BFS를 위한 큐
//   const queue = [];
//   // 초기 값 넣기 => 큐, 거리 배열
//   dist[s] = 0;
//   queue.push(s);
//   // BFS
//   while (queue.length) {
//     // 큐에서 하나씩 꺼내기
//     const x = queue.shift();
//     // 가지 뻣어 나가기
//     for (const nx of [x - 1, x + 1, x + 5]) {
//       if (nx === e) {
//         console.log(dist);
//         return dist[x] + 1; // BFS리턴은 이전 레벨 + 1
//       }
//       if (nx > 0 && nx <= 100 && dist[nx] === -1) {
//         // check 배열 대신 dist에 값이 초기값이 아닌 경우에만 뻣어 나감
//         dist[nx] = dist[x] + 1; // 다음 레벨은 현재 레벨 + 1
//         queue.push(nx);
//       }
//     }
//   }

//   return 0; // 결국 찾지 못했다면 도착할 수 있는 경우의 수는 0
// }
// console.log(solution(8, 3));
// console.log(solution(5, 14));

/** 복습 1회차 */
// function solution(s, e) {
//   // 거리 배열
//   const dist = Array(101).fill(-1);

//   // BFS 큐
//   const queue = [];

//   // 큐에 초기값 넣기
//   queue.push(s);
//   dist[s] = 0; // 시작은 0레벨

//   while (queue.length) {
//     const v = queue.shift();

//     for (const nv of [v - 1, v + 1, v + 5]) {
//       const nextLevel = dist[v] + 1;
//       if (nv === e) {
//         console.log("dist", dist);
//         return nextLevel;
//       }
//       if (dist[nv] === -1 && nv > 0 && nv <= 101) {
//         queue.push(nv);
//         dist[nv] = nextLevel;
//       }
//     }
//   }

//   return 0;
// }
// console.log(solution(8, 3));

// 복습 2회차
// function solution(startPosition, endPosition) {
//   // 위치
//   const positions = Array(101).fill(-1);

//   // BFS 큐
//   const queue = [];

//   positions[startPosition] = 0;
//   queue.push(startPosition);

//   while (queue.length) {
//     const currentPosition = queue.shift();

//     for (const nextPosition of [
//       currentPosition - 1,
//       currentPosition + 1,
//       currentPosition + 5,
//     ]) {
//       if (nextPosition === endPosition) {
//         console.log("positions", positions);
//         return positions[currentPosition] + 1; // 다음 포지션에 도달한 횟수는 이전 포지션에 도달한 횟수 + 1
//       }
//       if (
//         nextPosition > 0 &&
//         nextPosition <= 100 &&
//         positions[nextPosition] === -1
//       ) {
//         positions[nextPosition] = positions[currentPosition] + 1;
//         queue.push(nextPosition);
//       }
//     }
//   }

//   console.log("no result");
//   return 0;
// }
// console.log(solution(5, 14));

// 복습 3회차
function solution(startPosition, endPosition) {
  // 거리 + 레벨
  const dist = Array(101).fill(-1);

  // BFS 큐
  const queue = [];

  // 초기값 설정
  dist[startPosition] = 0;
  queue.push(startPosition);

  // BFS
  while (queue.length) {
    const currentPosition = queue.shift();

    for (const nextPosition of [
      currentPosition - 1,
      currentPosition + 1,
      currentPosition + 5,
    ]) {
      const nextLevel = dist[currentPosition] + 1;
      if (nextPosition === endPosition) {
        return nextLevel;
      } else {
        // boundary안에 있고 이전에 뻣어나간적이 없었던 곳에서만 뻣어나감(중복 방지)
        if (
          nextPosition > 0 &&
          nextPosition <= 101 &&
          dist[nextPosition] === -1
        ) {
          dist[nextPosition] = nextLevel;
          queue.push(nextPosition);
        }
      }
    }
  }

  // no way to get there
  return 0;
}
// console.log(solution(5, 14));
console.log(solution(8, 3));
