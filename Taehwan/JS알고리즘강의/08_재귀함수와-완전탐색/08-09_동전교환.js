/**
 * 다음과 같이 여러 단위의 동전들이 주어져 있을때 
 * 거스름돈을 가장 적은 수의 동전으로 교환 해주려면 어떻게 주면 되는가? 
 * 각 단위의 동전은 무한정 쓸 수 있다.
▣ 입력설명
첫 번째 줄에는 동전의 종류개수 N(1<=N<=12)이 주어진다. 두 번째 줄에는 N개의 동전의 종 류가 주어지고, 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다.
각 동전의 종류는 100원을 넘지 않는다.
▣ 출력설명
첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다.
 */

/**
 * 내 풀이
 * @param {number} m 받은 돈
 * @param {number[]} arr 거스름돈 종류
 * @returns
 */
// function solution(m, arr) {
//   const descCoins = [...arr].sort((a, b) => b - a);
//   const money = m;
//   let minCoinCount = Number.MAX_SAFE_INTEGER;
//   let tempArr = [];
//   function DFS(level, sum) {
//     if (sum > money) return;
//     if (tempArr.length >= minCoinCount) return;
//     if (sum === money) {
//       console.log(tempArr);
//       minCoinCount = Math.min(tempArr.length, minCoinCount);
//     } else {
//       for (let i = 0; i < arr.length; i++) {
//         tempArr.push(descCoins[i]);
//         DFS(level + 1, sum + descCoins[i]);
//         // console.log(tempArr);
//         tempArr.pop();
//       }
//     }
//   }

//   DFS(0, 0);

//   if (minCoinCount === Number.MAX_SAFE_INTEGER) {
//     return -1;
//   }
//   return minCoinCount;
// }

// let arr = [1, 2, 5];
// console.log(solution(15, arr));

// 강의 해설
// level이 곧 사용한 동전 개수 이다
function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;
  function DFS(level, sum) {
    if (sum > m) return;
    if (level >= answer) return;
    if (sum === m) {
      console.log(level, sum);
      answer = Math.min(answer, level);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(level + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
