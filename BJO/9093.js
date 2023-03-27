//단어 뒤ㅂㅣ (https://www.acmicpc.net/problem/9093)
//문장이 주어졌을 때, 단어를 모두 뒤집어서 출력하는 프로그램을 작성하시오. 단, 단어의 순서는 바꿀 수 없다. 단어는 영어 알파벳으로만 이루어져 있다.

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let words = input[i].split(" "); //문장을 단어단위로 잘라준다
  let answer = words.map((word) => word.split("").reverse().join("")).join(" ");
  //map함수를 이용해서 단어를 쪼개서 뒤집고 다시 join해준다
  console.log(answer);
}

/*
[손코딩]
1. 이중for문으로 input[1][0]을 reverse하는 방식으로 접근해본다
*/
