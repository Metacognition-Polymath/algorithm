/**
 * You are given an array of non-overlapping intervals `intervals` where intervals[i] = [starti, endi]
 * represent the start and the end of the ith interval and intervals is sorted in ascending order by starti.
 * You are also given an interval `newInterval` = [start, end] that represents the start and end of another interval.
 * Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by starti and
 * intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 * Return `intervals` after the insertion.
 *
 * Example 1:
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 *
 * Example 2:
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// function insert(intervals, newInterval) {
//   let result = []; // 결과를 담을 배열
//   let i = 0; // 전역 인덱스
//   let len = intervals.length;
//   // intervals[i]의 end가 newInterval의 start보다 작으면 복사
//   while (i < len && intervals[i][1] < newInterval[0]) {
//     result.push(intervals[i]);
//     i++;
//   }
//   // intervals[i]의 start가 newInterval의 end보다 작으면 병합
//   while (i < len && intervals[i][0] <= newInterval[1]) {
//     newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
//     newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
//     i++;
//   }
//   result.push(newInterval);
//   while (i < len) {
//     result.push(intervals[i]);
//     i++;
//   }
//   return result;
// }
function insert(intervals, newInterval) {
  const result = [];
  let i = 0;
  const length = intervals.length;
  // intervals[i]의 end가 newInterval의 start보다 작으면 복사
  while (i < length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }
  // intervals[i]의 start가 newInterval의 end보다 작으면 병합
  while (i < length && intervals[i][0] <= newInterval[1]) {
    const start = Math.min(intervals[i][0], newInterval[0]);
    const end = Math.max(intervals[i][1], newInterval[1]);
    newInterval = [start, end];
    i++;
  }
  result.push(newInterval);
  // 나머지 복사
  while (i < length) {
    result.push(intervals[i]);
    i++;
  }
  return result;
}
console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
); // [[1,5],[6,9]]
console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
); // [[1,2],[3,10],[12,16]]
