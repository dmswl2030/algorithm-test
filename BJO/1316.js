//그룹 단어 체커(https://www.acmicpc.net/problem/1316)
//단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let summary = 0;

for (let i = 1; i <= n; i++) {
  let data = input[i];
  //단어가 true(그룹단어)이면 summary++
  if (check(data)) summary += 1;
}
console.log(summary);

//그룹 단어인지 체크하는 함수
function check(data) {
  let setData = new Set(data[0]);
  console.log(setData);
  for (let i = 0; i < data.length - 1; i++) {
    //오른쪽 단어와 다르면
    if (data[i] != data[i + 1]) {
      //이미 등장한 적 있는 알파벳이면
      if (setData.has(data[i + 1])) {
        return false;
      } else {
        setData.add(data[i + 1]);
      }
    }
  }
  return true;
}
