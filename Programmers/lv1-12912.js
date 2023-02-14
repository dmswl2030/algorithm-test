//두 정수 사이의 합 (https://school.programmers.co.kr/learn/courses/30/lessons/12912)
//두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.

function solution(a, b) {
  return (answer = ((a + b) * (Math.abs(b - a) + 1)) / 2);
}
console.log(solution(5, 3));

/*
[가우스 공식 활용]
answer = (a+b) * (Math.abs(b-a) + 1) /2

Math.abs(-1) = 1 (절대값을 찾아줌)

[내가 하려고 했던 풀이]
function solution(a, b) {
    if(a===b) return a;
    let small = a < b ? a : b;
    let big = a > b ? a : b;
    for(let i = small+1; i < big+1; i++) 
        small += i;
    return small;
}
*/
