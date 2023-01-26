//세 수 (https://www.acmicpc.net/problem/10817)
//세 정수 A, B, C가 주어진다. 이때, 두 번째로 큰 정수를 출력하는 프로그램을 작성하시오. 

const input = require('fs').readFileSync('./input.txt').toString().split(' ').map(Number)
input.sort((a, b) => b - a)
console.log(input[1])