/**
 * Given an integer array nums,
 * return true if you can partition the array into two subsets
 * such that the sum of the elements in both subsets is equal
 * or false otherwise.
 *
 * 2개의 부분집합으로 나눌 때 그 합이 같은지 확인
 *
 */

{
  const canPartition = (nums) => {
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    if (sum % 2 !== 0) return false;
    const target = sum / 2;

    let answer = false;

    function DFS(level, sum) {
      if (answer) return;
      if (sum > target) return;
      if (level === nums.length) return;
      if (sum === target) {
        answer = true;
      } else {
        DFS(level + 1, sum + nums[level]);
        DFS(level + 1, sum);
      }
    }

    DFS(0, 0);
    return answer;
  };

  console.log(canPartition([1, 5, 11, 5]));
  // console.log(canPartition([1, 2, 3, 5]));
  // console.log(canPartition([1, 2, 20, 5]));
  // 시간초과..😭
}
