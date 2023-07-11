/**
 * N과 사칙연산만으로 number를 표현할 때, 표현할 수 있는 방법 중 N의 사용횟수의 최소값을 return
 * 최소값이 8보다 크면 -1을 return
 * e.g. (N = 5, number = 12) => 4
 * 12 = 5 + 5 + (5/5) + (5/5)
 * 12 = 55/5 + 5/5
 * 12 = (55 + 5) / 5 -> 이 경우가 N을 최소로 사용한 경우, 즉 4번
 * (N = 2, number = 11) => 3
 */
// function solution(N, number) {
//   var answer = 0;
//   const dfs = (level, acc) => {
//     if (level > 8) {
//       return;
//     }
//     if (acc === number) {
//       if (answer === 0 || answer > level) {
//         answer = level;
//       }
//       return;
//     }
//     let temp = 0;
//     for (let i = 0; i < 8; i++) {
//       temp = temp * 10 + N;
//       dfs(level + 1 + i, acc + temp);
//       dfs(level + 1 + i, acc - temp);
//       dfs(level + 1 + i, acc * temp);
//       dfs(level + 1 + i, acc / temp);
//     }
//   };

//   dfs(0, 0);

//   return answer > 8 ? -1 : answer;
// }

// console.log(solution(5, 12)); // 4
// console.log(solution(2, 11)); // 3

// dp로 풀어보기
// function solution(N, number) {
//   const dp = Array.from(Array(9), () => new Set());
//   // console.log("dp", dp);
//   for (let i = 1; i < 9; i++) {
//     dp[i].add(Number(N.toString().repeat(i)));
//     for (let j = 1; j < i; j++) {
//       for (const a of dp[j]) {
//         for (const b of dp[i - j]) {
//           dp[i].add(a + b);
//           dp[i].add(a - b);
//           dp[i].add(a * b);
//           dp[i].add(a / b);
//         }
//       }
//     }
//     if (dp[i].has(number)) {
//       // console.log("dp", dp);
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(solution(5, 12)); // 4
// console.log(solution(2, 11)); // 3

/**
 * 코드 해석
 * 1. dp[i]는 N을 i번 사용해서 만들 수 있는 수의 집합
 * 2. dp[i]는 dp[j]와 dp[i - j]의 사칙연산 결과로 만들 수 있다.
 * 3. dp[i]에는 dp[j]와 dp[i - j]의 사칙연산 결과가 들어간다.
 * 4. dp[i]에 number가 있으면 i를 return
 * 5. 없으면 -1을 return
 * 6. dp[1] = [N]
 * 7. dp[2] = [NN, N + N, N - N, N * N, N / N]
 * 8. dp[3] = [NNN, NN + N, NN - N, NN * N, NN / N, NNN, N + NN, N - NN, N * NN, N / NN]
 */
// 코드 이해하기
// /**
//  *
//  * @param {number} N 사용되는 숫자
//  * @param {number} number 타겟 숫자
//  */
// function solution(N, number) {
//   const dp = Array.from({ length: 9 }, () => new Set());
//   for (let i = 1; i < 9; i++) {
//     dp[i].add(Number(N.toString().repeat(i)));
//     for (let j = 1; j < i; j++) {
//       for (const a of dp[j]) {
//         for (const b of dp[i - j]) {
//           dp[i].add(a + b);
//           dp[i].add(a - b);
//           dp[i].add(a * b);
//           dp[i].add(a / b);
//         }
//       }
//     }
//     if (dp[i].has(number)) {
//       return i;
//     }
//   }

//   return -1;
// }

// 복습 1회차
/**
 *
 * @param {number} N 사용되는 숫자
 * @param {number} number 타겟 숫자
 */
function solution(N, number) {
  // 이 문제의 핵심 : N이 3개가 사용된 숫자는 N이 1개가 사용된 숫자와 2개가 사용된 숫자의 사칙연산으로 구할 수 있다
  const dp = Array.from({ length: 9 }, () => new Set());
  for (let i = 1; i <= 8; i++) {
    dp[i].add(Number(N.toString().repeat(i)));
    for (let j = 1; j < i; j++) {
      for (const a of dp[j]) {
        for (const b of dp[i - j]) {
          dp[i].add(a + b);
          dp[i].add(a - b);
          dp[i].add(a * b);
          dp[i].add(a / b);
        }
      }
    }
    if (dp[i].has(number)) {
      // console.log("dp", dp);
      return i;
    }
  }
  return -1;
}

console.log(solution(5, 12)); // 4
console.log(solution(2, 11)); // 3
