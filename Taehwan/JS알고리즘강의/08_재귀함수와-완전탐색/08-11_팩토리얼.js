/**
 * 팩토리얼
 * 자연수 N을 입력하면 N!값을 구하세요.
 * N! = n*(n-1)*(n-2)*.....*2*1입니다.
 * 만약 N=5라면 5!=5*4*3*2*1=120입니다.
 */

// /**
//  * 내 풀이
//  * @param {number} n
//  */
// function solution(n) {
//   let answer = n;
//   for (let i = n - 1; i >= 1; i--) {
//     answer = answer * i;
//   }
//   return answer;
// }

// 강의 해설
/**
 * 조합을 공부할 때 이해를 돕기 위한 문제
 * 포인트 : 재귀함수가 값을 리턴하는 형태
 * D(5) => 5 * D(4)
 * D(4) => 4 * D(3)
 * D(3) => 3 * D(2)
 * D(2) => 2 * D(1)
 * D(1) => 1
 * @param {number} n
 */
// function solution(n) {
//   let answer = n;
//   function DFS(num) {
//     if (num === 1) return 1;
//     else {
//       return num * DFS(num - 1);
//     }
//   }
//   answer = DFS(n);
//   return answer;
// }

// console.log(solution(5));

// 복습 1회차
// function solution(n) {
//   function DFS(num) {
//     if (num === 1) {
//       return 1;
//     } else {
//       return num * DFS(num - 1);
//     }
//   }
//   return DFS(n);
// }

// console.log(solution(5));

// 복습 2회차
function solution(n) {
  const DFS = (num) => {
    if (num === 1) {
      return 1;
    } else {
      return num * DFS(num - 1);
    }
  };
  return DFS(n);
}

console.log(solution(5));
