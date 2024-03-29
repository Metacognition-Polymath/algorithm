/**
 * N개의 정수가 주어지면
 * 그 숫자들 중 K개를 뽑는 조합의 합이
 * 임의의 정수 M의 배수인 개수 는 몇 개가 있는지
 * 출력하는 프로그램을 작성하세요.
 * 예를 들면 5개의 숫자 2 4 5 8 12가 주어지고,
 * 3개를 뽑은 조합의 합이 6의 배수인 조합을 찾으면
 * 4+8+12, 2+4+12로 2가지가 있습니다.
 */

// /**
//  *
//  * @param {number} n n개의 숫자
//  * @param {number} k k개를 뽑는다
//  * @param {number[]} arr n개의 숫자가 들어있는 배열
//  * @param {number} m 정수 m의 배수가 몇 개인지 찾으세요
//  */
// function solution(n, k, arr, m) {
//   let answer = 0;
//   let tmp = Array.from({ length: k });
//   /**
//    * @param {number} L level
//    * @param {number} s start number
//    * @param {number} sum 뽑은 숫자들의 합이 누적되는 숫자
//    */
//   function DFS(L, s, sum) {
//     if (L === k) {
//       if (sum % m === 0) answer++;
//       console.log(sum, tmp);
//     } else {
//       // 이전 문제와는 달리 이번엔 n은 index 번호이다
//       // 그래서 s도 0부터 시작
//       for (let i = s; i < n; i++) {
//         tmp[L] = arr[i];
//         DFS(L + 1, i + 1, sum + arr[i]);
//       }
//     }
//   }
//   DFS(0, 0, 0);
//   return answer;
// }

// let arr = [2, 4, 5, 8, 12];
// console.log(solution(5, 3, arr, 6));

// 복습 2회차
// /**
//  *
//  * @param {number} n n개의 숫자
//  * @param {number} k k개를 뽑는다
//  * @param {number[]} arr n개의 숫자가 들어있는 배열
//  * @param {number} m 정수 m의 배수가 몇 개인지 찾으세요
//  */
// function solution(n, k, arr, m) {
//   let count = 0;
//   // 0. 어떻게 풀 것인지 규칙을 찾고 접근 방법을 적어본다
//   // 1. 조합을 구하면서 조합의 요소 합이 정수 m의 배수가 맞는지 검사 후 맞다면 count를 올려준다
//   const tempArr = Array(k).fill(0);
//   const DFS = (level, start, sum) => {
//     if (level === k) {
//       console.log(tempArr);
//       if (sum % m === 0) {
//         count++;
//       }
//     } else {
//       for (let i = start; i < n; i++) {
//         tempArr[level] = arr[i];
//         DFS(level + 1, i + 1, sum + tempArr[level]);
//       }
//     }
//   };
//   DFS(0, 0, 0);
//   return count;
// }

// let arr = [2, 4, 5, 8, 12];
// console.log(solution(5, 3, arr, 6));

/**
 *
 * @param {number} n n개의 숫자
 * @param {number} k k개를 뽑는다
 * @param {number[]} arr n개의 숫자가 들어있는 배열
 * @param {number} m 정수 m의 배수가 몇 개인지 찾으세요
 */
function solution(n, k, arr, m) {
  // 조합을 구하면서 조합의 각 원소의 합이 정수 m의 배수가 되면 count를 올린다
  let count = 0;
  const tempArr = Array(k).fill(0);
  const DFS = (level, start, sum) => {
    if (level === k) {
      console.log(tempArr, sum);
      if (sum % m === 0) {
        count++;
      }
    } else {
      for (let i = start; i < n; i++) {
        tempArr[level] = arr[i];
        DFS(level + 1, i + 1, sum + tempArr[level]);
      }
    }
  };
  DFS(0, 0, 0);

  return count;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
