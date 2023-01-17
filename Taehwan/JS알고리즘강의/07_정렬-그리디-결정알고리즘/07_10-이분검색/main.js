/**
 * 문제
 * 임의의 N개의 숫자가 입력으로 주어집니다.
 * N개의 수를 오름차순으로 정렬한 다음
 * N개의 수 중 한 개의 수인 M이 주어지면
 * 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성하세요.
 * 단 중복값은 존재하지 않습니다.
 */
// /**
//  * 내 풀이
//  * @param {number} target
//  * @param {number[]} arr
//  */
// function solution(target, arr) {
//   const sortedArr = [...arr].sort((a, b) => a - b); // 오름 차순 정렬
//   const index = sortedArr.findIndex((num) => num === target);
//   return index + 1;
// }

/**
 * 강의 해설
 * 이분 검색은 어떻게 하면 빠르게 찾아 낼 수 있는지
 * n번만에 찾기 -> 시간복잡도 logn
 *
 * 순차 탐색 - 앞에서 부터 순차적으로
 * - 시간복잡도 : O(n)
 *
 * 이분 검색으로 하면 O(logn) 만에 끝날 수 있음
 * -> 컴퓨터에서 log는 밑이 2인 로그
 *
 * 이분 검색은 무조건 자료가 정렬 되어 있어야 함
 * - left, right를 가리키는 pointer 변수가 필요
 *   - left, right : 인덱스
 * - mid = (left + right)/2 -- 몫 : parseInt 또는 Math.floor를 사용
 * - mid : (0+7)/2 => 3 -> arr[mid] 이 target과 같은 지 확인
 * 같지 않다면
 *
 * arr[mid] 이 target보다 크다면 arr[mid] 보다 왼쪽에 있다는 뜻
 * rt를 mid-1로 변경
 * - 한 번 비교로 이해 검색 범위가 절반으로 줄어 들음
 *
 * mid => (0+2)/2 => 1,
 * mid가 target 보다 작음 -> lt값이 mid+1로 바뀜
 *
 * lt: 2, rt: 2
 * (lt + rt)/2 => 2
 *
 * 이렇게 3번만에 찾을 수 있다
 *
 * log2(8) => 3
 * - 8개 짜리 배열에선 최대로 걸리는 시간은 8이다
 *
 * 이분검색 요약
 * - 중앙값 정하고
 * - lt, rt를 욺직인다
 */
function solution(target, arr) {
  let answer;

  arr.sort((a, b) => a - b);
  let lt = 0;
  let rt = arr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) {
      rt = mid - 1;
    } else lt = mid + 1;
  }

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
