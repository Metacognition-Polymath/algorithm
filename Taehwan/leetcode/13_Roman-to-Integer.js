/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

Constraints:
1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 */
/**
 * @param {string} s
 * @return {number}
 */
// var romanToInt = function (s) {
//   let result = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "I") {
//       if (s[i + 1] === "V") {
//         result += 4;
//         i++;
//       } else if (s[i + 1] === "X") {
//         result += 9;
//         i++;
//       } else {
//         result += 1;
//       }
//     } else if (s[i] === "V") {
//       result += 5;
//     } else if (s[i] === "X") {
//       if (s[i + 1] === "L") {
//         result += 40;
//         i++;
//       } else if (s[i + 1] === "C") {
//         result += 90;
//         i++;
//       } else {
//         result += 10;
//       }
//     } else if (s[i] === "L") {
//       result += 50;
//     } else if (s[i] === "C") {
//       if (s[i + 1] === "D") {
//         result += 400;
//         i++;
//       } else if (s[i + 1] === "M") {
//         result += 900;
//         i++;
//       } else {
//         result += 100;
//       }
//     } else if (s[i] === "D") {
//       result += 500;
//     } else if (s[i] === "M") {
//       result += 1000;
//     }
//   }

//   return result;
// };

// var romanToInt = function (s) {
//   const sym = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let result = 0;

//   for (let i = 0; i < s.length; i++) {
//     const cur = sym[s[i]];
//     const next = sym[s[i + 1]];

//     if (cur < next) {
//       result += next - cur;
//       i++;
//     } else {
//       result += cur;
//     }
//   }

//   return result;
// };

/**
 * 먼저 로마 문자와 해당하는 값의 매핑을 정의합니다.
결과값을 0으로 초기화합니다.
문자열을 끝부터 시작까지 반복하면서:
현재 문자의 값이 이전 문자의 값보다 크거나 같다면, 결과값에 더합니다.
그렇지 않으면, 결과값에서 현재 문자의 값을 뺍니다.
 */
var romanToInt = function (s) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanValues[s[i]];
    if (currentValue >= prevValue) {
      result += currentValue;
    } else {
      result -= currentValue;
    }

    prevValue = currentValue;
  }

  return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("IV"));
