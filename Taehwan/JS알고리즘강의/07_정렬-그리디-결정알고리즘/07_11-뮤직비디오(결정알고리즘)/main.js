/**
 * 문제
 * 뮤직비디오(결정알고리즘)
 * 지니레코드에서는 불세출의 가수 조영필의 라이브 동영상을 DVD로 만들어 판매하려 한다.
 * DVD에는 총 N개의 곡이 들어가는데, DVD에 녹화할 때에는 라이브에서의 순서가 그대로 유지 되어야 한다. 
 * 순서가 바뀌는 것을 우리의 가수 조영필씨가 매우 싫어한다. 즉, 1번 노래와 5번 노래를 같은 DVD에 녹화하기 위해서는 1번과 5번 사이의 모든 노래도 같은 DVD에 녹화해야 한다.
 * 또한 한 노래를 쪼개서 두 개의 DVD에 녹화하면 안된다.
 * 지니레코드 입장에서는 이 DVD가 팔릴 것인지 확신할 수 없기 때문에 이 사업에 낭비되는 DVD를 가급적 줄이려고 한다. 
 * 고민 끝에 지니레코드는 M개의 DVD에 모든 동영상을 녹화하기 로 하였다. 
 * 이 때 DVD의 크기(녹화 가능한 길이)를 최소로 하려고 한다.
 * 그리고 M개의 DVD는 모두 같은 크기여야 제조원가가 적게 들기 때문에 꼭 같은 크기로 해야 한다.
 * DVD의 최소 용량 크기를 출력하세요.
 * 
 * 입력 설명
 * 첫째 줄에 자연수 N(1≤N≤1,000), M(1≤M≤N)이 주어진다. 다음 줄에는 조영필이 라이브에서 부른 순서대로 부른 곡의 길이가 분 단위로(자연수) 주어진다. 부른 곡의 길이는 10,000분을 넘지 않는다고 가정하자.
 * 
 3개의 DVD용량이 17분짜리이면 (1, 2, 3, 4, 5) (6, 7), (8, 9) 이렇게 3개의 DVD로 녹음을 할 수 있다. 
 17분 용량보다 작은 용량으로는 3개의 DVD에 모든 영상을 녹화할 수 없다.

 입력 예시
 [1, 2, 3, 4, 5, 6, 7, 8, 9]

 출력 예시
 17
 */
// /**
//  * 내 풀이
//  * @param {number} m DVD의 개수
//  * @param {number[]} songs 각 노래의 길이
//  */
// function solution(m, songs) {
//   // 이미 오름 차순으로 정렬된 데이터가 songs로 전달된다
//   // m 묶음으로 나눌 때 각 묶음의 합의 최대값이 최소가 되어야 한다
//   /**
//    * 방법1. 다 더한다면?
//    * n(n+1)/2 => 9(9+1)/2 => 45
//    * 45를 3으로 나누면 ? 15
//    * 각 묶음이 15에 근접해야 한다
//    *
//    * 순서가 유지되어야 하므로
//    * 순차적으로 더해야 한다
//    *
//    * 음...
//    *
//    * 15보다 클때 까지 순차적으로 더해서 크면 다음 묶음으로 넘어가려고 했는데
//    * 6,7,8이 한번에 묶이고 9만 남기 때문에 비효율적이 된다
//    * 좋은 방법이 없을까?
//    *
//    * 만약 1~3 까지, 그룹수가 3 이라면?
//    * 모든 수의 합은 6
//    * 3으로 나눈 것은 2
//    *
//    * 1 ~ 5, 3 => 10, 3.3
//    * 1 ~ 10, 3 => 55, 18.3, (1~6),(7,8),(9,10) => 21, 15, 19
//    *
//    * 뒤에서 부터 묶는다면?
//    * 15를 기준으로 할 때
//    * 8,9는 같이 묶이지만
//    * 5,6,7 이 같이 묶이기 때문에 안된다
//    *
//    * 1~10을 5그룹으로 나눈다면?
//    * (1,2,3,4,5),(6,7),8,9,10
//    * (1,2,3,4),(5,6),(7,8),9,10
//    * sum : 55
//    * average: 11
//    *
//    * 감이 잘 안온다
//    *
//    * 오차범위를 어느정도로 잡아야 될까?
//    * gg 강의 해설을 듣자
//    */
// }

/**
 * 강의 해설
 * 이분 검색을 통해서 계속 그 답이 좋은 답인지 아닌지 찾아 나가는 문제입니다
 *
 * lt : 최소 dvd 용량 -> 숫자의 최대값 => 9
 * rt : 최대 dvd 용량 -> 모든 숫자의 합 => 45
 *
 * 9와 45를 더한다 => 54
 * mid = (lt+rt)/2 : 54/2 => 27
 * dvd하나가 27일 때 연속적으로 담을 때 3장에 담을 수 있는지 확인
 * - 2장만에 담을 수 있음(m 이하) => 답으로 가능 - answer에 등록을 해놓음
 *
 * rt를 26으로(mid - 1) 바꾼다
 * mid = (9+26)/2 => 17
 * - 3장에 담을 수 있음 => answer를 17로 변경
 *
 * rt를 16으로(mid -1) 변경
 * mid  = (9+16)/2 => 12
 * - 총 5장 -> 답이 아님
 *
 * lt를 13으로(mid + 1) 변경
 * mid = (13 + 16)/2 => 14
 * - ...
 *
 * 이분 검색은 lt가 rt 보다 클 때 까지 계속 시도 하는 것이다
 */
// function count(songs, capacity) {
//   // 결정알고리즘은 여기가 제일 중요
//   let cnt = 1; // dvd 장수
//   let sum = 0; // 누적되는 용량
//   for (let x of songs) {
//     if (sum + x > capacity) {
//       // 누적이 용량보다 크면 dvd에 더 이상 저장할 수 없음
//       cnt++; // 새로운 dvd로 변경
//       sum = x; // 새로운 dvd에 그 값을 넣으면서 시작
//     } else {
//       sum += x;
//     }
//   }

//   return cnt;
// }
// function solution(m, songs) {
//   let answer;
//   let lt = Math.max(...songs);
//   let rt = songs.reduce((a, b) => a + b, 0); // 0으로 초기된 값에 누적한다

//   // 이분 검색은 그냥 외우세요 ! -> while문 형태를
//   while (lt <= rt) {
//     let mid = parseInt((lt + rt) / 2);
//     // mid 값을 dvd한장의 용량으로 했을 때 몇장만에 구하는지를 count 함수에서 구해야 함
//     if (count(songs, mid) <= m) {
//       // e.g. count() 함수의 리턴이 2인 경우 -> 용량이 충분히 크다 -> rt를 mid-1로 변경
//       answer = mid;
//       rt = mid - 1;
//     } else {
//       // 답은 될 수 없음 -> 용량이 적다
//       lt = mid + 1;
//     }
//   }
//   return answer;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(solution(3, arr));

// 따라 써보기
// function solution(m, songs) {
//   let answer;
//   let lt = Math.max(...songs); // 최소 dvd 용량 -> 숫자의 최대값
//   let rt = songs.reduce((a, b) => a + b, 0); // 최대 dvd 용량 -> 모든 숫자의 합

//   function countDvd(songs, capacity) {
//     let dvdCount = 1;
//     let sum = 0;
//     for (let x of songs) {
//       if (sum + x > capacity) {
//         // 누적값이 용량보다 크면 dvd에 더 이상 저장할 수 없음
//         dvdCount++; // 새로운 dvd로 변경
//         sum = x; // 새로운 dvd에 그 값을 넣으면서 시작
//       } else {
//         sum += x;
//       }
//     }

//     return dvdCount;
//   }

//   // 이분 검색
//   while (lt <= rt) {
//     let mid = parseInt((lt + rt) / 2);
//     if (countDvd(songs, mid) <= m) {
//       answer = mid;
//       rt = mid - 1;
//     } else {
//       lt = mid + 1;
//     }
//   }

//   return answer;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(solution(3, arr));

// function solution(m, songs) {
//   let answer;
//   let lt = Math.max(...songs);
//   let rt = songs.reduce((a, b) => a + b, 0);

//   // 전달한 dvd 용량으로 동영상을 몇 개의 그룹으로 나눌 수 있는지
//   function countDvd(songs, capacity) {
//     let dvdCount = 1;
//     let sum = 0;
//     for (let x of songs) {
//       if (sum + x > capacity) {
//         dvdCount++;
//         sum = x;
//       } else {
//         sum += x;
//       }
//     }

//     return dvdCount;
//   }

//   while (lt <= rt) {
//     let mid = parseInt((lt + rt) / 2);
//     if (countDvd(songs, mid) <= m) {
//       answer = mid;
//       rt = mid - 1;
//     } else {
//       lt = mid + 1;
//     }
//   }

//   return answer;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(solution(3, arr));

// 다시 풀어보기
function solution2(dvdNumber, songs) {
  const countDvDs = (songs, capacity) => {
    let count = 1; // 초기 DVD 개수는 1
    let sum = 0;

    for (let x of songs) {
      if (sum + x > capacity) {
        count++;
        sum = 0;
      }
      sum += x;
    }

    return count;
  };

  let dvdCapacity; // answer
  let left = Math.max(...songs); // 이진 탐색의 시작 범위: 노래 중 가장 긴 길이
  let right = songs.reduce((a, b) => a + b, 0); // 이진 탐색의 끝 범위 : 모든 노래의 길이 합

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (countDvDs(songs, mid) <= dvdNumber) {
      // 현재 용량으로 dvdNumber개 이하의 dvd에 녹화할 수 있는 경우
      dvdCapacity = mid; // 현재 용량을 정답 후보로 저장
      right = mid - 1; // 더 작은 용량으로 이진 탐색
    } else {
      // 현재 용량으로 dvdNumber개 보다 더 많은 dvd에 녹화해야 하는 경우
      left = mid + 1; // 더 큰 용량으로 이진 탐색
    }
  }

  return dvdCapacity;
}

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution2(3, arr2));
