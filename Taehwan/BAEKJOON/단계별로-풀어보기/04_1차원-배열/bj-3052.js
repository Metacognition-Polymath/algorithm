{
  // 4. 나머지
  /**
   * 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다.
   * 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.
   * 첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다. 이 숫자는 1,000보다 작거나 같고, 음이 아닌 정수이다.
   */
  const inputArr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  // const inputArr = [42, 1, 2, 3, 84, 4, 5];
  const remainders = inputArr.map((num) => num % 42);
  // remainders 에서 서로 다른 값이 몇 개 있는지
  // 중복 제거
  // 중복 제거 방법 1
  // const uniqueRemainders = remainders.filter(
  //   (num, index) => remainders.indexOf(num) === index
  // );
  // console.log(uniqueRemainders.length);
  // 중복 제거 방법 2
  const uniqueRemaindersSet = new Set(remainders);
  console.log(uniqueRemaindersSet.size);
}
