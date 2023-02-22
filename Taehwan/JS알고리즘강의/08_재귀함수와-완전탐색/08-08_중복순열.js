/**
 * 중복순열 구하기
 * 1부터 N까지 번호가 적힌 구슬이 있습니다.
 * 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열 하는 방법을 모두 출력합니다.
 * 
 * [입력 설명]
 * 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
 * 
 * [출력 설명]
 * 첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다. 
 * 출력순서는 사전순으로 오름차순으로 출력합니다.
 * 
 * 입력 예제
 * 3 2
 * 
 * 출력 예제
1 1
1 2
1 3
2 1 
2 2 
2 3 
3 1 
3 2 
3 3 
9
 */

/**
 * 내 풀이
 * 그냥 2중 for문 돌리면 되는거잖아?
 * 아.. m이 2가 아닐 수도 있구나
 *
 * 재귀 + for문이라면?
 * @param {number} n 1부터 n 까지
 * @param {number} m m번 뽑기
 */
// function solution(n, m) {
//   let count = 0;
//   /**
//    * @param {number} num
//    * @param {number[]} arr
//    */
//   function DFS(num, arr) {
//     console.log("num", num);
//     console.log("arr", arr);
//     count++;
//     if (arr.length === m) {
//       console.log(...arr);
//       return;
//     } else {
//       for (let i = 1; i <= n; i++) {
//         DFS(
//           i,
//           [num, ...arr].sort((a, b) => a - b) // FIXME : 기존것을 제거해야 된다
//         );
//       }
//     }
//   }
//   DFS(n, []);
//   return count;
// }

// 강의 해설
// function solution(n, m) {
//   let answer = [];
//   let temp = Array.from({ length: m }, () => 0);
//   /**
//    * @param {number} L level
//    */
//   function DFS(L) {
//     // console.log("L", L);
//     if (L === m) {
//       // m : 2 ->
//       console.log("pop");
//       answer.push(temp.slice());
//     } else {
//       for (let i = 1; i <= n; i++) {
//         console.log("L", L);
//         console.log("i", i);
//         temp[L] = i;
//         DFS(L + 1);
//       }
//     }
//   }
//   DFS(0);
//   return answer;
// }

// console.log(solution(3, 2));

// 복습 - 1회차
// function solution(n, m) {
//   const answer = [];
//   const tempArr = Array(m).fill(0);
//   function DFS(level) {
//     if (level === m) {
//       answer.push([...tempArr]);
//       return;
//     } else {
//       for (let i = 1; i <= n; i++) {
//         tempArr[level] = i;
//         DFS(level + 1);
//       }
//     }
//   }
//   DFS(0);
//   return answer;
// }

// console.log(solution(3, 2));

// 복습 2회차
// 1부터 n까지 m번 뽑기 -> 순서대로 출력
function solution(n, m) {
  const answer = [];

  /**
   * @param {number} level
   * @param {number[]} arr
   */
  function DFS(level, arr) {
    if (level === m) {
      answer.push([...arr]);
    } else {
      for (let i = 1; i <= n; i++) {
        arr[level] = i;
        DFS(level + 1, arr);
      }
    }
  }
  DFS(0, [0, 0]);

  return answer;
}

console.log(solution(3, 2));
