//저항 (https://www.acmicpc.net/problem/1076)
//전자 제품에는 저항이 들어간다. 저항은 색 3개를 이용해서 그 저항이 몇 옴인지 나타낸다. 처음 색 2개는 저항의 값이고, 마지막 색은 곱해야 하는 값이다. 저항의 값은 다음 표를 이용해서 구한다.

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const colors = [
  { color: "black", value: 0, multiple: 1 },
  { color: "brown", value: 1, multiple: 10 },
  { color: "red", value: 2, multiple: 100 },
  { color: "orange", value: 3, multiple: 1000 },
  { color: "yellow", value: 4, multiple: 10000 },
  { color: "green", value: 5, multiple: 100000 },
  { color: "blue", value: 6, multiple: 1000000 },
  { color: "violet", value: 7, multiple: 10000000 },
  { color: "grey", value: 8, multiple: 100000000 },
  { color: "white", value: 9, multiple: 1000000000 },
];

let firstColor = 0;
let secondColor = 0;
let thirdColor = 0;

for (let i = 0; i < colors.length; i++) {
  if (colors[i].color === input[0]) {
    firstColor = colors[i].value;
  }

  if (colors[i].color === input[1]) {
    secondColor = colors[i].value;
  }

  if (colors[i].color === input[2]) {
    thirdColor = colors[i].multiple;
  }
}

console.log(+(firstColor + secondColor.toString()) * thirdColor);
