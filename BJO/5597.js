//과제 안내신분(https://www.acmicpc.net/problem/5597)
//과제를 안낸 사람의 출석번호를 오름차순으로 정렬

const input = require('fs').readFileSync('./input.txt').toString().split('\n').map(Number)

let answer = 0;
let arr = Array(30).fill().map((v,i)=> i+1);
input.sort((a, b) => a-b);
answer = arr.filter(x => !input.includes(x)).toString();
console.log(answer);