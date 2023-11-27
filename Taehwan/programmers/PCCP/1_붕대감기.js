/**
 * '붕대감기'는 t초 동안 붕대를 감으면서 1초마다 x만큼의 체력을 회복합니다
 * t초 연속으로 붕대 감는 데 성공한다면 y만큼의 체력을 추가로 회복합니다
 *
 * 최대 체력보다 커지는 것은 불가능 합니다
 *
 * 기술을 쓰는 도중 몬스터에게 공격을 당하면 기술이 취소되고,
 * 공격을 당하는 순간에는 체력을 회복할 수 없습니다
 * 몬스터에게 공격당해 기술이 취소당하거나 기술이 끝나면 그 즉시 '붕대감기'를 다시 사용하며, 연속 성공 시간이 0으로 초기화 됩니다
 *
 * 몬스터의 공격을 받으면 정해진 피해량만큼 현재 체력이 줄어듭니다
 * 이때, 현재 체력이 0 이하가 되면 캐릭터가 죽으며, 더 이상 체력을 회복할 수 없습니다
 *
 * 당신은 '붕대감기' 기술의 정보, 캐릭터가 가진 최대 체력과 몬스터의 공격 패턴이 주어질 때 캐릭터가 끝까지 생존할 수 있는지 궁금합니다
 *
 * '붕대감기' 기술의 시전 시간, 1초당 회복량, 추가 회복량을 담은 1차원 정수 배열 => bandage
 * 최대 체력을 의미하는 health
 * 몬스터의 공격 시간과 피해량을 담은 2차원 정수 배열 attacks가 매개변수로 주어집니다
 *
 * 모든 공격이 끝난 직후 남은 체력을 return 하도록 solution 함수를 완성해주세요
 *
 * 만약 몬스터의 공격을 받고 캐릭터의 체력이 0 이하가 되어 죽는다면 -1을 return 해주세요
 *
 * 제한 사항
 * - bandage: [시전시간(t), 초당 회복량, 추가 회복량(y)]
 * - health: 1 이상 1,000 이하인 정수
 * - attacks: [공격 시간, 피해량]으로 이루어진 2차원 배열 => [[공격 시간, 피해량], [공격 시간, 피해량], ...]
 *
 * 입출력 예
 * bandage / health / attacks / result
 * [5,1,5] / 30 / [[2,10],[9,15],[10,5],[11,5]] / 5
 * [3,2,7] / 20 / [[1,15],[5,16],[8,6]] / -1
 * [4,2,7] / 20 / [[1,15],[5,16],[8,6]] / 01
 * [1,1,1] / 5 / [[1,2],[3,2]] / 3
 */
/**
 *
 * @param {number[]} bandage [시전시간(t), 초당 회복량, 추가 회복량(y)]
 * @param {number} health
 * @param {number[][]} attacks [[공격 시간, 피해량], [공격 시간, 피해량], ...]
 */
function solution(bandage, health, attacks) {
  const [cooltime, healPerSec, additionalHeal] = bandage;
  const maxHealth = health;
  const duration = attacks[attacks.length - 1][0];
  let currentHealth = health;
  let attackIndex = 0;
  let accumulatedTime = 0;
  for (let time = 1; time <= duration; time++) {
    const [attackedTime, attackedDamage] = attacks[attackIndex];
    if (time === attackedTime) {
      // 대미지를 받는 경우 => 체력이 감소, 추가 체력 보너스가 0으로 초기화, 체력차는 것 중지, 시전 시간
      currentHealth = currentHealth - attackedDamage;
      if (currentHealth <= 0) {
        // 죽는 경우
        return -1;
      }
      accumulatedTime = 0;
      attackIndex = attackIndex + 1;
      // console.log("attacked", currentHealth);
      continue;
    }

    // 대미지를 받지 않은 경우 => 체력이 초단위로 증가, 만약 쿨타임이 되면 추가 체력 증가
    currentHealth = Math.min(maxHealth, currentHealth + healPerSec);
    accumulatedTime = accumulatedTime + 1;
    if (accumulatedTime % cooltime === 0) {
      currentHealth = Math.min(maxHealth, currentHealth + additionalHeal);
    }
    // console.log("healed", currentHealth);
  }

  return currentHealth;
}

console.log(
  solution([5, 1, 5], 30, [
    [2, 10],
    [9, 15],
    [10, 5],
    [11, 5],
  ])
);
console.log(
  solution([3, 2, 7], 20, [
    [1, 15],
    [5, 16],
    [8, 6],
  ])
);
console.log(
  solution([4, 2, 7], 20, [
    [1, 15],
    [5, 16],
    [8, 6],
  ])
);
console.log(
  solution([1, 1, 1], 5, [
    [1, 2],
    [3, 2],
  ])
);
