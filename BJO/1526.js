//가장 큰 금민수(https://www.acmicpc.net/problem/1526)
//은민이는 4와 7을 좋아하고, 나머지 숫자는 싫어한다. 금민수는 어떤 수가 4와 7로만 이루어진 수를 말한다.
//N이 주어졌을 때, N보다 작거나 같은 금민수 중 가장 큰 것을 출력하는 프로그램을 작성하시오.

const fs = require("fs");

function main() {
  let N = +fs.readFileSync("./input.txt").toString();

  for (let i = N; i > 0; i--) {
    if (is47(i)) {
      console.log(i);
      break;
    }
  }
}

function is47(n) {
  while (n) {
    let digit = n % 10;

    if (digit !== 4 && digit !== 7) {
      return false;
    }

    n = Math.floor(n / 10);
  }

  return true;
}

main();

/*
[풀이 참고]
https://github.com/xCrypt0r/Baekjoon/blob/master/src/1/1526.js
while이 true일때 까지 한자리씩 조건문을 돌려서 4, 7에 해당되는지 걸러준다
*/
