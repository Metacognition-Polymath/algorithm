/**
 * 이진트리 넓이우선탐색(BFS)
 * 아래 그림과 같은 이진트리를 넓이우선탐색해 보세요.
 *       1
 *    2    3
 *   4 5  6 7
 */

// function solution() {
//   let answer = "";
//   let queue = [];
//   queue.push(1);
//   while (queue.length) {
//     let v = queue.shift(); // 첫 전째 아이템을 꺼냄
//     answer += v + " ";
//     /**
//      * for(let nv of [v*2, v*2 + 1]) {
//      * 는 queue.push(v*2), queue.push(v*2 + 1) 과 같다
//      */
//     for (let nv of [v * 2, v * 2 + 1]) {
//       if (nv > 7) continue;
//       queue.push(nv);
//     }
//   }

//   return answer;
// }

// console.log(solution());

/**
 * 2진 트리, 넓이 우선 탐색
 * - 상태 트리를 레벨 탐색한다
 * - 최단 거리를 구하는 방법론 이다
 */

function solution() {
  let answer = "";
  let queue = [];

  queue.push(1);
  while (queue.length) {
    const v = queue.shift();
    answer += `${v} `;
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }

  return answer;
}

console.log(solution());
