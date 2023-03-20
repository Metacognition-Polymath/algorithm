/**
 * Given an integer array nums,
 * return true if you can partition the array into two subsets
 * such that the sum of the elements in both subsets is equal
 * or false otherwise.
 *
 * 2개의 부분집합으로 나눌 때 그 합이 같은지 확인
 * 
 * 이 코드는 주어진 숫자 배열 nums를 두 개의 부분 집합으로 분할하여 각 부분 집합의 원소의 합이 서로 같게 만들 수 있는지 여부를 판별하는 함수 canPartition을 구현한 것입니다.

함수 canPartition은 먼저 배열 nums의 모든 원소의 합을 구합니다. 그 합이 홀수이면 두 부분 집합으로 분할할 수 없으므로 false를 반환합니다. 합이 짝수인 경우, 두 부분 집합의 합이 같도록 만들 수 있습니다.

그 다음, target 변수를 sum의 절반으로 설정하고, dp 배열을 생성합니다. dp[i]는 nums 배열에서 원소들을 더해서 합이 i가 되는 경우를 저장하는 불리언 배열입니다. dp[0]은 nums 배열에서 아무 원소도 선택하지 않아 합이 0이 되는 경우로 초기화합니다.

이후, nums 배열의 모든 원소를 순회하면서, dp 배열을 업데이트합니다. 각 원소 nums[i]를 선택하지 않는 경우와 선택하는 경우 두 가지로 나누어 dp 배열을 갱신합니다. 이를 위해, dp 배열을 뒤에서부터 순회하면서, j부터 nums[i]까지의 범위에서 dp[j-nums[i]]가 true인 경우 dp[j]를 true로 설정합니다.

최종적으로, dp[target]가 true인 경우, nums 배열을 두 부분 집합으로 분할하여 각 부분 집합의 원소의 합이 서로 같게 만들 수 있습니다. 따라서, true를 반환합니다.
 */
// const canPartition = (nums: number[]): boolean => {
//   const sum = nums.reduce((acc, cur) => acc + cur, 0);
//   if (sum % 2 !== 0) return false;

//   const target = sum / 2;
//   const dp = Array(target + 1).fill(false);
//   dp[0] = true;

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = target; j >= nums[i]; j--) {
//       dp[j] = dp[j] || dp[j - nums[i]];
//     }
//   }

//   console.log("dp", dp);

//   return dp[target];
// };

/**
 * dp[i] = dp[i] || dp[i - num]는 현재 dp[i]의 값을 유지하면서, num을 선택하지 않은 경우인 dp[i - num]의 값이 true일 때 dp[i]를 true로 바꾸는 코드입니다. 이는 num을 선택한 경우와 선택하지 않은 경우를 고려하는 것입니다.

예를 들어, nums 배열이 [1, 5, 11, 5]이고, total이 22일 때, target은 11이 됩니다. dp 배열을 초기화하면 [true, false, false, false, false, false, false, false, false, false, false]가 됩니다. 이후, 배열의 원소를 하나씩 순회하며 dp 배열을 업데이트하게 되는데, 첫 번째 원소인 1을 처리하는 경우를 예로 들어보면 다음과 같습니다.

i가 1일 때, dp[1]을 true로 설정합니다. (즉, num을 선택한 경우)
i가 2일 때, dp[2]의 값은 dp[2 - 1]이 true인지 확인한 후, dp[2]을 true로 설정합니다. (즉, num을 선택하지 않은 경우인 dp[2 - 1]의 값이 true이므로, dp[2]를 true로 업데이트합니다.)
i가 3일 때, dp[3]의 값은 dp[3 - 1]이 true인지 확인한 후, dp[3]을 true로 설정합니다. (즉, num을 선택하지 않은 경우인 dp[3 - 1]의 값이 true이므로, dp[3]를 true로 업데이트합니다.)
 */
const canPartition = (nums: number[]): boolean => {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  if (sum % 2 !== 0) return false;

  const target = sum / 2;
  const dp = Array(target + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }

  return dp[target];
};

console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 5]));
