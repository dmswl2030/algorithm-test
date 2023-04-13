//단어의 개수(https://www.acmicpc.net/problem/1152)
//영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 이 문자열에는 몇 개의 단어가 있을까? 이를 구하는 프로그램을 작성하시오. 단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다.

const input = require("fs").readFileSync("./input.txt").toString().split("\n");

let data = input[0].trim().split(" ");

if (data == "") {
  console.log(0);
} else {
  console.log(data.length);
}

/*
[손코딩]
1. 문자열로 저장하기
2. 공백으로 구분된 단어를 data에 담아서 length를 구한다
*/
