/**
 * 문제
 * N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 선택정렬입니다.
 * 입력 예제 : 13 5 11 7 23 15
 * 출력 예제 : 5 7 11 13 15 23
 */

/**
 * 내 풀이
 */
// function solution(arr) {
//   let answer = arr;
//   arr.sort((a, b) => a - b);
//   return answer;
// }

/**
 * 강의 해설
 */
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) {
        idx = j;
      }
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]]; // 얕은 복사는 arr을 바꾸면 answer도 바뀜
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
