/**
 * 가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다.
 * 그리고 둘째 줄부터 차례대로 파스칼 의 삼각형처럼 위의 두개를 더한 값이 저장되게 된다
 * 예를 들어 N이 4 이고 가장 윗 줄에 3 1 2 4 가 있다고 했을 때, 다음과 같은 삼각형이 그려진다.
 * 3 1 2 4
 *  4 3 6
 *   7 9
 *    16
 * N과 가장 밑에 있는 숫자가 주어져 있을 때 가장 윗줄에 있는 숫자를 구하는 프로그램을 작성하 시오.
 * 단, 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력하여야 한다.
 *
 */

/**
 * 강의 해설
 * 1    2   3    4
 * (1+2) (2+3) (3+4)
 * (1+2+2+3) (2+3+3+4)
 * (1*1 + 2*3 + 3*3 + 4*1)
 * (1*3C0 + 2*3C1 + 3*3C2 + 4*3C3)
 *
 * 순열 배열을 구하고 => [1, 3, 3, 1]
 * 각 경우에 수에 해당하는 순열과 곱한다
 * -> e.g. 순열 중 하나가 [1, 2, 3, 4] 인경우
 * => 1*1 + 3*2 + 3*3 + 4*1
 *
 */
/**
 * @param {number} n 첫 줄에 있는 정수의 개수
 * @param {number} f 마지막 줄에 있는 정수(피라미드 꼭대기로 올라가면서 더한 수)
 */
// function solution(n, f) {
//   let answer;
//   let flag = false;
//   let dy = Array.from(Array(11), () => Array(11).fill(0)); // 캐시 배열
//   let ch = Array.from({ length: n + 1 }, () => 0); // 순열을 구하기 위한 체크 배열
//   // let p = Array.from({ length: n }, () => 0); // 순열이 저장될 배열
//   let p = [];
//   let b = Array.from({ length: n }, () => 0); // 조합이 저장될 배열

//   function combi(n, r) {
//     if (dy[n][r] > 0) return dy[n][r];
//     if (n === r || r === 0) return 1;
//     else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
//   }

//   for (let i = 0; i < n; i++) {
//     b[i] = combi(n - 1, i); // 미리 조합을 구해서 채워넣어줌
//   }

//   function DFS(L, sum) {
//     if (flag) return;
//     if (L === n) console.log(p);
//     if (L === n && sum === f) {
//       answer = p.slice();
//       flag = true;
//     } else {
//       // 1부터 n까지의 숫자로 순열을 만드므로 i = 1 ~ n
//       for (let i = 1; i <= n; i++) {
//         if (ch[i] === 0) {
//           ch[i] = 1; // 사용했다고 체크
//           // p[L] = i; // 순열
//           p.push(i);
//           DFS(L + 1, sum + b[L] * p[L]); // 순열에 미리 구해놓은 조합을 곱해서 누적해서 더한다
//           ch[i] = 0; // 사용이 끝났으므로 체크해제
//           p.pop();
//         }
//       }
//     }
//   }

//   DFS(0, 0);
//   return answer;
// }

// console.log(solution(4, 16));

// 복습 1회차
// 맨 윗줄 : 1 ~ n
// 맨 아랫 수 : f
// function solution(n, f) {
//   const combinationArr = [];
//   const combinationMap = {};
//   const combinationMapKey = (n, r) => `${n}C${r}`;
//   const getCombinationNumber = (n, r) => {
//     if (combinationMap[combinationMapKey(n, r)])
//       return combinationMap[combinationMapKey(n, r)];
//     if (n === r || r === 0) {
//       return 1;
//     } else {
//       const result =
//         getCombinationNumber(n - 1, r - 1) + getCombinationNumber(n - 1, r);
//       combinationMap[combinationMapKey(n, r)] = result;
//       return result;
//     }
//   };

//   for (let i = 0; i < n; i++) {
//     combinationArr.push(getCombinationNumber(n - 1, i));
//   }

//   const answer = [];
//   const checkArr = Array(n + 1).fill(0);
//   const permutations = Array(n).fill(0);
//   let found = false;
//   const DFS = (level, sum) => {
//     if (found) return;
//     if (level === n) {
//       if (sum === f) {
//         answer.push(...permutations);
//         found = true;
//       }
//     } else {
//       for (let i = 1; i <= n; i++) {
//         if (checkArr[i] === 0) {
//           checkArr[i] = 1;
//           permutations[level] = i;
//           DFS(level + 1, sum + permutations[level] * combinationArr[level]);
//           checkArr[i] = 0;
//         }
//       }
//     }
//   };

//   DFS(0, 0);

//   return answer;
// }

// console.log(solution(4, 16));

// function solution(n, f) {
//   // 1. 조합 수 미리 구하기
//   const combinations = Array(n).fill(0);
//   const combinationMap = {};
//   const combKey = (n, r) => `${n}C${r}`;
//   const getCombinationNumber = (n, r) => {
//     if (combinationMap[combKey(n, r)]) return combinationMap[combKey(n, r)];
//     if (n === r || r === 0) {
//       return 1;
//     } else {
//       const result =
//         getCombinationNumber(n - 1, r - 1) + getCombinationNumber(n - 1, r);
//       combinationMap[combKey(n, r)] = result;
//       return result;
//     }
//   };

//   for (let i = 0; i < n; i++) {
//     combinations[i] = getCombinationNumber(n - 1, i);
//   }

//   // 2. 순열을 구하면서 누적합이 답과 맞는지 확인하기
//   const answer = [];
//   const permutations = Array(n).fill(0);
//   let found = false;
//   const checkArr = Array(n + 1).fill(0);
//   const DFS = (level, sum) => {
//     if (found) return;
//     if (level === n) {
//       if (sum === f) {
//         answer.push(...permutations);
//         found = true;
//       }
//       return;
//     } else {
//       for (let i = 1; i <= n; i++) {
//         if (checkArr[i] === 0) {
//           checkArr[i] = 1;
//           permutations[level] = i;
//           DFS(level + 1, sum + permutations[level] * combinations[level]);
//           checkArr[i] = 0;
//         }
//       }
//     }
//   };
//   DFS(0, 0);
//   return answer;
// }

// console.log(solution(4, 16));

// 복습 2회차
// function solution(n, f) {
//   // 1. 조합 수 미리 구하기
//   const combinationCache = {};
//   const combinCacheKey = (n, r) => `${n}C${r}`;
//   const getCombinationNumber = (n, r) => {
//     if (combinationCache[combinCacheKey(n, r)]) {
//       return combinationCache[combinCacheKey(n, r)];
//     }
//     if (n === r || r === 0) {
//       return 1;
//     } else {
//       const result =
//         getCombinationNumber(n - 1, r - 1) + getCombinationNumber(n - 1, r);
//       combinationCache[combinCacheKey(n, r)] = result;
//       return result;
//     }
//   };

//   const combinationArr = [];
//   for (let i = 0; i < n; i++) {
//     combinationArr.push(getCombinationNumber(n - 1, i));
//   }

//   // 2. 순열을 구하면서 누적합이 답과 맞는지 확인하기
//   const permutations = Array(n).fill(0);
//   const answer = [];
//   const checkArr = Array(n).fill(0);
//   let foundAnswer = false;
//   const getPermutationAndSum = (level, sum) => {
//     if (foundAnswer) return;
//     if (level === n) {
//       if (sum === f) {
//         answer.push(...permutations);
//         foundAnswer = true;
//       }
//     } else {
//       // i가 순열의 숫자
//       for (let i = 1; i <= n; i++) {
//         if (checkArr[i - 1] === 0) {
//           checkArr[i - 1] = 1;
//           permutations[level] = i;
//           getPermutationAndSum(
//             level + 1,
//             sum + permutations[level] * combinationArr[level]
//           );
//           checkArr[i - 1] = 0;
//         }
//       }
//     }
//   };
//   getPermutationAndSum(0, 0);
//   return answer;
// }

// console.log(solution(4, 16));

// 복습 3회차
function solution(n, f) {
  // 0. 규칙을 찾고 어떤 순서로 풀어야 할지 생각하기
  // 1. 조합 수 미리 구하기
  const combinationNumbers = [];
  const combinationCache = {};
  const combKey = (n, r) => `${n}C${r}`;
  const getCombinationNumber = (n, r) => {
    const cachedCombinationNumber = combinationCache[combKey(n, r)];
    if (cachedCombinationNumber) return cachedCombinationNumber;
    if (n === r || r === 0) {
      return 1;
    } else {
      const result =
        getCombinationNumber(n - 1, r - 1) + getCombinationNumber(n - 1, r);
      combinationCache[combKey(n, r)] = result;
      return result;
    }
  };

  for (let i = 0; i < n; i++) {
    combinationNumbers.push(getCombinationNumber(n - 1, i));
  }

  // 2. 순열을 돌면서 미리 구한 조합수와 곱하면서 누적한 합을 마지막 숫자와 비교하기
  const permutation = Array(n).fill(0);
  let found = false;
  let answer = [];
  const checkArr = Array(n).fill(0);
  const getPermutationByLevelAndSum = (level, sum) => {
    if (found) return;
    if (level === n) {
      if (sum === f) {
        found = true;
        answer = [...permutation];
      }
    } else {
      for (let i = 0; i < n; i++) {
        if (checkArr[i] === 0) {
          checkArr[i] = 1;
          permutation[level] = i + 1;
          getPermutationByLevelAndSum(
            level + 1,
            sum + permutation[level] * combinationNumbers[level]
          );
          checkArr[i] = 0;
        }
      }
    }
  };

  getPermutationByLevelAndSum(0, 0);

  return answer;
}

console.log(solution(4, 16));
