//평균은 넘겠지(https://www.acmicpc.net/problem/4344)
//각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.

const input = require("fs").readFileSync("./input.txt").toString().split("\n");

const inputCount = Number(input[0]);
for (let i = 1; i <= inputCount; i++) {
  const data = input[i].split(" ").map(Number); //input을 한줄씩 data에 담는다
  const n = data[0];
  let summary = 0;

  //숫자 하나씩 더해서 summary에 할당
  for (let i = 1; i <= n; i++) {
    summary += data[i];
  }

  //평균 구하기
  const avg = summary / n;
  let count = 0;

  //점수가 평균보다 높으면 count에 1씩 더해주기
  for (let k = 1; k <= n; k++) {
    if (data[k] > avg) count += 1;
  }
  console.log(`${((count / n) * 100).toFixed(3)}%`);
}
// [손코딩]
// 1. 한줄씩 평균 구하기
// 2. 평균보다 큰 학생들만 걸러서 나누기 100
