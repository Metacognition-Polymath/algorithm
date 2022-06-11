{
  // 3. 알파벳 찾기
  /**
   * 알파벳 소문자로만 이루어진 단어 S가 주어진다. 각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.
   * 첫째 줄에 단어 S가 주어진다. 단어의 길이는 100을 넘지 않으며, 알파벳 소문자로만 이루어져 있다.
   * 각각의 알파벳에 대해서, a가 처음 등장하는 위치, b가 처음 등장하는 위치, ... z가 처음 등장하는 위치를 공백으로 구분해서 출력한다.
   */
  const inputString = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim();
  // const inputString = "backjoon";
  function getS() {
    let s = "";
    for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
      s += String.fromCharCode(i);
    }
    return s;
  }
  const s = getS();
  // console.log(s);
  const result = s
    .split("")
    .map((char) => {
      return inputString.indexOf(char);
    })
    .join(" ");
  console.log(result);
}
