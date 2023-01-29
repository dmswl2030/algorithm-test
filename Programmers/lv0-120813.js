//짝수는 싫어요 (https://school.programmers.co.kr/learn/courses/30/lessons/120813)
//정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  const answer = Array(n)
    .fill()
    .map((v, i) => i + 1)
    .filter((i) => i % 2 !== 0);
  return answer;
}
console.log(solution(10));

/*
[손코딩]
1. 문자열을 하나씩 돌면서 repeat(n)만큼 해주기

[다른사람 풀이]
function solution(n) {
  var answer = [];
  for (let i = 1; i<=n; i+=2) answer.push(i)
  return answer;
}
*/
