/**
 * 조합의 경우수(메모이제이션)
 * nCr = n!/((n-r)!r!) 로 계산합니다.
 * 하지만 여러분은 이 공식을 쓰지않고 다음 공식을 사용하여
 * nCr = n-1Cr-1 + n-1Cr
 * 재귀를 이용해 조합수를 구해주는 프로그램을 작성하세요.
 */
/**
 * 조합 설명
 * 5C3 : 5개 중에서 3개를 뽑는 방법
 * 5개 중 3개를 순열로 나열하는 방법 : 5 * 4 * 3
 * 그 중 중복을 제거 : 3 * 2 * 1
 * 5C3 = (5*4*3) / (3*2*1)
 * => 5! / ((5-3)!*3!)
 *
 * 이번에 우리가 사용할 공식
 * 5C3 = 4C2 + 4C3
 * e.g. [1, 2, 3, 4, 5]
 * 이 중에서 3개를 뽑는다
 * 5의 입장에서 생각해보자
 * 일단 5개 중에서 3개를 뽑는건 10가지
 * 10가지를 2가지의 경우로 분류
 * 5가 들어가는 경우, 5가 들어가지 않는 경우
 * 5가 들어간 경우 -> 4개 중에서 2개를 뽑는 경우의 수와 같음
 * 5가 들어가지 않은 경우 -> 4개 중에서 3개를 뽑는 경우와 같다
 * => 5C3 = 4C2 + 4C3
 * 4C2 => 3C1 + 3C2
 * 4C3 => 3C2 + 3C3
 */
/**
 * @param {number} n
 * @param {number} r
 */
// function solution(n, r) {
//   let answer;
//   function DFS(_n, _r) {
//     if (_n === _r || _r === 0) {
//       return 1;
//     } else {
//       return DFS(_n - 1, _r - 1) + DFS(_n - 1, _r);
//     }
//   }
//   answer = DFS(n, r);
//   return answer;
// }

// console.log(solution(5, 3));

// 메모이제이션 적용 : 이미 구한 것은 다시 구하지 말자
// function solution(n, r) {
//   // type dy = number[][]; // dynamic array
//   let answer;
//   const dy = Array.from(Array(r + 1), () => Array(n + 1).fill(0)); // 행이 r개 열이 n개인 0으로 초기화된 2차원 배열
//   function DFS(_n, _r) {
//     if (dy[_r][_n] > 0) return dy[_r][_n];
//     if (_n === _r || _r === 0) return 1;
//     else {
//       dy[_r][_n] = DFS(_n - 1, _r - 1) + DFS(_n - 1, _r);
//       return dy[_r][_n];
//     }
//   }
//   answer = DFS(n, r);
//   return answer;
// }

// console.log(solution(33, 19));

// 복습 1회차
// nCr = n-1Cr-1 + n-1Cr
function solution(n, r) {
  const cacheMap = {};
  const getCacheMapKey = (n, r) => {
    return `${n}_${r}`;
  };
  function DFS(_n, _r) {
    if (cacheMap[getCacheMapKey(_n, _r)] !== undefined) {
      return cacheMap[getCacheMapKey(_n, _r)];
    }
    if (_n === _r || _r === 0) {
      return 1;
    } else {
      cacheMap[getCacheMapKey(_n, _r)] = DFS(_n - 1, _r - 1) + DFS(_n - 1, _r);
      return cacheMap[getCacheMapKey(_n, _r)];
    }
  }
  return DFS(n, r);
}

console.log(solution(33, 19));
