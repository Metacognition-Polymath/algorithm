/**
 * <문제 설명>
 * 주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 
 * 항상 "ICN" 공항에서 출발합니다.
 * 항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 
 * 방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 * 
 * <제한 사항>
모든 공항은 알파벳 대문자 3글자로 이루어집니다.
주어진 공항 수는 3개 이상 10,000개 이하입니다.
tickets의 각 행 [a, b]는 a 공항에서 b 공항으로 가는 항공권이 있다는 의미입니다.
주어진 항공권은 모두 사용해야 합니다.
만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.
모든 도시를 방문할 수 없는 경우는 주어지지 않습니다.

 * <입출력 예>
 * tickets => return
 * [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]] => ["ICN", "JFK", "HND", "IAD"]
 * [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]] 
 * => ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
 */
// 혼자 풀어보기 - X
// /**
//  * @param {string[][]} tickets
//  * @returns string[]
//  */
// function solution(tickets) {
//   let remainingTickets = [...tickets];
//   const sequence = [];

//   const findAndRemoveNextByCurrent = (current) => {
//     const [_, end] = current;
//     remainingTickets = remainingTickets.filter((ticket) => {
//       const [nextStart] = ticket;
//       if (end === nextStart) {
//         sequence.push(ticket);
//         return false;
//       }
//       return true;
//     });
//   };

//   findAndRemoveNextByCurrent(["", "ICN"]);

//   while (remainingTickets.length) {
//     findAndRemoveNextByCurrent(sequence[sequence.length - 1]);
//   }

//   answer = [];
//   const flatted = sequence.flatMap((t) => t);
//   // console.log("flatted", flatted);
//   flatted.forEach((region, index) => {
//     if (index > 0) {
//       const prevRegion = flatted[index - 1];
//       if (region === prevRegion) {
//         return;
//       }
//     }
//     answer.push(region);
//   });
//   return answer;
// }
// console.log(
//   solution([
//     ["ICN", "SFO"],
//     ["ICN", "ATL"],
//     ["SFO", "ATL"],
//     ["ATL", "ICN"],
//     ["ATL", "SFO"],
//   ])
// );

// 다른 사람 풀이
// function solution(tickets) {
//   const graph = {}; // 그래프 생성

//   // 그래프 초기화
//   for (const [from, to] of tickets) {
//     if (!graph[from]) {
//       graph[from] = [];
//     }
//     graph[from].push(to);
//   }

//   // 도착지 알파벳 역순으로 정렬 - 제한사항에 있음 -> 앞서는 순서로 반환하기 위함
//   for (const key in graph) {
//     graph[key].sort((a, b) => (a > b ? -1 : 1));
//   }

//   const answer = []; // 최종 여행 경로 저장 배열

//   // DFS 함수
//   function dfs(node) {
//     const destinations = graph[node];

//     while (destinations && destinations.length > 0) {
//       const nextNode = destinations.pop(); // 알파벳 순서가 앞서는 경로를 반환하기 위해 pop 사용
//       dfs(nextNode);
//     }

//     answer.push(node); // 경로 추가
//   }

//   dfs("ICN"); // 시작은 항상 ICN 공항

//   return answer.reverse(); // 역순으로 저장했으므로 반전하여 반환
// }

// console.log(
//   solution([
//     ["ICN", "SFO"],
//     ["ICN", "ATL"],
//     ["SFO", "ATL"],
//     ["ATL", "ICN"],
//     ["ATL", "SFO"],
//   ])
// );

/**
 * 정리
 * - {출발지1: [도착지1, 도착지2, ...], 출발지2: [도착지1, 도착지2, ...], ...} 형태의 그래프를 생성
 * - 도착지를 알파벳 역순으로 정렬
 * - DFS를 통해 경로를 탐색하며, 경로를 answer 배열에 저장
 * - 역순으로 저장했으므로 answer 배열을 반전하여 반환
 */

// 다시 풀어보기
// function solution(tickets) {
//   const graph = {}; // 그래프 생성

//   // 그래프 초기화
//   for (const [from, to] of tickets) {
//     if (!graph[from]) {
//       graph[from] = [];
//     }
//     graph[from].push(to);
//   }

//   // 그래프 정렬
//   // for in 은 object를 순회하면서 key를 리턴
//   for (const key in graph) {
//     // 오름 차순 정렬
//     graph[key].sort((a, b) => (a > b ? 1 : -1));
//   }

//   // console.log(graph);

//   const answer = [];

//   const dfs = (node) => {
//     const destinations = graph[node];

//     while (destinations && destinations.length > 0) {
//       const nextNode = destinations.shift();
//       dfs(nextNode);
//     }

//     // 런타임 에러, 중복 티켓팅 방지를 위해 뒤에 배치
//     answer.push(node);
//   };

//   dfs("ICN");

//   return answer.reverse();
// }

// console.log(
//   solution([
//     ["ICN", "SFO"],
//     ["ICN", "ATL"],
//     ["SFO", "ATL"],
//     ["ATL", "ICN"],
//     ["ATL", "SFO"],
//   ])
// ); // [ 'ICN', 'ATL', 'ICN', 'SFO', 'ATL', 'SFO' ]

// 복습 1회차
// function solution(tickets) {
//   const graph = {}; // 그래프 생성

//   // 그래프 초기화
//   for (const [from, to] of tickets) {
//     if (!graph[from]) {
//       graph[from] = [];
//     }
//     graph[from] = [...graph[from], to];
//   }

//   // 그래프 정렬
//   for (const key in graph) {
//     graph[key].sort((a, b) => (a > b ? -1 : 1)); // 내림 차순 정렬 => pop() => 오름 차순으로 나옴
//   }

//   const answer = [];

//   // graph[node]에서 하나씩 다음 경로로 이동
//   const dfs = (node) => {
//     if (graph[node]) {
//       const nextNode = graph[node].pop();
//       if (nextNode) {
//         dfs(nextNode);
//       }
//     }

//     answer.push(node);
//   };

//   dfs("ICN");

//   return answer.reverse();
// }

// console.log(
//   solution([
//     ["ICN", "SFO"],
//     ["ICN", "ATL"],
//     ["SFO", "ATL"],
//     ["ATL", "ICN"],
//     ["ATL", "SFO"],
//   ])
// ); // [ 'ICN', 'ATL', 'ICN', 'SFO', 'ATL', 'SFO' ]

// 복습 2회차
function solution(tickets) {
  const graph = {}; // 그래프 생성

  // 그래프 초기화
  for (const [from, to] of tickets) {
    if (!graph[from]) {
      graph[from] = [];
    }
    graph[from] = [...graph[from], to];
  }

  // 그래프 정렬
  for (const key in graph) {
    graph[key].sort((a, b) => (a > b ? -1 : 1)); // 내림 차순 정렬 => pop() => 오름 차순으로 나옴
  }

  const answer = [];

  // graph[node]에서 하나씩 다음 경로로 이동
  const dfs = (node) => {
    answer.push(node);
    const nextNode = graph[node].pop();
    if (nextNode) {
      dfs(nextNode);
    }
  };

  dfs("ICN");

  return answer;
}

console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
); // [ 'ICN', 'ATL', 'ICN', 'SFO', 'ATL', 'SFO' ]
