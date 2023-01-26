//합 (https://www.acmicpc.net/problem/8393)
//n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

const input = require('fs').readFileSync('./input.txt').map(Number)

let sum = 0
for(let i = 0; i <= input; i++) {
  sum += i
}
console.log(sum)