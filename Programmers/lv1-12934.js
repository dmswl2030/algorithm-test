//정수 제곱근 판별 (https://school.programmers.co.kr/learn/courses/30/lessons/12934)
//임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
//n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

function solution(n) {
  let answer = 0;
  let sqrt = Math.sqrt(n);
  if (sqrt % 1 !== 0) {
    answer = -1;
  } else {
    answer = Math.pow(sqrt + 1, 2);
  }
  return answer;
}
console.log(solution(121));

/*
Max.sqrt(x) : 숫자 x의 제곱근을 반환
Math.pow(base, exponent) : base에 exponent를 제곱한 값을 반환
*/
