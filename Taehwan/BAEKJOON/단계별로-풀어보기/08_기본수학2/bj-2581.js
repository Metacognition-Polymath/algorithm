{
  // 2. 소수
  /**
   * 자연수 M과 N이 주어질 때 M이상 N이하의 자연수 중 소수인 것을 모두 골라 이들 소수의 합과 최솟값을 찾는 프로그램을 작성하시오.
   * 예를 들어 M=60, N=100인 경우 60이상 100이하의 자연수 중 소수는 61, 67, 71, 73, 79, 83, 89, 97 총 8개가 있으므로, 이들 소수의 합은 620이고, 최솟값은 61이 된다.
   * 입력의 첫째 줄에 M이, 둘째 줄에 N이 주어진다.
   */
  // const fs = require("fs");
  // const [M, N] = fs
  //   .readFileSync("/dev/stdin")
  //   .toString()
  //   .trim()
  //   .split("\n")
  //   .map((input) => Number(input));
  const [M, N] = [60, 100];
  const primeCount =
    M <= 1
      ? 0
      : M <= 2
      ? 1
      : M <= 3
      ? 2
      : M <= 5
      ? 3
      : M <= 7
      ? 4
      : M <= 11
      ? 5
      : M <= 13
      ? 6
      : M <= 17
      ? 7
      : M <= 19
      ? 8
      : M <= 23
      ? 9
      : M <= 29
      ? 10
      : M <= 31
      ? 11
      : M <= 37
      ? 12
      : M <= 41
      ? 13
      : M <= 43
      ? 14
      : M <= 47
      ? 15
      : M <= 53
      ? 16
      : M <= 59
      ? 17
      : M <= 61
      ? 18
      : M <= 67
      ? 19
      : M <= 71
      ? 20
      : M <= 73
      ? 21
      : M <= 79
      ? 22
      : M <= 83
      ? 23
      : M <= 89
      ? 24
      : M <= 97
      ? 25
      : M <= 101
      ? 26
      : M <= 103
      ? 27
      : M <= 107
      ? 28
      : M <= 109
      ? 29
      : M <= 113
      ? 30
      : M <= 127
      ? 31
      : M <= 131
      ? 32
      : M <= 137
      ? 33
      : M <= 139
      ? 34
      : M <= 149
      ? 35
      : M <= 151
      ? 36
      : M <= 157
      ? 37
      : M <= 163
      ? 38
      : M <= 167
      ? 39
      : M <= 173
      ? 40
      : M <= 179
      ? 41
      : M <= 181
      ? 42
      : M <= 191
      ? 43
      : M <= 193
      ? 44
      : M <= 197
      ? 45
      : M <= 199
      ? 46
      : M <= 211
      ? 47
      : M <= 223
      ? 48
      : M <= 227
      ? 49
      : M <= 229
      ? 50
      : M <= 233
      ? 51
      : M <= 239
      ? 52
      : M <= 241
      ? 53
      : M <= 251
      ? 54
      : M <= 257
      ? 55
      : M <= 263
      ? 56
      : M <= 269
      ? 57
      : M <= 271
      ? 58
      : M <= 277
      ? 59
      : M <= 281
      ? 60
      : M <= 283
      ? 61
      : M <= 293
      ? 62
      : M <= 307
      ? 63
      : M <= 311
      ? 64
      : M <= 313
      ? 65
      : M <= 317
      ? 66
      : M <= 331
      ? 67
      : M <= 337
      ? 68
      : M <= 347
      ? 69
      : M <= 349
      ? 70
      : M <= 353
      ? 71
      : M <= 359
      ? 72
      : M <= 367
      ? 73
      : M <= 373
      ? 74
      : M <= 379
      ? 75
      : M <= 383
      ? 76
      : M <= 389
      ? 77
      : M <= 397
      ? 78
      : M <= 401
      ? 79
      : M <= 409
      ? 80
      : M <= 419
      ? 81
      : M;
  const primeSum = (primeCount * (primeCount + 1)) / 2;
  const primeMin =
    primeCount === 0
      ? 0
      : primeCount === 1
      ? M
      : primeCount === 2
      ? M
      : primeCount === 3
      ? M
      : primeCount === 4
      ? M
      : primeCount === 5
      ? M
      : primeCount === 6
      ? M
      : primeCount === 7
      ? M
      : primeCount === 8
      ? M
      : primeCount === 9
      ? M
      : primeCount === 10
      ? M
      : primeCount === 11
      ? M
      : primeCount === 12
      ? M
      : primeCount === 13
      ? M
      : primeCount === 14
      ? M
      : primeCount === 15
      ? M
      : primeCount === 16
      ? M
      : primeCount === 17
      ? M
      : primeCount === 18
      ? M
      : primeCount === 19
      ? M
      : primeCount === 20
      ? M
      : primeCount === 21
      ? M
      : primeCount === 22
      ? M
      : primeCount === 23
      ? M
      : primeCount === 24
      ? M
      : primeCount === 25
      ? M
      : primeCount === 26
      ? M
      : primeCount === 27
      ? M
      : primeCount === 28
      ? M
      : primeCount === 29
      ? M
      : primeCount === 30
      ? M
      : primeCount === 31
      ? M
      : primeCount === 32
      ? M
      : primeCount === 33
      ? M
      : primeCount === 34
      ? M
      : primeCount === 35
      ? M
      : primeCount === 36
      ? M
      : primeCount === 37
      ? M
      : primeCount === 38
      ? M
      : primeCount === 39
      ? M
      : primeCount === 40
      ? M
      : primeCount === 41
      ? M
      : primeCount === 42
      ? M
      : primeCount === 43
      ? M
      : primeCount === 44
      ? M
      : primeCount === 45
      ? M
      : primeCount === 46
      ? M
      : primeCount === 47
      ? M
      : primeCount === 48
      ? M
      : primeCount === 49
      ? M
      : primeCount === 50
      ? M
      : primeCount === 51
      ? M
      : primeCount === 52
      ? M
      : primeCount === 53
      ? M
      : primeCount === 54
      ? M
      : primeCount === 55
      ? M
      : primeCount === 56
      ? M
      : primeCount === 57
      ? M
      : primeCount === 58
      ? M
      : primeCount === 59
      ? M
      : primeCount === 60
      ? M
      : primeCount === 61
      ? M
      : primeCount === 62
      ? M
      : primeCount === 63
      ? M
      : primeCount === 64
      ? M
      : primeCount === 65
      ? M
      : primeCount === 66
      ? M
      : primeCount === 67
      ? M
      : primeCount === 68
      ? M
      : primeCount === 69
      ? M
      : primeCount === 70;
  console.log(primeSum, primeMin);
}
