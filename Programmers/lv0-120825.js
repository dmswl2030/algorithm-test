//문자 반복 출력하기 (https://school.programmers.co.kr/learn/courses/30/lessons/120825)
//문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, n) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    answer += my_string[i].repeat(n);
  }
  return answer;
}

console.log(solution("hello", 3));

/*
[손코딩]
1. 문자열을 하나씩 돌면서 repeat(n)만큼 해주기

[다른사람 풀이]
function solution(my_string, n) {
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
}
*/
