/**
 * 돌다리 건너기
 *
 * 철수는 학교에 가는데 개울을 만났습니다.
 * 개울은 N개의 돌로 다리를 만들어 놓았습니다.
 * 철 수는 돌 다리를 건널 때 한 번에 한 칸 또는 두 칸씩 건너뛰면서 돌다리를 건널 수 있습니다.
 * 철수가 개울을 건너는 방법은 몇 가지일까요?
 */
// 혼자 풀어보기 - 돌다리 + 1 칸 만큼 가야 건너므로
// function solution(m) {
//   const n = m + 1;
//   const dy = Array(n + 1).fill(0);
//   dy[1] = 1;
//   dy[2] = 2;
//   for (let i = 3; i <= n; i++) {
//     dy[i] = dy[i - 2] + dy[i - 1];
//   }
//   return dy[n];
// }

// console.log(solution(7));

// 정답
function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 2 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n + 1];
  return answer;
}

console.log(solution(7));
