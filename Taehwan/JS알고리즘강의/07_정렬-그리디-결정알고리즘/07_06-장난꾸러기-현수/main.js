/**
 * 문제
 * 현수네 반에는 N명의 학생들이 있습니다.
 * 반 학생들을 키가 가장 작은 학 생부터 일렬로 키순으로 세웠습니다.
 * 가장 작은 학생부터 반 번호를 1번부터 N번까 지 부여합니다.
 * 현수는 짝꿍보다 키가 큽니다.
 * 그런데 현수가 앞 번호를 받고 싶어 짝꿍과 자 리를 바꿨습니다.
 * 선생님은 이 사실을 모르고 학생들에게 서있는 순서대로 번호를 부여했습니다.
 * 현수와 짝꿍이 자리를 바꾼 반 학생들의 일렬로 서있는 키 정보가 주어질 때
 * 현수가 받은 번 호와 현수 짝꿍이 받은 번호를 차례로 출력하는 프로그램을 작성하세요.
 * 입력 예제1 : 120 125 152 130 135 135 143 127 160
 * 출력 예제1 : 3 8
 * 입력 예제2 : 120 130 150 150 130 150
 * 출력 예제2 : 3 5
 *
 */
// /**
//  * 내 풀이
//  * @param {number[]} arr
//  * @returns {number[]}
//  */
// function solution(arr) {
//   /**
//    * 현수는 짝궁 보다 키가 크므로 0번째(1번)는 아님
//    * 짝궁과 자리를 바꿨으므로 마지막도 아님
//    * 방법1
//    * - 찾는 조건 : 앞 뒤를 비교해서 앞보다 크고 뒤보다 작은 것이 아니면 해당 인덱스를 찾는다
//    * 방법2
//    * - 오름차순으로 정렬 후 다른 것을 찾아낸다
//    *
//    * 방법2가 더 좋은 것 같다
//    */
//   const sortedArr = [...arr].sort((a, b) => a - b); // 오름차순 정렬
//   const answer = arr
//     .map((studentHeight, index) => {
//       if (studentHeight !== sortedArr[index]) {
//         return index + 1;
//       }
//     })
//     .filter((num) => num);

//   return answer;
// }

/**
 * 강의 해설
 * 정렬을 하면 쉽게 풀리는 문제입니다
 */
// function solution(arr) {
//   let answer = [];
//   let sortArr = arr.slice(); // 복사
//   // sortArr.sort(); // 문자 기준으로 정렬해서 99가 더 작은데도 더 뒤로 감
//   sortArr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== sortArr[i]) {
//       answer.push(i + 1);
//     }
//   }
//   return answer;
// }

// let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
// // let arr = [120, 130, 150, 150, 130, 150];
// console.log(solution(arr));

// 복습 1회차
function solution(arr) {
  let answer = [];
  const sortedArr = [...arr].sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160])); // 3 8
