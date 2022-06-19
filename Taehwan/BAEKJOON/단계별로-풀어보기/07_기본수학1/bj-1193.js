{
  // 3. 분수 찾기
  /**
   * 무한히 큰 배열에 다음과 같은 분수들이 적혀있다
   * 1/1, 1/2, 1/3, ..., 1/n
   * 2/1, 2/2, 2/3, ..., 2/n
   * ...
   * n/1, n/2, n/3, ..., n/n
   * X가 주어지면 X번째는 1/1, 1/2, 2/1, 1/3, 2/2, 3/1, ... 순으로 대각선으로 진행된다
   * X에 해당하는 분수를 구하시오.
   */
  // const fs = require("fs");
  // const X = Number(fs.readFileSync("/dev/stdin").toString().trim());
  // 1. X가 속한 만큼의 테이블을 그린다
  const X = 5;
  // 테이블 크기 : n
  function getTableSize(X) {
    let n = 0;
    let rest = X;
    while (rest > 0) {
      n++;
      rest -= n;
    }
    return n;
  }

  const tableSize = getTableSize(X);

  function getTable(tableSize) {
    const table = []; // [[[1,1], [1, 2], [1, 3], ...], [[2, 1], [2, 2], [2, 3], ...], ...]
    for (let i = 0; i < tableSize; i++) {
      const row = [];
      for (let j = 0; j < tableSize; j++) {
        row.push([i + 1, j + 1]);
      }
      table.push(row);
    }
    return table;
  }
  const table = getTable(tableSize);
  // console.log(table);

  function getFlatTable(table) {
    return table.reduce((acc, row) => {
      return [...acc, ...row];
    });
  }
  const flatTable = getFlatTable(table);
  // console.log(flatTable);

  function getGroupSizeList(tableSize) {
    const groupSizeList = [];
    for (let i = 0; i < tableSize; i++) {
      groupSizeList.push(i + 1);
    }
    return groupSizeList;
  }

  const getGroupList = (flatTable, groupListCount) => {
    const groupList = []; // [[[1, 1]], [[1, 2], [2, 1]], [[1, 3], [2, 2], [3, 1]], ...]
    const groupSizeList = getGroupSizeList(groupListCount); // [1, 2, 3, ...]
    const copyFlatTable = [...flatTable];
    for (let i = 0; i < groupSizeList.length; i++) {
      groupList.push(copyFlatTable.splice(0, groupSizeList[i]));
    }

    return groupList;
  };
  const groupList = getGroupList(flatTable, tableSize);
  // console.log(groupList);

  function getItemFromGroupListByX(groupList, X) {
    // console.log(groupList);
    // console.log(X);

    const groupSizeList = getGroupSizeList(tableSize);
    // console.log(groupSizeList); // [1, 2, 3, ...]

    const group = groupList[groupSizeList.length - 1];
    // console.log(group);

    let itemIndex = X - 1;
    for (let i = 0; i < groupSizeList.length - 1; i++) {
      itemIndex -= groupSizeList[i];
    }
    // console.log(itemIndex);
    return group[itemIndex];
  }

  const item = getItemFromGroupListByX(groupList, X);
  // console.log(item);
  const [numerator, denominator] = item;
  const result = `${numerator}/${denominator}`;
  console.log(result);
  // 메모리 초과
}
{
  // 다른 사람 풀이
  // let fs = require("fs");
  // let input = fs.readFileSync("/dev/stdin").toString().trim();
  // let number = Number(input);
  let number = 5;
  let value = 1;
  while (true) {
    number -= value;
    if (number <= 0) {
      number += value;
      break;
    }
    value++;
  }

  if (value % 2 === 1) {
    console.log(`${value - (number - 1)}/${1 + (number - 1)}`);
  } else {
    console.log(`${1 + (number - 1)}/${value - (number - 1)}`);
  }
}
// 규칙을 찾아서 간단하게 푸는 방법을 찾는게 어려운 것 같다.. ㅠㅠ
