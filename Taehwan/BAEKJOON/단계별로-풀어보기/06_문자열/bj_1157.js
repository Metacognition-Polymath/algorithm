{
  // 5. 단어 공부
  /**
   * 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.
   * 첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.
   * 첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.
   * zZa => Z
   * Mississipi => ?
   */
  const fs = require("fs");
  const inputString = fs.readFileSync("/dev/stdin").toString().trim();
  const loweredString = inputString.toUpperCase();
  const stringList = loweredString.split(""); // [z, z, a]
  const uniqueList = [...new Set(stringList)]; // [z, a]
  // const stringList = ["z", "a", "a", "z"];
  // const uniqueList = [...new Set(stringList)];
  // 중복 제거 + 각 알파벳이 몇개 존재하는지 카운트
  const charCountObjList = uniqueList.map((char) => {
    return {
      char: char,
      count: stringList.filter((str) => str === char).length,
    };
  });
  // 카운트가 가장 많은 알파벳을 찾아서 반환
  const maxCount = Math.max(...charCountObjList.map((obj) => obj.count));
  const maxCharList = charCountObjList.filter((obj) => obj.count === maxCount);
  if (maxCharList.length > 1) {
    console.log("?");
  } else {
    console.log(maxCharList[0].char);
  }
}

// 다른 사람들 풀이를 검색해보니 alphabet list를 만들고 카운트하는 방식을 사용했다. 별로인 것 같아서 여기에 추가하지 않음
