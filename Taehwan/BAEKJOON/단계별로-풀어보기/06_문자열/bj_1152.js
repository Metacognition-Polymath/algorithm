{
  // 6. 단어의 개수
  /**
   * 영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 이 문자열에는 몇 개의 단어가 있을까? 이를 구하는 프로그램을 작성하시오.
   * 단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다.
   * input : The Curious Case of Benjamin Button
   * output : 6
   */
  const fs = require("fs");
  const inputString = fs.readFileSync("/dev/stdin").toString().trim();
  // const inputString = "The Curious Case of Benjamin Button";
  // const inputString = "";
  function getWordCount(str) {
    if (str === "") {
      return 0;
    }
    return str.split(" ").length;
  }
  console.log(getWordCount(inputString));
}
// 첫 번째 시도에 오답이 나온 이유는 "" 일 때 0이 아닌 1로 나오기 때문이다.
// 참고 : https://velog.io/@exploit017/%EB%B0%B1%EC%A4%80Node.js-1152%EB%B2%88-%EB%8B%A8%EC%96%B4%EC%9D%98-%EA%B0%9C%EC%88%98
