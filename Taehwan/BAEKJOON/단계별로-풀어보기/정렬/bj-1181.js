{
  // 단어 정렬
  /**
   * 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.\
   * 조건
    1. 길이가 짧은 것부터
    2. 길이가 같으면 사전 순으로
   */
  //   const inputs = `13
  // but
  // i
  // wont
  // hesitate
  // no
  // more
  // no
  // more
  // it
  // cannot
  // wait
  // im
  // yours`;
  const fs = require("fs");
  const inputs = fs.readFileSync("/dev/stdin").toString().trim();
  const [N, ...words] = inputs.split("\n");

  // 단어를 글자 순으로 정렬
  const sortWords = (words) => {
    return words.sort((a, b) => {
      if (a.length === b.length) {
        return a > b ? 1 : -1;
      }
      return a.length - b.length;
    });
  };

  // 단어 중복 제거
  const uniqueWords = (words) => {
    return [...new Set(words)];
  };

  // 출력
  const print = (words) => {
    words.forEach((item) => console.log(item));
  };

  // 실행
  const wordsSorted = sortWords(words);
  const wordsUnique = uniqueWords(wordsSorted);
  print(wordsUnique);
}
