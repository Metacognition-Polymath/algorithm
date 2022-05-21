// 단계 - 문제 번호 - 제목
{
  // 1 - 1330 - 두 수 비교하기
  /**
    첫째 줄에 다음 세 가지 중 하나를 출력한다.
    A가 B보다 큰 경우에는 '>'를 출력한다.
    A가 B보다 작은 경우에는 '<'를 출력한다.
    A와 B가 같은 경우에는 '=='를 출력한다.
   */
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().split(" ");
  const a = parseInt(input[0]);
  const b = parseInt(input[1]);
  if (a > b) {
    console.log(">");
  } else if (a < b) {
    console.log("<");
  } else {
    console.log("==");
  }
}
{
  // 2 - 9498 - 시험 성적
  /**
   * 시험 점수를 입력받아 90 ~ 100점은 A,
   * 80 ~ 89점은 B, 70 ~ 79점은 C,
   * 60 ~ 69점은 D,
   * 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
   */
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString();
  const score = parseInt(input);
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}
{
  // 3 - 2753 - 윤년
  /**
   * 연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.
  윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
  예를 들어, 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다.
  1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다.
  하지만, 2000년은 400의 배수이기 때문에 윤년이다.
   */
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString();
  const year = parseInt(input);
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(1);
  } else {
    console.log(0);
  }
}
{
  // 5 - 2884 - 알람시계
  /**
   * 상근이는 매일 아침 알람을 듣고 일어난다. 알람을 듣고 바로 일어나면 다행이겠지만, 항상 조금만 더 자려는 마음 때문에 매일 학교를 지각하고 있다.

상근이는 모든 방법을 동원해보았지만, 조금만 더 자려는 마음은 그 어떤 것도 없앨 수가 없었다.

이런 상근이를 불쌍하게 보던, 창영이는 자신이 사용하는 방법을 추천해 주었다.

바로 "45분 일찍 알람 설정하기"이다.

이 방법은 단순하다. 원래 설정되어 있는 알람을 45분 앞서는 시간으로 바꾸는 것이다. 어차피 알람 소리를 들으면, 알람을 끄고 조금 더 잘 것이기 때문이다. 이 방법을 사용하면, 매일 아침 더 잤다는 기분을 느낄 수 있고, 학교도 지각하지 않게 된다.

현재 상근이가 설정한 알람 시각이 주어졌을 때, 창영이의 방법을 사용한다면, 이를 언제로 고쳐야 하는지 구하는 프로그램을 작성하시오.
   */
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString();
  const [_hour, minute] = input.split(" ").map((v) => parseInt(v));
  const hour = _hour === 0 ? 24 : _hour;
  const result = (hour * 60 + minute - 45) % 1440;
  const resultHour = Math.floor(result / 60);
  const resultMinute = result % 60;
  console.log(`${resultHour} ${resultMinute}`);
}
{
  // 6 - 2525 - 오븐 시계
  /**
   * 첫 째 줄에 공백을 구분으로 시간, 분이 주어지고
   * 둘 째 줄에 조리하는데 걸리는 시간이 주어진다
   * 완료되는 시간을 표시하라
   */
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString();
  const [timeString, cookingTime] = input.split("\n");
  const [_hour, minute] = timeString.split(" ").map((v) => parseInt(v));
  const hour = _hour === 0 ? 24 : _hour;
  const result = (hour * 60 + minute + parseInt(cookingTime)) % 1440;
  const resultHour = Math.floor(result / 60);
  const resultMinute = result % 60;
  console.log(`${resultHour} ${resultMinute}`);
}
{
  // 7 - 2480 - 주사위 세개
  /**
   * 1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다. 

같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.  
예를 들어, 3개의 눈 3, 3, 6이 주어지면 상금은 1,000+3×100으로 계산되어 1,300원을 받게 된다. 또 3개의 눈이 2, 2, 2로 주어지면 10,000+2×1,000 으로 계산되어 12,000원을 받게 된다. 3개의 눈이 6, 2, 5로 주어지면 그중 가장 큰 값이 6이므로 6×100으로 계산되어 600원을 상금으로 받게 된다.

3개 주사위의 나온 눈이 주어질 때, 상금을 계산하는 프로그램을 작성 하시오.
   */
  // const fs = require("fs");
  // const input = fs.readFileSync("/dev/stdin").toString();
  const input = "3 3 6";
  const [dice1, dice2, dice3] = input.split(" ").map((v) => parseInt(v));
  const max = Math.max(dice1, dice2, dice3);

  if (dice1 === dice2 && dice2 === dice3) {
    // 세 개가 다 같은 경우
    console.log(10000 + max * 1000);
  } else if (dice1 === dice2) {
    // 두 개가 같은 경우
    // max가 아닌 같은 눈이 어떤 것인지 알아야 함
    console.log(1000 + dice1 * 100);
  } else if (dice2 === dice3) {
    console.log(1000 + dice2 * 100);
  } else if (dice3 === dice1) {
    console.log(1000 + dice3 * 100);
  } else {
    // 모두 다른 경우
    console.log(max * 100);
  }
}
