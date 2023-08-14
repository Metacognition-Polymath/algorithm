/**
 * [문제 설명]
 * 두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 
 * 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.
 * 1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
 * 2. words에 있는 단어로만 변환할 수 있습니다.
 * 
 * 예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.
 * 두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.

[제한사항]
각 단어는 알파벳 소문자로만 이루어져 있습니다.
각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
begin과 target은 같지 않습니다.
변환할 수 없는 경우에는 0를 return 합니다.

입출력 예
begin / target / words => return
"hit" /	"cog" /	["hot", "dot", "dog", "lot", "log", "cog"] => 4
"hit" / "cog" / ["hot", "dot", "dog", "lot", "log"] => 0
 */
/**
 * 함수의 입력으로 begin, target, 그리고 변환 가능한 단어들의 집합인 words가 주어집니다.
 * 함수의 출력은 최소 몇 단계의 변환 과정을 거쳐 begin을 target으로 변환할 수 있는지를 반환합니다.
 * 변환할 수 없는 경우에는 0을 반환합니다.
 */
// function solution(begin, target, words) {
//   // answer 변수는 최소 단계를 저장하는 변수이며, 초기값은 0으로 설정됩니다.
//   let answer = 0;
//   // visited 배열은 변환 가능한 단어들을 방문했는지 여부를 저장하는 배열로, 초기에는 모든 원소가 false로 초기화됩니다.
//   let visited = Array(words.length).fill(false);
//   // queue 배열은 BFS 알고리즘을 위한 큐(queue)로, 초기에 begin 단어와 단계 수를 저장한 배열이 큐에 추가됩니다.
//   let queue = [];
//   queue.push([begin, 0]);
//   while (queue.length) {
//     let [word, count] = queue.shift();
//     console.log("word", word, "count", count);
//     if (word === target) {
//       answer = count;
//       break;
//     }
//     // 아직 방문하지 않은 변환 가능한 단어들 중에서 word와 정확히 한 개의 알파벳만 다른 단어들을 찾습니다.
//     for (let i = 0; i < words.length; i++) {
//       if (!visited[i] && check(word, words[i])) {
//         visited[i] = true;
//         queue.push([words[i], count + 1]);
//       }
//     }
//   }
//   return answer;
// }

// /**
//  * check 함수는 두 개의 단어 word와 target을 비교하여
//  * 두 단어가 정확히 한 개의 알파벳만 다른 경우 true를 반환하고,
//  * 그렇지 않은 경우 false를 반환합니다.
//  */
// function check(word, target) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] !== target[i]) count++;
//   }
//   return count === 1 ? true : false;
// }

// console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 4
// console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 0

// 단어 자체를 교체 해버리는 것이었다 - 단어의 한 글자를 바꾸는 것이 아니었음

// 복습 1회차
// function solution(begin, target, words) {
//   // 접근 : 한글자 씩 교체 가능한 단어를 교체해서 target 단어랑 같으면 빠져나간다
//   // BFS로 순회하기 때문에 처음으로 발견 가능한 것이 답이 된다

//   const visited = Array.from({ length: words.length }, () => false);
//   const queue = []; // [word, count][]

//   queue.push([begin, 0]);

//   let answer = 0;
//   while (queue.length) {
//     const [word, count] = queue.shift();

//     if (word === target) {
//       answer = count;
//       break;
//     }

//     for (let i = 0; i < words.length; i++) {
//       if (!visited[i] && check(word, words[i])) {
//         // 교체한적이 없고 한글자만 다른 것
//         visited[i] = true;
//         queue.push([words[i], count + 1]);
//       }
//     }
//   }

//   return answer;
// }

// function check(word1, word2) {
//   let count = 0;
//   for (let i = 0; i < word1.length; i++) {
//     if (word1[i] !== word2[i]) {
//       // 다른 경우에 카운트를 해야 함
//       count++;
//     }
//   }
//   return count === 1 ? true : false;
// }

// console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 4
// console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 0

// 복습 2회차
function solution(begin, target, words) {
  let answer = 0;
  const visited = Array.from({ length: words.length }, () => false);
  const queue = []; // [word, count][]

  queue.push([begin, 0]);

  while (queue.length) {
    const [word, count] = queue.shift();

    if (word === target) {
      answer = count;
      break;
    }

    for (let i = 0; i < words.length; i++) {
      if (!visited[i] && check(word, words[i])) {
        visited[i] = true;
        queue.push([words[i], count + 1]);
      }
    }
  }

  return answer;
}

function check(word1, word2) {
  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      // 다른 경우에 카운트를 해야 함
      count++;
    }
  }
  return count === 1 ? true : false;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 4
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 0
