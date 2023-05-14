/**
 * 다음과 같이 여러 단위의 동전들이 주어져 있을때
 * 거스름돈을 가장 적은 수의 동전으로 교환 해주려면 어떻게 주면 되는가?
 * 각 단위의 동전은 무한정 쓸 수 있다.


▣ 입력설명
첫 번째 줄에는 동전의 종류개수 N(1<=N<=12)이 주어진다. 두 번째 줄에는 N개의 동전의 종 류가 주어지고, 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다.
각 동전의 종류는 100원을 넘지 않는다.

▣ 출력설명
첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다.

▣ 입력예제 1 
3
125
15

▣ 출력예제 1 
3

냅색 : 가방
DFS를 이용한 완전 탐색으로 풀어봤었다
그러나 동전의 종류도 많고 금액도 크다면 DFS로 시간초과가 날 수 있다
어떻게 작은 단위에서 점점 확대해나갈까?
 */
/**
 *
 * @param {number} m
 * @param {number[]} coin
 */
// function solution(m, coin) {
//   let answer = 0;
//   let dy = Array.from({ length: m + 1 }, () => Number.MAX_SAFE_INTEGER);
//   dy[0] = 0;
//   for (let i = 0; i < coin.length; i++) {
//     // 1, 2, 5원짜리를 순회하면서 구한다
//     // 1원짜리로만 구했을 때
//     // 1원짜리를 기반으로 2원짜리를 사용해서 구한 것을 구하고
//     // 1원, 2원을 기반으로 5원짜리 사용한 것을 구한다
//     for (let j = coin[i]; j <= m; j++) {
//       // 현재 코인의 금액만 큼 이전것의 개수 + 1(현재 코인을 한개 사용하므로)
//       dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1); // 기존 개수와 새로 구한 개수를 비교해서 작은 값으로 갱신
//     }
//     console.log(dy);
//   }
//   answer = dy[m];
//   return answer;
// }

// let arr = [1, 2, 5];
// console.log(solution(15, arr));

// 혼자서 풀어보기
// function solution(m, coin) {
//   const dy = Array.from({ length: m + 1 }, () => Number.MAX_SAFE_INTEGER);
//   dy[0] = 0;
//   for (let i = 0; i < coin.length; i++) {
//     for (let j = coin[i]; j <= m; j++) {
//       dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
//     }
//     console.log("dy", dy);
//   }

//   return dy[m];
// }

// let arr = [1, 2, 5];
// console.log(solution(15, arr));

// 혼자서 풀어보기2
// function solution(m, coin) {
//   const dy = Array.from({ length: m + 1 }, () => Number.MAX_SAFE_INTEGER);
//   dy[0] = 0;
//   for (let i = 0; i < coin.length; i++) {
//     for (let j = coin[i]; j <= m; j++) {
//       dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
//     }
//     console.log(dy);
//   }

//   return dy[m];
// }

// let arr = [1, 2, 5];
// console.log(solution(15, arr));

// 복습 1회차
// m: 줘야할 거스름돈, coin: 동전 종류
// function solution(m, coin) {
//   // 점화식을 구해서 최적의 값을 계속 찾는다
//   const dy = Array.from({ length: m + 1 }, () => Number.MAX_SAFE_INTEGER);
//   dy[0] = 0;
//   for (let i = 0; i < coin.length; i++) {
//     for (let j = coin[i]; j <= m; j++) {
//       // 현재 인덱스에 해당하는 동전을 하나 사용한다면
//       dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
//     }
//     console.log(dy);
//   }

//   return dy[m];
// }

// let arr = [1, 2, 5];
// console.log(solution(15, arr));

// function solution(m, coin) {
//   // 점화식을 구해서 최적의 값을 계속 찾는다
//   const dy = Array.from({ length: m + 1 }, () => Number.MAX_SAFE_INTEGER);
//   dy[0] = 0;
//   for (let i = 0; i < coin.length; i++) {
//     for (let j = coin[i]; j <= m; j++) {
//       dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
//     }
//     console.log(dy);
//   }

//   return dy[m];
// }

// let arr = [1, 2, 5];
// console.log(solution(15, arr));

// 복습 2회차
// 동전 종류가 주어질 때, 가장 적은 동전 개수를 사용해서 거스름돈을 주려면?
// function solution(m, coin) {
//   const dy = Array.from({ length: m + 1 }, () => Number.MAX_SAFE_INTEGER);
//   // 최소 값을 구하므로 초기값은 큰 수로 채운다
//   // 점화식 관계를 세운다
//   /**
//    * 1, 2, 5 -> 6원
//    * 1원만으로 채울 때 -> 가장 큼
//    * 1, 2원을 사용해서 채울 때 -> 조금 더 작음
//    * 5원까지 사용해서 채울 때 -> 가장 작음
//    */
//   dy[0] = 0;
//   for (let i = 0; i < coin.length; i++) {
//     for (let j = coin[i]; j <= m; j++) {
//       dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
//     }
//     // console.log(dy);
//   }

//   return dy[m];
// }

// let arr = [1, 2, 5];
// console.log(solution(15, arr));

// 복습 3회차
function solution(m, coin) {
  // dy
  const dy = Array.from({ length: m + 1 }, () => Number.MAX_SAFE_INTEGER);

  // 초기값 - 0원을 거를러준다 : 동전을 0개 준다
  dy[0] = 0;

  // knapsack
  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
    console.log(dy);
  }

  return dy[m];
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
