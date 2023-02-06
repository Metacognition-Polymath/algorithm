/**
 * 재귀 함수
 * 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.
 */
// /**
//  * 내 풀이
//  * n부터 시작해서 1이 될때 까지 1씩 감소하면서 전역변수에 더해보자
//  * @param {number} n
//  */
// function solution(n) {
//   let sum = 0;
//   function addToSum(num) {
//     sum += num;
//     if (num >= 1) {
//       addToSum(num - 1);
//     }
//   }
//   addToSum(n);
//   return sum;
// }

// console.log(solution(3));

// /**
//  * 내 풀이 다시
//  * 문제 이해를 잘못 했다
//  * 순서대로 1, 2, 3을 출력하자
//  * 1부터 n까지 1씩 커지면서 출력을 해보자
//  * @param {number} n
//  */
// function solution(n) {
//   function print(num) {
//     if (num <= n) {
//       console.log(num);
//       print(num + 1);
//     }
//   }
//   print(1);
// }

// solution(3);

/**
 * 강의 해설
 * DFS(Depth First Search) : 깊이 우선 탐색
 * 트리 형태
 * 0레벨
 * 1레벨
 * 2레벨
 * ...
 *
 * DFS(3) -> DFS(2) -> DFS(1) -> DFS(0) -> 종료
 *
 * 재귀함수는 반복문하고 비슷한데 왜 쓸지는 나중에 알아보자
 *
 * call stack에 함수가 저장되기 때문에 재귀함수 다음에 어떤 코드가 있다면 스택의 최상위 부터 실행
 * stack frame에 저장되는 것들
 * - 매개변수, 지역변수, 복귀 주소
 * @param {number} n
 */
function solution(n) {
  function DFS(L) {
    if (L == 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(n);
}

solution(3);
