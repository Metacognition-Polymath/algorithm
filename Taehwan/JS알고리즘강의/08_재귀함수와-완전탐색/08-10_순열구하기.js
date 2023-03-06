/**
 * 순열 구하기
 * 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다

▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다. 두 번째 줄에 N개의 자연수가 오름차순으로 주어집니다.

▣ 출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다. 출력순서는 사전순으로 오름차순으로 출력합니다.

▣ 입력예제 1 
3 2
3 6 9

▣ 출력예제 1 
3 6
3 9
6 3
6 9 
9 3 
9 6 
6
 */

/**강의 해설
 * arr = [3, 6, 9]
 * checkArr = [0, 0, 0] // 0이면 사용하지 않은 것, 1이면 사용한 것
 * D(L) => L은 뽑은 숫자의 개수
 * tmpArr = [0, 0] // 뽑은 숫자를 넣을 배열, 3 * 2 = 6개의 경우의 수가 나온다(첫번째 숫자가 3이면 두번째 숫자는 6, 9가 올 수 있다)
 * D(0)에서 재귀가 뻣어나갈 때 0,1,2 중 3(index == 0)을 선택했다면 checkArr[0] = 1로 바꾸고 tmpArr[0] = 3으로 바꾼다 -> 그리고 D(1)을 호출한다
 * D(1)에서 0,1,2로 for를 돌 때, 0은 checkArr[0] = 1이므로 사용한 숫자이므로 넘어간다 -> D(1)은 1, 2를 돌면서 뻣어나간다
 * pop할 땐 checkArr의 자기가 선택한 숫자를 0으로 바꾸고 tmpArr의 마지막 숫자를 pop한다
 */
/**
 * @param {number} m
 * @param {number[]} arr
 * @returns
 */
function solution(m, arr) {
  let answer = [];
  const n = arr.length;
  const checkArr = Array.from({ length: n }, () => 0);
  const tmpArr = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L === m) {
      answer.push(tmpArr.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (checkArr[i] === 0) {
          checkArr[i] = 1;
          tmpArr[L] = arr[i];
          DFS(L + 1);
          checkArr[i] = 0;
        }
      }
    }
  }

  DFS(0);

  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
