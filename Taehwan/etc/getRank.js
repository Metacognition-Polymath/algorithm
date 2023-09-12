const scores = [87, 87, 100, 87, 80];

// 점수를 내림차순으로 정렬하고 등수 매기기
const sortedScores = [...scores].sort((a, b) => b - a);
const ranker = {};

let currentRank = 1;
let previousScore = null;

sortedScores.forEach((score, index) => {
  if (score !== previousScore) {
    ranker[score] = currentRank;
    previousScore = score;
  }
  currentRank++;
});

const result = scores.map((score) => ranker[score]);
console.log("ranker", ranker);
console.log(result);
