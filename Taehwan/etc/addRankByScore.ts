type PickRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

type Param = {
  score: number;
  rank?: number;
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
  params: T[]
): PickRequired<T, "rank">[] => {
  const sortedParams = [...params].sort((a, b) => b.score - a.score);
  const rankByScore = {} as Record<number, number>; // { score: rank }
  let currentRank = 1;
  let previousScore = Number.MAX_SAFE_INTEGER;

  sortedParams.forEach((param) => {
    if (param.score !== previousScore) {
      rankByScore[param.score] = currentRank;
      previousScore = param.score;
    }
    currentRank++;
  });

  return params.map((param) => ({
    ...param,
    rank: rankByScore[param.score],
  }));
};

console.log(
  addRankByScore([
    { score: 90, id: 1 },
    { score: 100, id: 2 },
    { score: 80, id: 3 },
    { score: 70, id: 4 },
    { score: 90, id: 5 },
  ])
);
