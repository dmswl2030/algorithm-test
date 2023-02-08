//문자열 반복 (https://www.acmicpc.net/problem/2675)
//문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다.

const input = require("fs").readFileSync("./input.txt").toString().split("\n");

const num1 = input.shift();

for (let i = 0; i < num1; i++) {
  let answer = "";

  const [repeatNum, str] = input[i].split(" ");

  for (let j = 0; j < str.length; j++) {
    answer += str[j].repeat(repeatNum);
  }
  console.log(answer);
}

/*
[손코딩]
1. input을 반복하면서
2. 숫자, 문자를 각각 구조분해 할당
3. 문자부분을 반복문 돌면서 repeat 실행
*/
