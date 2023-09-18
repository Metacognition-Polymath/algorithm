/**
 * 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
 * 예를 들어, 주어진 정수가 [6, 10, 2]라면
 * [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고,
 * 이중 가장 큰 수는 6210입니다.
 * 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때,
 * 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.
 *
 * 입출력 예
 * numbers => return
 * [6, 10, 2] => "6210"
 * [3, 30, 34, 5, 9] => "9534330"
 */
/**
 * 전략
 * 정렬을 첫 번째 숫자를 기준으로 정렬
 * 만약 자리수가 2자리 수 이상이면 두번째 숫자를 비교 후 두번째 숫자가 큰게 앞으로 온다
 * @param {number[]} numbers
 */

// 스스로 풀어보기
// function solution(numbers) {
//   const getNumber = (num) => {
//     if (num === "0") {
//       return -1;
//     }
//     if (num === undefined) {
//       return 0;
//     }
//     return num;
//   };
//   const compare = (a, b, index) => {
//     let aNum = getNumber(a[index]);
//     let bNum = getNumber(b[index]);
//     if (aNum === 0 && bNum === 0) {
//       return bNum - aNum;
//     }
//     if (aNum === bNum) {
//       return compare(a, b, index + 1);
//     }
//     return bNum - aNum;
//   };
//   const sorted = numbers
//     .map((a) => a.toString())
//     .sort((a, b) => {
//       return compare(a, b, 0);
//     });
//   return sorted.join("");
// }

// console.log(solution([6, 10, 2]));
// console.log(solution([3, 30, 34, 5, 9]));

// 다른 사람 풀이
// function solution(numbers) {
//   // 숫자 배열을 문자열로 변환하고 비교 함수를 사용하여 정렬
//   const sortedNumbers = numbers.map(String).sort((a, b) => b + a - (a + b));

//   // 만들어진 가장 큰 수가 0으로 시작할 경우, 결과는 "0"이어야 함
//   if (sortedNumbers[0] === "0") {
//     return "0";
//   }

//   // 가장 큰 수로 조합된 문자열 반환
//   return sortedNumbers.join("");
// }

// // 테스트 예제
// console.log(solution([6, 10, 2])); // "6210"
// console.log(solution([3, 30, 34, 5, 9])); // "9534330"

// 복습 1회차
function solution(numbers) {
  const sortedNumbers = numbers.map(String).sort((a, b) => b + a - (a + b));

  if (sortedNumbers[0] === "0") {
    return "0";
  }

  return sortedNumbers.join("");
}

// 테스트 예제
console.log(solution([6, 10, 2])); // "6210"
console.log(solution([3, 30, 34, 5, 9])); // "9534330"
