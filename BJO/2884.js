//알람시계 (https://www.acmicpc.net/problem/2884)
//주어진 시간에서 45분전의 시간을 출력하시오

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let hour = input[0];
let minute = input[1];

//조건1: minute-45 = 음수일때
//조건2: hour가 음수일때

minute -= 45;

if (minute < 0) {
  minute += 60;
  hour--;

  if (hour === -1) {
    hour = 23;
  }
}

console.log(hour + " " + minute);

//처음풀이
/*
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let hour = input[0];
let minute = input[1];

if (hour !== 0) {
  minute = 60 + (minute - 45);
  hour--;
} else{
  input[1] = 60 + (minute - 45);
  hour = 23;
}

console.log(input);
*/
// > hour부분이 0이거나 아닐때만 생각해서 if else를 썼는데 다른분의 풀이를 참고하니 중첩 if문으로 해당되는 경우만 조건을 세워줬다
// > 처음부터 minute-45인 상태로 조건식을 들어가야 하는데 그렇게 안쓰니까 계속 틀렸다고 뜸..
