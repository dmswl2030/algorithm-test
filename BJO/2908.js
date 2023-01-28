//상수 (https://www.acmicpc.net/problem/2908)

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ");

let arr = input.map((v) => v.split("").reverse().join(""));
arr = arr.map(Number).sort((a, b) => a - b);
console.log(arr[1]);

/*
[손코딩]
1. 숫자를 뒤집어서
2. 크기순으로 정렬하고
3. 마지막 수를 출력한다.
*/
