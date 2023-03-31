//문자열 다루기 기본 (https://school.programmers.co.kr/learn/courses/30/lessons/120811)
//문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

function solution(s) {
  return (s.length === 4 || s.length === 6) && s == parseInt(s);
}
console.log(solution("1234"));

/*
[손코딩]
1. 문자열의 길이가 4 또는 6이고
2. 문자열 s와 정수형태의 s가 같을때
3. return true, 그게아니면 false
*/
