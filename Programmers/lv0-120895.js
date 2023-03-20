//인덱스 바꾸기 (https://school.programmers.co.kr/learn/courses/30/lessons/120895?language=javascript)
//문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, num1, num2) {
  const result = [...my_string];
  result.splice(num1, 1, my_string[num2]);
  result.splice(num2, 1, my_string[num1]);
  return result.join("");
}

console.log(solution("hello", 1, 2));
/*

[손코딩]
1. 문자열을 하나씩 분리
2. 각 인덱스의 위치를 splice로 변환한다
3. 다시 합쳐준다
*/
