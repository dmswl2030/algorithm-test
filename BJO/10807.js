//개수세기 (https://www.acmicpc.net/problem/10807)

const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')
const [length, numbers, v] = input
let count = numbers.split(" ")
count = count.filter((ele) => ele == v).length;
console.log(count);

/*
[손코딩]
1. input[1]의 숫자들을 공백 기준으로 잘라서
2. 반복문을 돌면서 같은 숫자가 있으면 count 해준다

[처음 풀이]
const [length, numbers, v] = input 
for(let i = 0; i < length; i++) {
  if(arr[i] === v) count ++
}
=> 답이 자꾸 2로 나옴..
*/
