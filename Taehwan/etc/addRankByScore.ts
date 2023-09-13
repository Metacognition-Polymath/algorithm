type Param = {
  [key: string]: any;
};
/**
 * [
    { score: 90 },
    { score: 100 },
    { score: 80 },
    { score: 70 },
    { score: 90 },
  ] => [
    { score: 90, rank: 2 },
    { score: 100, rank: 1 },
    { score: 80, rank: 4 },
    { score: 70, rank: 5 },
    { score: 90, rank: 2 },
  ]
 */
const addRankByScore = <T extends Param>(
  params: T[],
  scoreField: keyof T = "score",
  rankField: keyof T = "rank"
): T[] => {
  const sortedParams = [...params].sort(
    (a, b) => b[scoreField] - a[scoreField]
  );
  const rankByScore = {} as Record<number, number>; // { score: rank }
  let currentRank = 1;
  let previousScore = Number.MAX_SAFE_INTEGER;

  sortedParams.forEach((param) => {
    if (param[scoreField] !== previousScore) {
      rankByScore[param[scoreField]] = currentRank;
      previousScore = param[scoreField];
    }
    currentRank++;
  });

  return params.map((param) => ({
    ...param,
    [rankField]: rankByScore[param[scoreField]],
  }));
};

console.log(
  addRankByScore([
    { score: 90, id: 1, name: "taehwan" },
    { score: 100, id: 2 },
    { score: 80, id: 3 },
    { score: 70, id: 4 },
    { score: 90, id: 5 },
  ])
);
