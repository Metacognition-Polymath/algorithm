{
  // 4. 달팽이는 올라가고 싶다
  /**
   * 땅 위에 달팽이가 있다. 이 달팽이는 높이가 V미터인 나무 막대를 올라갈 것이다.
   * 달팽이는 낮에 A미터 올라갈 수 있다. 하지만, 밤에 잠을 자는 동안 B미터 미끄러진다. 또, 정상에 올라간 후에는 미끄러지지 않는다.
   * 달팽이가 나무 막대를 모두 올라가려면, 며칠이 걸리는지 구하는 프로그램을 작성하시오.
   * 첫째 줄에 세 정수 A, B, V가 공백으로 구분되어서 주어진다.
   */
  // const fs = require("fs");
  // const [A, B, V] = fs
  //   .readFileSync("/dev/stdin", "utf8")
  //   .toString()
  //   .trim()
  //   .split(" ")
  //   .map(Number);
  const [A, B, V] = [5, 1, 6];
  function getDayCount(A, B, V) {
    let dayCount = 0;
    // 최초 올라가는 높이 A
    // 한번 올라갈 때 V에 도달 못 했다면 -B
    let restHeight = V;
    while (restHeight >= 0) {
      dayCount++;
      restHeight -= A;
      if (restHeight <= 0) {
        break;
      }
      restHeight += B;
    }
    return dayCount;
  }
  console.log(getDayCount(A, B, V));
  // 시간 초과
}

{
  // 다른 사람 풀이
  /**
   *  높이 V를 A-B로 나눠주는 방법이 가장 효율적이다.
하지만, 정상에 도착하면 미끄러지지 않기 때문에 B가 결국 한 번 더 계산식에 들어가는 셈이다.
따라서, 높이에V에 B를 빼주면 위 문제를 해결할 수 있다.
딱 떨어지지 않는 수가 나올 때는, 하루가 더 필요하다는 뜻이기 때문에 Math.ceil로 올림을 해주면 같은 효과를 볼 수 있다.
   */
  // 참고 : https://dpsc615.tistory.com/93
  const [A, B, V] = [5, 1, 6];
  console.log(Math.ceil((V - B) / (A - B)));
}
