{
  // 1 - 2739 - 구구단
  /**
   * N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.
   */
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString();
  const n = parseInt(input);
  for(let i = 0; i < 9; i++) {
    console.log(`${n} * ${i+1} = ${n*(i+1)}`);
  }
}