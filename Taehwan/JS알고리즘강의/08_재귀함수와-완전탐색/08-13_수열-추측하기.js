/**
 * 가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다.
 * 그리고 둘째 줄부터 차례대로 파스칼 의 삼각형처럼 위의 두개를 더한 값이 저장되게 된다
 * 예를 들어 N이 4 이고 가장 윗 줄에 3 1 2 4 가 있다고 했을 때, 다음과 같은 삼각형이 그려진다.
 * 3 1 2 4
 *  4 3 6
 *   7 9
 *    16
 * N과 가장 밑에 있는 숫자가 주어져 있을 때 가장 윗줄에 있는 숫자를 구하는 프로그램을 작성하 시오.
 * 단, 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력하여야 한다.
 *
 */

/**
 * 강의 해설
 * 1    2   3    4
 * (1+2) (2+3) (3+4)
 * (1+2+2+3) (2+3+3+4)
 * (1*1 + 2*3 + 3*3 + 4*1)
 * (1*3C0 + 2*3C1 + 3*3C2 + 4*3C3)
 *
 * 순열 배열을 구하고 => [1, 3, 3, 1]
 * 각 경우에 수에 해당하는 순열과 곱한다
 * -> e.g. 순열 중 하나가 [1, 2, 3, 4] 인경우
 * => 1*1 + 3*2 + 3*3 + 4*1
 *
 */
/**
 * @param {number} n 첫 줄에 있는 정수의 개수
 * @param {number} f 마지막 줄에 있는 정수(피라미드 꼭대기로 올라가면서 더한 수)
 */
function solution(n, f) {
  let answer;
  let flag = false;
  let dy = Array.from(Array(11), () => Array(11).fill(0)); // 캐시 배열
  let ch = Array.from({ length: n + 1 }, () => 0); // 순열을 구하기 위한 체크 배열
  // let p = Array.from({ length: n }, () => 0); // 조합이 저장될 배열
  let p = [];
  let b = Array.from({ length: n }, () => 0); // 순열이 저장될 배열

  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }

  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i); // 미리 순열을 구해서 채워넣어줌
  }

  function DFS(L, sum) {
    if (flag) return;
    if (L === n) console.log(p);
    if (L === n && sum === f) {
      answer = p.slice();
      flag = true;
    } else {
      // 1부터 n까지의 숫자로 순열을 만드므로 i = 1 ~ n
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1; // 사용했다고 체크
          // p[L] = i; // 순열
          p.push(i);
          DFS(L + 1, sum + b[L] * p[L]); // 순열에 미리 구해놓은 조합을 곱해서 누적해서 더한다
          ch[i] = 0; // 사용이 끝났으므로 체크해제
          p.pop();
        }
      }
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16));
