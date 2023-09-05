/**
 * [문제 설명]
 * 기능개선 작업 중입니다
 * 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다
 * 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다
 * 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때
 * 함께 배포됩니다
 * 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열(progresses)와
 * 각 작업의 개발 속도가 적힌 정수 배열(speeds)가 주어질 때
 * 각 배포마다 몇 개의 기능이 배포되는지를 return하도록 함수를 완성하세요
 *
 * [제한사항]
 * 작업의 개수(progresses, speeds 배열의 길이)는 100개 이하입니다
 * 작업 진도는 100 미만의 자연수입니다
 * 작업 속도는 100 이하의 자연수입니다
 * 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어집니다
 * 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4$라면 배포는 2일 뒤에 이루어집니다
 *
 * [입출력 예]
 * progresses	/ speeds =>	return
 * [93, 30, 55]	/ [1, 30, 5] =>	[2, 1]
 * [95, 90, 99, 99, 80, 99]	/ [1, 1, 1, 1, 1, 1] =>	[1, 3, 2]
 *
 * [입출력 예 설명]
 * 입출력 예 #1
 * 첫 번째 기능은 93% 완료되어 있고 하루에 1%씩 작업 가능하므로
 * 7일간 작업 후 배포가 가능합니다
 * 두 번째 기능은 30% 완료되어 있고 하루에 30%씩 작업 가능하므로
 * 3일간 작업 후 배포가 가능합니다
 * 하지만 이전 첫 번째 기능이 아직 완성된 상태가 아니기 때문에
 * 첫 번째 기능이 배포되는 7일째 배포됩니다
 * 세 번째 기능은 55% 완료되어 있고 하루에 5%씩 작업 가능하므로
 * 9일간 작업 후 배포가 가능합니다
 * 따라서 7일째에는 1, 2번째 기능이 배포되고
 * 9일째에는 3번째 기능이 배포됩니다
 *
 * 입출력 예 #2
 * 모든 기능이 하루에 1%씩 작업이 가능하므로
 * 작업이 끝나기까지 남은 일수는 각각 5일, 10일, 1일, 1일, 20일, 1일입니다
 * 어떤 기능이 먼저 완성되었더라도 앞에 있는 모든 기능이
 * 완성되지 않으면 배포가 불가능합니다
 * 따라서 5일째에 1개의 기능
 * 10일째에 3개의 기능
 * 20일째에 2개의 기능이 배포됩니다
 */

// 혼자 풀어보기
// function solution(progresses, speeds) {
//   let copiedProgresses = [...progresses];
//   let copiedSpeeds = [...speeds];

//   const shiftCompletedItem = () => {
//     // 첫 번째 아이템이 100%가 될 때까지 반복해서 진행
//     while (copiedProgresses[0] < 100) {
//       for (let i = 0; i < copiedProgresses.length; i++) {
//         copiedProgresses[i] = copiedProgresses[i] + speeds[i];
//       }
//     }

//     let removedItemCount = 0;
//     while (true) {
//       const firstItem = copiedProgresses[0];
//       if (firstItem === 100) {
//         copiedProgresses.shift();
//         copiedSpeeds.shift();
//         removedItemCount++;
//       } else {
//         break;
//       }
//     }

//     return removedItemCount;
//   };

//   const answer = [];

//   while (copiedProgresses.length) {
//     const removedItemCount = shiftCompletedItem();
//     if (removedItemCount != 0) {
//       answer.push(removedItemCount);
//     }
//     console.log("answer", answer);
//   }

//   return answer;
// }

// /**
//  *
//  * @param {number[]} progresses
//  * @param {number[]} speeds
//  * @returns number[]
//  */
// function solution(progresses, speeds) {
//   const answer = [];
//   // 각 작업의 배포까지 걸리는 일수
//   const days = progresses.map((progress, index) => {
//     return Math.ceil((100 - progress) / speeds[index]);
//   });

//   // 배포까지 걸리는 일수 중 가장 큰 값 - 첫 번째가 100%가 되면 무조건 배포되므로 초기값으로 설정
//   let max = days[0];
//   // 배포까지 걸리는 일수 중 가장 큰 값보다 작거나 같은 값이 나오면 카운트
//   let count = 1; // 배포되는 기능 수
//   // 배포까지 걸리는 일수 중 가장 큰 값보다 큰 값이 나오면 카운트를 answer에 push
//   for (let i = 1; i < days.length; i++) {
//     if (days[i] <= max) {
//       count++;
//     } else {
//       answer.push(count);
//       max = days[i];
//       count = 1;
//     }
//   }
//   answer.push(count);

//   return answer;
// }

// console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
// console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]

/**
 *
 * @param {number[]} progresses
 * @param {number[]} speeds
 * @returns number[]
 */
function solution(progresses, speeds) {
  // 동시에 배포되는 기능의 개수 배열
  const answer = [];

  // 각 작업의 배포까지 걸리는 기간(일) 배열 - 여기에서 한번에 다 계산을 해서 for문으로 날짜를 하나씩 올리면서 확인할 필요가 없어짐
  const days = progresses.map((progress, index) => {
    return Math.ceil((100 - progress) / speeds[index]);
  });

  // 다음 배포까지 걸리는 기간(일)
  let maxDay = days[0];
  // 다음에 배포되는 기능 수
  let releaseCount = 1;
  // 첫 번째 배포는 무조건 1개 이상이고 두 번째 부터 같이 배포되는 지 검사하므로 1부터 시작
  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      // 다음 기능이 현재 배포되려는 기능이 배포될 때 완료되었는지 여부
      releaseCount++;
    } else {
      // 다음 기능이 준비가 안되었다면 배포 후 다음 기능이 그 시작 점이 됨
      answer.push(releaseCount);
      maxDay = days[i];
      releaseCount = 1;
    }
  }

  // 다음 아이템이 존재한다면 else문에 의해 추가되지만 다음 아이템이 없다면 더 이상 for문을 돌지 않으므로
  // 마지막 아이템은 한번 더 이렇게 추가해줘야 함
  answer.push(releaseCount);

  return answer;
}

/**
 * 이번 문제를 풀면서 느낀 점
 * - 현재 주어진 문제의 단서만으로 풀기보다
 * - 주어진 단서로 어떤 의미있는 데이터를 만들고 활용할 수 있는지 생각해보자
 * - 주어진 문제의 단서 : 진행속도, 현재 진행률
 * - 단서로 부터 새로 만든 의미있는 데이터 : 미리 수식으로 구해놓은 걸리는 기간(일)
 */

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
// 7, 4, 9
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
// 5, 10, 1, 1, 20, 1
