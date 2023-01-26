//구구단 (https://www.acmicpc.net/problem/2739)
//N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.

const input = require('fs').readFileSync('./input.txt').toString().trim().split(' ').map(Number)
let answer = 0;
for(let i = 1; i <= 9; i++) {
  answer = input * i
  console.log(`${input} * ${i} = ${answer}`)
}