/**
 * 부분 집합 구하기(DFS)
 * 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램 을 작성하세요.
 * 입력 : 3
 * 출력
123
12
13
1
2 3
2
3

입력 설명
- 첫 번째 줄에 자연수 N(1<=N<=10)이 주어집니다.

출력 설명
- 첫 번째 줄부터 각 줄에 하나씩 부분집합을 아래와 출력예제와 같은 순서로 출력한다.
단 공집합은 출력하지 않습니다.

강의 해설
부분 집합의 개수는 2^n
-> 3이라면 2*2*2 = 8개(공집합 포함)
-> 공집합을 포함하지 않는다면 (2^n - 1) 개
 */
function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0); // 0으로 초기화된 n+1개의 배열
  function DFS(v) {
    if (v === n + 1) {
      let temp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) {
          temp += `${i}`;
        }
      }
      if (temp.length > 0) {
        answer.push(temp);
      }
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
