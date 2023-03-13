/**
 * 1부터N까지번호가적힌구슬이있습니다.이중 M개를뽑는방법의수를출력하는프로그 램을 작성하세요.
 */

/**
 * 강의해설
 * D(level, startNumber)
 * D(0, 1)
 * D(1, 2) // startNumber += 1
 * D(2, 3), D(2, 4)
 */
/**
 * @param {number} n 1~n 까지 적힌 구슬
 * @param {number} m m개를 뽑는다
 */
function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L, s) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));
