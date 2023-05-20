/**
 * 이번 정보올림피아드대회에서 좋은 성적을 내기 위하여
 * 현수는 선생님이 주신 N개의 문제를 풀려고 합니다.
 * 각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩 니다.
 * 제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합니다.
 * (해당문제는 해당시간이 걸리면 푸는 걸로 간주한다,
 * 한 유형당 한개만 풀 수 있습니다.)

▣ 입력설명
첫 번째 줄에 문제의 개수N(1<=N<=20)과 제한 시간 M(10<=M<=300)이 주어집니다.
두 번째 줄부터 N줄에 걸쳐 문제를 풀었을 때의 점수와 푸는데 걸리는 시간이 주어집니다.

▣ 출력설명
첫 번째 줄에 제한 시간안에 얻을 수 있는 최대 점수를 출력합니다.

▣ 입력예제 1
(문제 수 / 총 제한 시간)
5 20
(점수 / 걸리는 시간)

10 5
25 12
15 8 
6 3 
7 4

▣ 출력예제 1 
41
 */
/**
 *
 * @param {number} m 제한 시간
 * @param {number[][]} arr
 */
// function solution(m, arr) {
//   let dy = Array.from({ length: m + 1 }, () => 0); // 뒤에서 부터할 땐 0으로 초기화
//   for (let i = 0; i < arr.length; i++) {
//     let score = arr[i][0];
//     let time = arr[i][1];
//     // 중복적용을 안하려면 뒤에서 부터
//     for (let j = m; j >= time; j--) {
//       dy[j] = Math.max(dy[j], dy[j - time] + score);
//     }
//     console.log(dy);
//   }
//   return dy[m];
// }

// let arr = [
//   [10, 5],
//   [25, 12],
//   [15, 8],
//   [6, 3],
//   [7, 4],
// ];
// console.log(solution(20, arr));

// 다시 풀어보기
// function solution(m, arr) {
//   const dy = Array.from({ length: m + 1 }, () => 0);
//   for (let i = 0; i < arr.length; i++) {
//     const [score, time] = arr[i];
//     // 제한이 있는 것으로 dy 배열을 만들고 끝에서 해당 시간까지 순회한다
//     // 뒤에서 순회하는 이유는 현재 시간에서 빼서 앞의 시간에 존재하는 점수에 더 하면서 나아가는데,
//     // 앞에서 부터 순회하면 중복되기 때문에 뒤에서 순회한다
//     for (let j = m; j >= time; j--) {
//       dy[j] = Math.max(dy[j], dy[j - time] + score);
//     }
//     console.log("dy", dy);
//   }

//   return dy[m];
// }

// let arr = [
//   [10, 5],
//   [25, 12],
//   [15, 8],
//   [6, 3],
//   [7, 4],
// ];
// console.log(solution(20, arr));

// 다시 풀어보기 2
// function solution(m, arr) {
//   const dy = Array.from({ length: m + 1 }, () => 0);
//   for (let i = 0; i < arr.length; i++) {
//     const [score, time] = arr[i];
//     // 중복되지 않도록 뒤에서 부터 순회
//     for (let j = m; j >= time; j--) {
//       dy[j] = Math.max(dy[j], dy[j - time] + score);
//     }
//     console.log(dy);
//   }
//   return dy[m];
// }

// let arr = [
//   [10, 5],
//   [25, 12],
//   [15, 8],
//   [6, 3],
//   [7, 4],
// ];
// console.log(solution(20, arr));

// 복습 1회차
// function solution(m, arr) {
//   const dy = Array.from({ length: m + 1 }, () => 0);

//   /**
//    * knapsack의 기본은 경우의 수를 늘려나가면서 점화식을 완성시키는 것이다
//    * 한번만 사용해야되는 것은 뒤에서 부터 순회하고
//    * 제한된 자원만큼 만들어진 배열에서
//    * - 각 제한된 자원만큼의 앞의 가치 + 현재 가치를 더 한 것과
//    *   기존 가치와 비교하면서 최적의 해를 찾는다
//    */
//   for (let i = 0; i < arr.length; i++) {
//     const [score, time] = arr[i];
//     for (let j = m; j >= time; j--) {
//       dy[j] = Math.max(dy[j], dy[j - time] + score);
//     }
//     console.log("dy", dy);
//   }

//   return dy[m];
// }

// let arr = [
//   [10, 5],
//   [25, 12],
//   [15, 8],
//   [6, 3],
//   [7, 4],
// ];
// console.log(solution(20, arr));

// 복습 2회차
// function solution(m, arr) {
//   /**
//    * knapsack 기본
//    * 경우의 수를 늘려 나가면서 점화식을 완성한다
//    * 동적프로그래밍 배열(dy)은 제한된 자원 + 1개 만큼 만들고
//    * dy의 각 인덱스는 2중 for문의 안쪽 for문인 j와 대응된다
//    */
//   // 중복해서 사용할 수 없으므로 0으로 초기화 후 뒤에서 부터 순회한다
//   const dy = Array.from({ length: m + 1 }, () => 0);

//   for (let i = 0; i < arr.length; i++) {
//     const [score, time] = arr[i];
//     // 중복을 허용하지 않으므로 뒤에서 부터 순회(제한된 자원 부터 현재 경우의 수의 제한된 자원까지)
//     for (let j = m; j >= time; j--) {
//       // 제한된 자원에서 최대 가치(score)를 찾는다
//       dy[j] = Math.max(dy[j], dy[j - time] + score);
//     }
//     console.log(dy);
//   }

//   return dy[m];
// }

// let arr = [
//   [10, 5],
//   [25, 12],
//   [15, 8],
//   [6, 3],
//   [7, 4],
// ];
// console.log(solution(20, arr));

// 복습 3회차
function solution(m, arr) {
  /**
   * knapsack 기본
   * 경우의 수를 늘려 나가면서 점화식을 완성한다
   * 동적프로그래밍 배열(dy)은 제한된 자원 + 1개 만큼 만들고
   * dy의 각 인덱스는 2중 for문의 안쪽 for문인 j와 대응된다
   */
  // 중복해서 사용할 수 없으므로 0으로 초기화 후 뒤에서 부터 순회한다
  const dy = Array.from({ length: m + 1 }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    const [score, time] = arr[i];
    for (let j = m; j >= time; j--) {
      dy[j] = Math.max(dy[j], dy[j - time] + score);
    }
    console.log(dy);
  }

  return dy[m];
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
