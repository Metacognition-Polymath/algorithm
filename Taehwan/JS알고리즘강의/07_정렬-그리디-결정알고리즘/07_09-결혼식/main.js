/**
 *  문제
 * 현수는 다음 달에 결혼을 합니다.
현수는 결혼식 피로연을 장소를 빌려 3일간 쉬지 않고 하려고 합니다.
피로연에 참석하는 친구들 N명의 참석하는 '시간정보'를 현수는 친구들에게 미리 요구했습니다. 
각 친구들은 자신이 몇 시에 도착해서 몇 시에 떠날 것인지 현수에게 알려주었습니다.
현수는 이 정보를 바탕으로 피로연 장소에 동시에 존재하는 최대 인원수를 구하여 
그 인원을 수용할 수 있는 장소를 빌리려고 합니다. 여러분이 현수를 도와주세요.
만약 한 친구가 오는 시간 13, 가는시간 15라면 이 친구는 13시 정각에 피로연 장에 존재하는 것이고 15시 정각에는 존재하지 않는다고 가정합니다.
[n, m]
n 이상, m 미만
 */
// /**
//  * 내 풀이
//  * @param {number[][]} times
//  */
// function solution(times) {
//   /**
//    * 방법 1.
//    * 하나 순차적으로 돌면서 중복되는 타임을 구한다
//    * On^2
//    *
//    * 방법 2.
//    * 각 배열의 중간 값들을 채우고
//    * 인덱스에 배치해서 가장 많은 인덱스를 찾는다
//    */

//   // 방법 2로 해보자
//   const filledArrayList = times.map(([startTime, endTime]) => {
//     const filledArr = [];
//     // endTime은 포함하지 않음
//     for (let i = startTime; i < endTime; i++) {
//       filledArr.push(i);
//     }
//     return filledArr;
//   });
//   const flattedArray = filledArrayList.flatMap((item) => item);
//   const sortedTimes = [...flattedArray].sort((a, b) => a - b);
//   // console.log("sortedTimes", sortedTimes);
//   const countArr = Array(sortedTimes[sortedTimes.length - 1]).fill(0);
//   sortedTimes.forEach((time) => {
//     countArr[time - 1]++;
//   });
//   // console.log(countArr);

//   return Math.max(...countArr);
// }

/**
 * 강의 해설
 * @param {number[][]} times
 */
function solution(times) {
  /**
   * 각각을 분리
   * [14, 's']
   * [18, 'e']
   * [12, 's']
   * [15, 'e']
   * ...
   * 순서대로 정렬 후
   * 숫자가 같으면 e를 앞에 둔다
   * [5, 's']
   * [12, 's']
   * [14, 'e']
   * [14, 's']
   * ...
   *
   * let count = 0
   * 5, s => count++; // 1
   * 12, s => count++; // 2
   * 14, e => count--; // 1
   * 14, s => count++; // 2
   * */
  let answer = Number.MIN_SAFE_INTEGER; // 작은 임의의 수
  let time_lines = [];
  for (let x of times) {
    time_lines.push([x[0], "s"]);
    time_lines.push([x[1], "e"]);
  }

  time_lines.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1].charCodeAt() - b[1].charCodeAt(); // s, e를 오름차순으로 정렬하면 e, s 순이 됨
    } else {
      return a[0] - b[0];
    }
  });

  let cnt = 0;

  for (let x of time_lines) {
    if (x[1] === "s") {
      cnt++;
    } else {
      cnt--;
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
]; // => 2
console.log(solution(arr));
