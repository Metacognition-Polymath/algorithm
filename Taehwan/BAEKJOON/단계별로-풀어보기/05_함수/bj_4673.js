{
  // 2. 셀프넘버
  /**
   * 양의 정수 n에 대해서 d(n)을 n과 n의 각 자리수를 더하는 함수
   * 예를 들어, d(75) = 75+7+5 = 87이다.
   * n, d(n), d(d(n)), d(d(d(n))), ...과 같은 무한 수열을 만들 수 있다.
   * 예를 들어, 33으로 시작한다면 다음 수는 33 + 3 + 3 = 39이고, 그 다음 수는 39 + 3 + 9 = 51, 다음 수는 51 + 5 + 1 = 57이다.
   * 33, 39, 51, 57, 69, 84, 96, 111, 114, 120, 123, 129, 141, ...
   * n을 d(n)의 생성자라고 한다. 위의 수열에서 33은 39의 생성자이고, 39는 51의 생성자, 51은 57의 생성자이다. 생성자가 한 개보다 많은 경우도 있다. 예를 들어, 101은 생성자가 2개(91과 100) 있다.
   * 생성자가 없는 숫자를 셀프 넘버라고 한다.
   * 100보다 작은 셀프 넘버는 총 13개가 있다. 1, 3, 5, 7, 9, 20, 31, 42, 53, 64, 75, 86, 97
   * 10000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
   */
  const TEST_NUMBER = 10000;
  function d(n) {
    const inputNum = n;
    let num = n;
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return inputNum + sum;
  }
  // 1부터 10000까지 d(n)에 대입해서 숫자를 구하고
  // 이를 배열에 담아서 중복을 제거한다. - 생략
  // 배열에 담긴 숫자가 아닌 숫자들은 셀프넘버 이다
  const nonSelfNumArr = [];
  for (let i = 1; i <= TEST_NUMBER; i++) {
    num = d(i);
    nonSelfNumArr.push(num);
  }
  console.log(nonSelfNumArr);
  for (let i = 1; i <= TEST_NUMBER; i++) {
    if (!nonSelfNumArr.includes(i)) {
      console.log(i);
    }
  }
}
{
  // 다른 사람 풀이 1
  // 참고 : https://laycoder.tistory.com/185
  function d(n) {
    let number = n;
    let result = 0;

    for (let i = 0; i < String(n).length; i++) {
      // number를 10으로 나눠가면서 각 자리수를 result에 합한다.
      result += number % 10;
      number = Math.floor(number / 10);
    }
    // 입력받은 수 와 result를 더하여 return
    return n + result;
  }

  const range = 10000;
  // 0~10000 범위까지 셀프넘버 배열을 생성하고 true로 초기화.
  let selfNumbers = Array(range + 1).fill(true);

  for (let i = 0; i <= range; i++) {
    // 셀프넘버가 아니면 false로 변환.
    selfNumbers[d(i)] = false; // ** index로 접근하는 발상 괜찮네 **
    // 문제점 : d(i) 가 10000 이 넘으면 다른 언어에선 에러가 발생할 것이다
  }

  // true index만 출력
  for (let i = 0; i < range; i++) {
    if (selfNumbers[i]) {
      console.log(i);
    }
  }
}
