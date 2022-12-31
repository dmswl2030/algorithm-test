//단어 정렬(https://www.acmicpc.net/problem/1181)
//길이가 짧은 것 부터, 길이가 같으면 사전순으로 정렬하기

const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')

input.shift();
let arr=[...new Set(input)];
arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n')
arr.forEach(item => console.log(item))

/*
[손코딩]
1. 맨앞의 숫자는 단어의 갯수이므로 제거
2. 중복되는 단어 제거 : set
3. 각 단어를 길이순으로 정렬
4. 길이가 같으면 사전순으로
*/