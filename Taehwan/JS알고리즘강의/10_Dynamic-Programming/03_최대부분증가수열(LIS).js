/**
 * 최대 부분 증가수열
 *
 * N개의 자연수로 이루어진 수열이 주어졌을 때,
 * 그 중에서 가장 길게 증가하는(작은 수에서 큰 수로)
 * 원소들의 집합을 찾는 프로그램을 작성하라.
 * 예를 들어, 원소가 2, 7, 5, 8, 6, 4, 7, 12, 3 이면
 * 가장 길게 증가하도록 원소들을 차례대로 뽑아내면
 * 2, 5, 6, 7, 12를 뽑아내어
 * 길 이가 5인 최대 부분 증가수열을 만들 수 있다.
 * - 내 생각) 순서는 유지하되 건너 뛸 수 있는 것 같다
 */
// 혼자 도전해보기
/**
 * @param {number[]} arr
 */
// function solution(arr) {
//   // 1. 정답 배열
//   let subArr = [];
//   let answerArr = [];
//   let maxSubArrLength = 0;

//   // 2. arr의 0번째 부터 n-2까지 돌면서 한번씩 정답배열의 처음 값이 된다
//   for (let i = 0; i < arr.length - 2; i++) {
//     subArr = [arr[i]]; // 처음 값으로 초기화
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       const subArrLastNumber = subArr[subArr.length - 1];
//       console.log("arr[j] : ", arr[j]);
//       console.log("subArrLastNumber : ", subArrLastNumber);
//       if (arr[j] > subArrLastNumber) {
//         subArr.push(arr[j]);
//       }
//     }
//     if (maxSubArrLength < subArr.length) {
//       console.log("maxSubArrLength changed");
//       console.log(subArr);
//       answerArr = subArr;
//       maxSubArrLength = subArr.length;
//     }
//   }

//   console.log(answerArr);
//   return maxSubArrLength;
//   /**
//    * 문제점
//    * 중간에 큰 숫자가 있는 경우를 체크하지 못함
//    * 예) 2, 7, 5라면 2,7이 아닌 2, 5를 넣어야 하는데 그것을 체크하지 못함
//    */
// }

// console.log(solution([2, 7, 5, 8, 6, 4, 7, 12, 3]));
// console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));

// 강의 해설
// function solution(arr) {
//   let answer = 0;
//   /**
//    * dy[i] : arr의 i번째 숫자가 증가 수열의 마지막 숫자일 때 원소 개수
//    */
//   const dy = Array.from({ length: arr.length }, () => 0);
//   dy[0] = 1;
//   for (let i = 1; i < arr.length; i++) {
//     let max = 0; // 다 돌아서 아무것도 발견하지 못할 경우를 대비해서
//     for (let j = i - 1; j >= 0; j--) {
//       // i - 1 ~ 0 번째 까지 뒤로 탐색
//       const isSmaller = arr[j] < arr[i]; // i번째보다 j번째가 작아야 앞의 항이 될 수 있다
//       if (isSmaller && dy[j] > max) {
//         max = dy[j];
//       }
//     }
//     dy[i] = max + 1;
//     answer = Math.max(answer, dy[i]);
//   }

//   console.log("dy", dy);
//   return answer;
// }

// console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));

// 혼자서 풀어보기
// function solution(arr) {
//   // 순서가 변함이 없을 때 최대 부분 증가 수열
//   const dy = Array.from({ length: arr.length }, () => 0); // arr[i]가 마지막일 때 최대 부분 증가 수열의 원소의 개수
//   dy[0] = 1;
//   for (let i = 1; i < arr.length; i++) { // 순차적으로 확인
//     let max = 0; // 임시 부분 증가 수열의 최대 수
//     for (let j = i - 1; j >= 0; j--) { // 역순으로 해당 숫자 보다 작은 인덱스의 숫자들을 확인하면서 최대 부분 증가 수를 구함
//       const isSmaller = arr[j] < arr[i];
//       if (isSmaller && dy[j] > max) {
//         max = dy[j];
//       }
//     }
//     dy[i] = max + 1;
//   }

//   console.log("dy", dy);
//   return Math.max(...dy);
// }

// console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));

// 복습 1회차
function solution(arr) {
  /**
   * 최대 부분 증가 수열의 수는 어떻게 구해지는가?
   * 해당 인덱스의 숫자를 기준으로 뒤에 있는 인덱스에 해당하는 숫자들을 검사
   * dynamic programming : 점진적으로 앞에서 부터 구한 결과를 이용해서 뒤의 결과를 구함
   * 0번째에 해당하는 현재의 수가 마지막이라면 전체 부분집합의 수는 1
   * 1번째에 해당하는 수가 마지막이라면 0번째(n-1번째) 이하의 수 중에서 자신보다 작은 수의 최대 부분집합 수를 비교해서 가장 큰 부분집합의 수 + 1
   */
  /**
   * @type subArrayMap {[number]: number[]}
   */
  const subArrayMap = Array.from({ length: arr.length }, () => []);

  // console.log("subArrayMap initial", subArrayMap);

  const dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;
  subArrayMap[0].push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    let tempMax = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > tempMax) {
        tempMax = dy[j];
      }
      if (arr[j] < arr[i] && subArrayMap[j].length > subArrayMap[i].length) {
        subArrayMap[i] = [...subArrayMap[j]];
      }
    }
    dy[i] = tempMax + 1;
    subArrayMap[i].push(arr[i]);
  }

  console.log("dy", dy);
  console.log("subArrayMap", subArrayMap);
  return Math.max(...dy);
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
