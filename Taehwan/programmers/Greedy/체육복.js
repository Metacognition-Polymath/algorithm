/**
 * 문제 설명
 * 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다.
 * 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
 * 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다.
 * 전체 학생의 수 n,
 * 체육복을 도난당한 학생들의 번호가 담긴 배열 lost,
 * 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때,
 * 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요
 *
 * 제한사항
 * 전체 학생의 수는 2명 이상 30명 이하입니다.
 * 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다
 *
 * 입출력 예
 * n / lost / reserve / return
 * 5 / [2, 4] / [1, 3, 5] / 5
 * 5 / [2, 4] / [3] / 4
 * 3 / [3] / [1] / 2
 */
// function solution(n, lost, reserve) {
//   // 학생 수만큼 배열 생성
//   const students = Array(n).fill(1);

//   // 도난당한 학생은 체육복 수를 1개 줄임
//   lost.forEach((student) => {
//     students[student - 1]--;
//   });
//   // 여벌 체육복을 가져온 학생은 체육복 수를 1개 늘림
//   reserve.forEach((student) => {
//     students[student - 1]++;
//   });

//   // 체육복을 빌려줄 수 있는 학생 수 계산
//   for (let i = 0; i < students.length; i++) {
//     // 체육복이 없는 학생일 경우
//     if (students[i] === 0) {
//       // 앞 번호 학생이 여벌 체육복이 있는 경우
//       if (students[i - 1] === 2) {
//         students[i]++;
//         students[i - 1]--;
//         // 뒷 번호 학생이 여벌 체육복이 있는 경우
//       } else if (students[i + 1] === 2) {
//         students[i]++;
//         students[i + 1]--;
//       }
//     }
//   }

//   return students.filter((student) => student > 0).length;
// }

// 복습
function solution(n, lost, reserve) {
  // 학생 수만큼 배열 생성 - 체육복 수를 1개로 초기화
  const students = Array(n).fill(1);

  // 도난당한 학생은 체육복 수를 1개 줄임
  lost.forEach((student) => {
    students[student - 1]--;
  });

  // 여벌 체육복을 가져온 학생은 체육복 수를 1개 늘림
  reserve.forEach((student) => {
    students[student - 1]++;
  });

  // 체육복을 빌려줄 수 있는 학생 수 계산
  for (let i = 0; i < students.length; i++) {
    // 체육복이 없는 학생일 경우
    if (students[i] === 0) {
      // 앞 번호 학생이 여벌 체육복이 있는 경우
      if (students[i - 1] === 2) {
        students[i]++;
        students[i - 1]--;
      } else if (students[i + 1] === 2) {
        // 뒷 번호 학생이 여벌 체육복이 있는 경우
        students[i]++;
        students[i + 1]--;
      }
    }
  }

  return students.filter((student) => student > 0).length;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
