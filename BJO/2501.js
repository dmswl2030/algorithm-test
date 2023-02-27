//약수 구하기(https://www.acmicpc.net/problem/2501)
//두 개의 자연수 N과 K가 주어졌을 때, N의 약수들 중 K번째로 작은 수를 출력하는 프로그램을 작성하시오.
//첫째 줄에 N의 약수들 중 K번째로 작은 수를 출력한다. 만일 N의 약수의 개수가 K개보다 적어서 K번째 약수가 존재하지 않을 경우에는 0을 출력하시오.

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split(" ")
  .map(Number);

const mainNum = input[0];
const index = input[1];
let start = 1;
let arr = [];
while (start <= mainNum) {
  if (mainNum % start == 0) arr.push(start);
  start++;
}

arr.length < index ? console.log(0) : console.log(arr[index - 1]);

/*
[손코딩]
1. 나누어야 할 숫자가 기준숫자보다 작을 동안
2. 나머지가 0일때만 배열에 push
3. 구해야할 index보다 약수의 갯수가 적으면 0을 출력, 그게아니면 index-1번째의 수를 출력
*/
