//모음 제거 (https://school.programmers.co.kr/learn/courses/30/lessons/120849)
//영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  const item = "aeiou"
  const answer = my_string.split("").filter(x => !item.includes(x)).join("");
  return answer
}

console.log(solution("bus"));

/*
[손코딩]
1. 매개변수로 받은 문자열을 잘라서 모음과 비교한다
2. 걸러진 단어들을 모아준다

[다른사람 풀이] -> 정규표현식 활용
return my_string.replace(/[aeiou]/g, '');

너~무 간단..하네ㅋㅋㅋ
*/
