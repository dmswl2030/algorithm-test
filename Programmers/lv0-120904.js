//숫자 찾기 (https://school.programmers.co.kr/learn/courses/30/lessons/120904)
//정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

function solution(num, k) {
  let answer = num.toString().indexOf(k);
  console.log(answer);
  return answer === -1 ? -1 : (answer += 1);
}
/*
[손코딩]
1. num을 문자열로 바꾸고, k랑 일치하는 index를 바로 찾는다
2. 만약 -1이면 -1을 return 하고 그게 아니면 answer에 +1을 더해준다 (index는 자리수에 +1을 해야하니깐)
*/
console.log(solution(29183, 1));