//최대, 최소 (https://www.acmicpc.net/problem/10818)
//N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

const input = require("fs").readFileSync("./input.txt").toString().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const minValue = arr.reduce((a, b) => Math.min(a, b));
const maxValue = arr.reduce((a, b) => Math.max(a, b));

console.log(minValue + " " + maxValue);
