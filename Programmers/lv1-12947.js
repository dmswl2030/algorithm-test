//하샤드 수(https://school.programmers.co.kr/learn/courses/30/lessons/12947)
//양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

function solution(x) {
  const num = x
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);
  return x % num === 0 ? true : false;
}

console.log(solution(11));
/*
[손코딩]
1. x의 자릿수를 문자열로, 잘라서, number형식으로 변환후, 모두 더한값을 변수 num에 할당
2. x를 num으로 나누어 떨어지면 true 아니면 false
*/
