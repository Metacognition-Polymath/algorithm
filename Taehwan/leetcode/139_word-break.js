/**
 * Given a string s and a dictionary of strings wordDict,
 * return true if s can be segmented into a space-separated sequence of one or more dictionary words.
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 */

// 혼자 풀어보기 gg => fail
// /**
//  * @param {string} s
//  * @param {string[]} wordDict
//  * @return {boolean}
//  */
// var wordBreak = function (s, wordDict) {
//   const checkEmptyString = (str) => {
//     const result = str.replaceAll(" ", "");
//     return result;
//   };
//   let word = s;

//   for (let i = 0; i < wordDict.length; i++) {
//     for (const eachWord of wordDict) {
//       word = word.replaceAll(eachWord, " ");
//       console.log("word", word);
//     }
//     if (checkEmptyString(word) === "") {
//       return true;
//     }

//     word = s;
//     wordDict.shift();
//   }

//   return false;
// };

// copilot => pass
// /**
//  * @param {string} s
//  * @param {string[]} wordDict
//  * @return {boolean}
//  */
// var wordBreak = function (s, wordDict) {
//   const dy = Array.from({ length: s.length + 1 }, () => false);
//   dy[0] = true;

//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       const word = s.slice(i, j);
//       if (dy[i] && wordDict.includes(word)) {
//         dy[j] = true;
//       }
//     }
//   }

//   return dy[s.length];
// };

// 정답 해설
/**
 * https://youtu.be/Sx9NNgInc3A
 * decision tree -> cache -> dp
 * - bottom up
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // i = 0 => neet, leet, code
  // i = 4 => neet, leet, code
  // i = 8 => dp[8] = true
  // dp[7] = false // e
  // dp[6] = false // de
  // dp[5] = false // ode
  // dp[4] = true // code
  // dp[3] = false // t
  // dp[2] = false // et
  // dp[1] = false // eet
  // dp[0] = true // neet
  // dp[0] = dp[0+4] = true

  dp = Array.from({ length: s.length + 1 }, () => false);
  dp[s.length] = true;

  for (let i = s.length - 1; i >= 0; i--) {
    for (const w of wordDict) {
      if (i + w.length <= s.length && s.slice(i, i + w.length) === w) {
        dp[i] = dp[i + w.length];
      }
      if (dp[i]) break;
    }
  }

  return dp[0];
};

console.log(wordBreak("neetcode", ["neet", "leet", "code"])); // true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false
console.log(wordBreak("ccaccc", ["cc", "ac"])); // true
