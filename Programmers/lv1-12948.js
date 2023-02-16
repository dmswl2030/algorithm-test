//핸드폰 번호 가리기 (https://school.programmers.co.kr/learn/courses/30/lessons/12948)
//프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.

function solution(phone_number) {
  const answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
  return answer;
}

console.log(solution("01033334444"));

/*
[손코딩]
1. phone_number의 길이-4만큼의 숫자를 자르고, 그앞의 숫자는 *문자로 치환하기
*/
