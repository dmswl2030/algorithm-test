//이진수 (https://www.acmicpc.net/problem/3460)

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 1; i <= input[0]; i++) {
  let result = input[i].toString(2); //2진수 변환
  result = result.split("").reverse().join(""); //문자열 뒤집기

  let arr = [];

  for (let j = 0; j <= result.length; j++) {
    if (result[j] === "1") {
      //1이 포함되어 있으면 빈배열에 push
      arr.push(j);
    }
  }
  console.log(arr.join(" "));
}

/*
[손코딩]
1. 반복문을 돌면서 2진수로 변환
3. 변환한 문자열을 거꾸로 뒤집기
4. 반복문을 돌면서 1이 포함되어 있으면 빈배열에 push 한다.
*/
