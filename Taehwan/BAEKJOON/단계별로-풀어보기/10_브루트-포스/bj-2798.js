{
  // 1. 블랙잭
  /**
   * 첫째 줄에 카드의 개수 N(3 ≤ N ≤ 100)과 M(10 ≤ M ≤ 300,000)이 주어진다.
   * 둘째 줄에는 카드에 쓰여 있는 수가 주어지며, 이 값은 100,000을 넘지 않는 양의 정수이다.
   * 합이 M을 넘지 않는 카드 3장을 찾을 수 있는 경우만 입력으로 주어진다.
   * input : 5 21 \n 5 6 7 8 9
   * output : 21
   */
  // 전략 1: 3개씩 더하면서 구한 합을 배열에 저장, 만약 그 합이 M이라면 즉시 종료하고 리턴
  // 전략 2: 3개씩 더한 합을 모두 구하는 동안 M이랑 일치하는 것이 없다면 M과 가장 가까운 수를 찾는다
  const input = `5 21\n5 6 7 8 9`;
  const [N, M] = input.split("\n")[0].split(" ").map(Number);
  const cards = input.split("\n")[1].split(" ").map(Number);
  const sumArray = [];
  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        // if (cards[i] + cards[j] + cards[k] === M) {
        //   console.log(cards[i] + cards[j] + cards[k]);
        //   return;
        // }
        sumArray.push(cards[i] + cards[j] + cards[k]);
      }
    }
  }
  console.log(sumArray);
  // 가장 가까운 수를 찾기 : M과 각 합의 차이의 절대값이 가장 작은 것을 찾는다
  const diffArray = sumArray.map((sum) => Math.abs(M - sum));

  const minDiff = Math.min(...diffArray);
  const minIndex = diffArray.indexOf(minDiff);
  console.log(sumArray[minIndex]);
}
