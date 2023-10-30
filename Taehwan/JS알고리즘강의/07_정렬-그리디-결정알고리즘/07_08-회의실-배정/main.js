/**
 * 문제
 * 한 개의 회의실이 있는데 이를 사용하고자 하는 n개의 회의들에 대하여
 * 회의실 사용표를 만들 려고 한다.
 * 각 회의에 대해 시작시간과 끝나는 시간이 주어져 있고,
 * 각 회의가 겹치지 않게 하 면서 회의실을 사용할 수 있는 `최대수`의 회의를 찾아라.
 * 단, 회의는 한번 시작하면 중간에 중 단될 수 없으며,
 * 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다.
 * 입력 예제
 * [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]]
 * 출력 예제
 * 3
 */
// /**
//  * 내 풀이
//  * @param {number[][]} meeting
//  * @returns number;
//  */
// function solution(meeting) {
//   // 1. 정렬을 한다
//   const sortedArr = [...arr].sort((a, b) => {
//     const [a1, a2] = a;
//     const [b1, b2] = b;
//     if (a1 === b1) {
//       return a2 - b2;
//     }
//     return a1 - b1;
//   });
//   /**
//    * 2. 순회 하면서 종료시간보다 작은 회의 중 최소시간을 선택해서 시작을 한다
//    * 첫 번째 부터 마지막에서 두 번째까지 돌면서 최대 회의 수를 찾는다
//    */
//   const meetingCountArr = [];
//   for (let i = 0; i < sortedArr.length - 1; i++) {
//     let meetingCount = 1;
//     const [currentMeetingStartTime, currentMeetingEndTime] = sortedArr[i];
//     let currentTime = currentMeetingEndTime;
//     for (let j = i + 1; j < sortedArr.length; j++) {
//       const [nextMeetingStartTime, nextMeetingEndTime] = sortedArr[j];
//       if (currentTime > nextMeetingStartTime) {
//         continue;
//       }
//       currentTime = nextMeetingEndTime;
//       meetingCount++;
//     }
//     meetingCountArr.push(meetingCount);
//   }
//   return Math.max(...meetingCountArr);
// }

// /**
//  * 강의 해설
//  * @param {number[][]} meeting
//  * 대표적인 그리디 문제
//  * 그리디
//  * - 정렬 하고 쭉 선택한다
//  */
// function solution(meeting) {
//   /**
//    * 빨리 끝나는 시간 순으로 정렬한다
//    * 끝나는 시간이 같으면 시작시간이 빠른 순으로 정렬을 해야 된다
//    */
//   let answer = 0;
//   meeting.sort((a, b) => {
//     if (a[1] === b[1]) {
//       // 끝나는 시간이 같으면 시작시간이 빠른 순으로 정렬
//       return a[0] - b[0];
//     } else {
//       // 끝나는 시간이 다르면 빨리 끝나는 시간 순으로 정렬
//       return a[1] - b[1];
//     }
//   });

//   let et = 0; // end time
//   for (let x of meeting) {
//     // 시작 시간이 기존에 끝나는 시간보다 크면 회의를 카운트
//     if (x[0] >= et) {
//       answer++;
//       et = x[1]; // 끝나는 시간을 갱신
//     }
//   }
//   return answer;
// }

// // [시작시간, 종료시간]
// let arr = [
//   [1, 4],
//   [2, 3],
//   [3, 5],
//   [4, 6],
//   [5, 7],
// ]; // => 3
// // let arr = [
// //   [3, 3],
// //   [1, 3],
// //   [2, 3],
// // ]; // => 2
// console.log(solution(arr));

// 복습 1회차
/**
 * 대표적인 그리디 문제
 * @param {number[][]} meeting
 */
// function solution(meetingList) {
//   // 1. 회의 목록을 끝나는 시간을 기준으로 정렬
//   // - 끝나는 시간이 같은 경우 시작시간으로 정렬
//   meetingList.sort((meetingA, meetingB) => {
//     const [AStart, AEnd] = meetingA;
//     const [BStart, BEnd] = meetingB;
//     if (AEnd === BEnd) {
//       return AStart - BStart; // 오름 차순(작은 것이 앞으로) <-> 내림 차순(B - A)
//     } else {
//       return AEnd - BEnd;
//     }
//   });

//   let tempEndTime = 0;
//   let meetingCount = 0;
//   meetingList.forEach((meeting) => {
//     const [startTime, endTime] = meeting;
//     if (startTime >= tempEndTime) {
//       meetingCount++;
//       tempEndTime = endTime;
//     }
//   });
//   return meetingCount;
// }

// // [시작시간, 종료시간]
// let arr = [
//   [1, 4],
//   [2, 3],
//   [3, 5],
//   [4, 6],
//   [5, 7],
// ]; // => 3
// // let arr = [
// //   [3, 3],
// //   [1, 3],
// //   [2, 3],
// // ]; // => 2
// console.log(solution(arr));

// 복습 2회차
function solution(meeting) {
  // 정렬
  const sortedArr = [...meeting].sort((a, b) => {
    const [a1, a2] = a;
    const [b1, b2] = b;
    if (a2 === b2) {
      return a1 - b1;
    }
    return a2 - b2;
  });

  // 순회하면서 종료시간보다 작은 회의 중 최소시간을 선택해서 시작을 한다
  let meetingCount = 0;
  let tempEndTime = 0;
  sortedArr.forEach((meeting) => {
    const [startTime, endTime] = meeting;
    if (startTime >= tempEndTime) {
      meetingCount++;
      tempEndTime = endTime;
    }
  });

  return meetingCount;
}

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
