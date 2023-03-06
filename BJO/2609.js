//최대공약수와 최소공배수 (https://www.acmicpc.net/problem/2609)
//두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.

const [a, b] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let i = a;
let j = b;

while (i % j !== 0) {
  //나머지가 0이 되었을 때 나누는 수가 a와 b의 최대공약수이다.
  let n = i % j;
  if (n !== 0) {
    i = j;
    j = n;
  }
}
console.log(j);
console.log((a * b) / j);
/*
[풀이 참고]
1. 유클리드 호제법을 활용하여 최대공약수를 구한다
  - a를 b로 나눈 나머지를 r이라 하면(단, a>b), a와 b의 최대공약수는 b와 r의 최대공약수와 같다.
  - 이 성질에 따라, b를 r로 나눈 나머지 r'를 구하고, 다시 r을 r'로 나눈 나머지를 구하는 과정을 반복하여
  - 나머지가 0이 되었을 때 나누는 수가 a와 b의 최대공약수이다.
2. a, b의 곱을 최대공약수로 나누면 a, b의 최소공배수를 구할 수 있다.
*/
