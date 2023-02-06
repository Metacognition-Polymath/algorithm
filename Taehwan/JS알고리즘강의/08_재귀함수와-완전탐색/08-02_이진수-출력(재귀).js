/**
 * 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요.
 * 단 재귀함수를 이용 해서 출력해야 합니다.
 */
// /**
//  * 내 풀이
//  * 2진수를 구하는 방법을 먼저 알아보자
//  * 1 -> 1 - 나머지
//  * 2 -> 10 - 몫, 나머지
//  * 3 -> 11
//  * 4 -> 100 - 몫, 나머지, 나머지
//  *
//  * 2로 나눈 몫이 2 이상이면 다시 재귀를 호출
//  * 2로 나눈 몫이 2보다 작으면 나머지를 출력
//  * @param {number} n
//  * @returns number
//  */
// function solution(n) {
//   let answer = "";
//   function DFS(num) {
//     console.log("num", num);
//     const quotient = parseInt(num / 2);
//     const remainder = num % 2;
//     if (quotient === 0) {
//       answer += `${remainder}`;
//       return;
//     } else {
//       DFS(quotient);
//       answer += `${remainder}`;
//     }
//   }
//   DFS(n);
//   return answer;
// }

// console.log(solution(11));

/**
 * 강의 해설
 * stack frame을 살펴보자
 * DFS(11) -> DFS(5) -> DFS(2) -> DFS(1)
 * DFS(11) <- DFS(5) <- DFS(2) <- DFS(1)
 * @param {number} n
 * @returns number
 */
function solution(n) {
  let answer = "";
  function DFS(num) {
    console.log("num", num);
    if (num === 0) {
      // 종착점
      return;
    } else {
      // 재귀 호출 앞에서 출력하면 순서대로 출력
      DFS(parseInt(num / 2)); // 재귀함수는 조건문 시작전에 뭘하는게 아니라 함수 호출 부분에서 계산을 해야되는 구나
      // 재귀 호출 뒤에서 출력하면 역순으로 출력
      answer += String(num % 2);
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(11));
