{
  // 10. 그룹 단어 체커
  /**
   * 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다.
   * 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고,
   * kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만,
   * aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.
   * 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.
   * input : aabbbccb
   * output : false
   * input : aabbbcc
   * output : true
   */
  // originString :원본
  // uniqueString : 중복제거한 문자열
  // uniqueString에서 각각의 문자에 대한 index group을 구하고 첫 index를 전부 빼준다
  // index group에서 0이 아닌 숫자가 존재한다면 그 문자열은 그룹 단어가 아니다
  // const fs = require("fs");
  // const [inputCount, ...inputStringList] = fs
  //   .readFileSync("/dev/stdin")
  //   .toString()
  //   .trim()
  //   .split("\n");
  const [inputCount, ...inputStringList] = [
    "3",
    "aabbbccb",
    "aabbbcc",
    "happy",
  ]; //  => false, true, true
  function isGroupWord(inputStr) {
    const originStrCharList = inputStr.split(""); // ["a", "a", "b", "b", "b", "c", "c", "b"]
    const subOriginCharWithIndexObjList = originStrCharList.map(
      (char, index) => {
        return {
          char,
          index: index - originStrCharList.indexOf(char), // 0, 1, 2, ...
        };
      }
    );
    for (let i = 0; i < subOriginCharWithIndexObjList.length; i++) {
      const eachCharObjList = subOriginCharWithIndexObjList.filter(
        (obj) => obj.char === subOriginCharWithIndexObjList[i].char
      );
      for (let j = 0; j < eachCharObjList.length; j++) {
        if (eachCharObjList[j].index !== j) {
          return false;
        }
      }
    }

    return true;
  }

  const result = inputStringList.filter(isGroupWord).length;
  console.log(result);
}

{
  // 다른 사람 풀이
  // 알파벳이 바뀌는 시점에서 중복체크를 했을 때
  // 바뀌기 전 알파벳이 여전히 포함되어 있다면 그룹 단어가 아니다
  // 참고 : https://gobae.tistory.com/79
}
