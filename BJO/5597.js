//과제 안내신분(https://www.acmicpc.net/problem/5597)
//과제를 안낸 사람의 출석번호를 오름차순으로 정렬

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n').map(Number)

let arr = Array(30).fill().map((v,i)=> i+1);
input.sort((a, b) => a-b);
arr = arr.filter(x => !input.includes(x));
console.log(arr)