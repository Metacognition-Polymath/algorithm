/**
 * 마구간 정하기
 * N개의 마구간이 수직선상에 있습니다. 각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며, 마 구간간에 좌표가 중복되는 일은 없습니다.
 * 현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다.
 * 각 마구간에는 한 마리의 말만 넣을 수 있고, 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶습니다.
 * C마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 그 최대 값을 출력하는 프로그램을 작성하세요.
 *
 * # 입력 설명
 * 첫 줄에 자연수 N(3<=N<=200,000)과 C(2<=C<=N)이 공백을 사이에 두고 주어집니다.
 * 둘째 줄에 마구간의 좌표 xi(0<=xi<=1,000,000,000)가 차례로 주어집니다.
 *
 * # 출력 설명
 * 첫 줄에 가장 가까운 두 말의 최대 거리를 출력하세요.
 *
 * 입력 예제
 * 5 3
 * 1 2 8 4 9
 *
 * 출력예제
 * 3
 */
// /**
//  * 내 풀이
//  * 거리 최소 값 : 1 (중복은 없으므로)
//  * 거리 최대 값 : 가장 큰 수 - 가장 작은 수
//  * 찾는 값 : c 마리가 들어 갔을 때 거리의 최대 값
//  * 일단 정렬 부터 하자
//  * 1,2,4,8,9
//  * 직감적으로 1, 4, 9 가 최적이다
//  * 찾는 값(가장 가까운 거리의 최대 값) : 3
//  *
//  * 방법 1)
//  * 우선 첫 번째와 마지막은 무조건 들어갈 것이다
//  * 나머지 자리에 남는 말을 배치를 해서 가장 멀리씩(균등하게) 배치해야 된다
//  *
//  * 어떻게 배치해야될까?
//  *
//  * 전부 배치를 해보고 각 말들간의 최대 거리를 찾아야 할까?
//  *
//  * 첫 번째와 마지막엔 한마리씩 고정 배치를 하고(말은 2마리 이상)
//  * 남는 말을 루프를 돌리면서 배치를 해서
//  * 배치가 다 될때 마다 각 말들간의 거리를 구하고
//  * 그 최대 값을 기록한다
//  *
//  * 방법 2)
//  * 이분검색을 이용해보자
//  * 1) lt = 1, rt = 9, mid = (1+9)/2 = 5
//  * 최대 거리가 5일 때 몇 마리가 배치가 가능한가?
//  * 1 -> 1+5 와 같거나 큰 수 : 8 -> x => 2마리 배치 가능
//  * => 5는 아님
//  *
//  * 2) lt = 1, rt = mid-1 = 5-1 = 4, mid = (1+4)/2 => 2
//  * 최대 거리가 3일 때 몇 마리 배치가 가능한가?
//  * 1 -> 1+2 = 3 와 같거나 큰 수 : 4 -> 4+2 = 6과 같거나 큰수 -> 8 => 3마리 배치 가능
//  *
//  * 3) lt = mid + 1 = 4, rt = 4 -> lt가 rt 보다 크거나 같으므로 종료한다
//  * -> 답은 3(가장 최근의 mid 값)
//  *
//  * @param {number} c 말의 마리 수
//  * @param {number[]} stable 마구간 좌표 배열
//  */

// const countListedHorse = (sortedXArr, minGap) => {
//   let count = 1;
//   let placedX = sortedXArr[0];
//   for (let i = 1; i < sortedXArr.length; i++) {
//     const x = sortedXArr[i];
//     if (x >= placedX + minGap) {
//       count++;
//       placedX = x;
//     }
//   }
//   return count;
// };

// function solution(totalHorseCount, stable) {
//   let answer;
//   const sortedXArr = [...stable].sort((a, b) => a - b);

//   // 방법 2로 풀어보자
//   let lt = 1;
//   let rt = sortedXArr[sortedXArr.length - 1];

//   while (lt <= rt) {
//     const mid = parseInt((lt + rt) / 2);
//     const placedHorseCount = countListedHorse(sortedXArr, mid);
//     if (placedHorseCount >= totalHorseCount) {
//       if (answer === undefined) {
//         answer = mid;
//       } else {
//         answer = Math.max(answer, mid);
//       }
//       lt = mid + 1;
//     } else {
//       rt = mid - 1;
//     }
//   }
//   return answer;
// }

/**
 * 강의 해설
 * 이분 검색문제입니다
 * 일단 정렬 후
 * lt = 1 <- 중복은 없으므로 최소 거리는 1
 * rt = 9 <- arr[arr.length - 1]
 *
 * 1) mid = (1+9)/2 = 5 : 가장 가까운 말의 거리
 * 첫 번째 말은 무조건 arr[0]에 배치 : 1
 * 두 번째 말은 직전 마구간과 거리에서 mid 이상 떨어져야 함 : 8
 *
 * 2) rt = mid - 1 => 4가 됨
 * lt = 1, rt = 4, mid = 2
 */
function count(stable, dist) {
  let cnt = 1;
  let endPosition = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - endPosition >= dist) {
      cnt++;
      endPosition = stable[i];
    }
  }
  return cnt;
}

/**
 * @param {number} c
 * @param {number} stable
 * @returns number
 */
function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      /**
       * answer와 mid 중 큰수를 비교할 필요가 없는 이유
       * 결정알고리즘은 mid값이 답으로 가능하다면 그걸 답으로 해놓고
       * 더 좋은 답을 향해서 가는 알고리즘입니다.
       * 즉 나중에 답으로 가능한 mid값이 나온다면
       * 기존 답보다는 더 좋은 답입니다.
       */
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
