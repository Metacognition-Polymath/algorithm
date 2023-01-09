/**
 * N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다. 또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.

첫 번째 줄에 정수 N(5<=N<=100)이 주어지고, 그 다음 줄부터 음수를 포함한 정수가 주어진 다. 숫자 0은 입력되지 않는다.

입력 예제: 1 2 3 -3 -2 5 6 -6
출력 예제: -3 -2 -6 1 2 3 5 6
 */

// /**
//  * 내 풀이
//  * @param {number[]} arr
//  * @returns {number[]}
//  */
// function solution(arr) {
//   const negativeArr = [];
//   const positiveArr = [];

//   arr.forEach((num) => {
//     if (num === 0) {
//       throw new Error("0은 입력되지 않습니다");
//     }
//     if (num < 0) {
//       negativeArr.push(num);
//     } else {
//       positiveArr.push(num);
//     }
//   });

//   const answer = [...negativeArr, ...positiveArr];
//   return answer;
// }

/**
 * 강의해설
 * 조건에 정렬을 사용해보는 것이므로 정렬을 사용한다
 */
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
