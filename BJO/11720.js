//숫자의 합 (https://www.acmicpc.net/problem/11720)
//N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

const input = require('fs').readFileSync('./input.txt').toString().split('\n')
let num = input[1].split("")
let sum = num.reduce((a, b) => {return a += Number(b)}, 0);
console.log(sum)
