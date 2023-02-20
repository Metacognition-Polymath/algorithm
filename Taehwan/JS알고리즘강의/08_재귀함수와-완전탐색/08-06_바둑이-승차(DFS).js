/**
 * 바둑이 승차(DFS)
 * 철수는 그의 바둑이들을 데리고 시장에 가려고 한다.
 * 그런데 그의 트럭은 C킬로그램 넘게 태 울수가 없다.
 * 철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다.
 * N마리의 바둑이와 각 바둑이의 무게 W가 주어지면,
 * 철수가 트럭에 태울 수 있는 가장 무거운 무게를 구하는 프로그램을 작성하세요.
 *
 *
 */
/**
 * N마리의 바둑이,
 * 각 바둑이의 무게 W
 * 트럭에 태울 수 있는 최대 무게 : C
 *
 * 내 풀이
 * 2진 트리를 순회하면서 최대값을 갱신해나간다
 * 전부 다 돌았을 때 최대값을 리턴한다
 * @param {number} c
 * @param {number[]} arr
 * @returns
 */
// function solution(c, arr) {
//   let maxWeight = 0;
//   function DFS(arrIndex, sum) {
//     count++;
//     if (arrIndex === arr.length) {
//       if (sum < c) {
//         maxWeight = Math.max(sum, maxWeight);
//       }
//       return;
//     } else {
//       DFS(arrIndex + 1, sum + arr[arrIndex]);
//       DFS(arrIndex + 1, sum);
//     }
//   }
//   DFS(0, 0);
//   return maxWeight;
// }

// let arr = [81, 58, 42, 33, 61]; // 각 바둑이들의 무게
// console.log(solution(259, arr));

// 강의 해설
function solution(c, arr) {
  let answer;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > c) return; // 넘어가면 재귀로도 뻣어나가지 못하게 early return을 해준다
    if (L === n) {
      // console.log('sum', sum);
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
}

let arr = [81, 58, 42, 33, 61]; // 각 바둑이들의 무게
console.log(solution(259, arr));
