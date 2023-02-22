//정수 내림차순으로 배치하기 (https://school.programmers.co.kr/learn/courses/30/lessons/12933)
//함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

function solution(n) {
  const str = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return parseInt(str);
}
console.log(solution(38901));

/*
[손코딩]
1. 숫자 -> 문자열로 변경
2. 하나씩 잘라서 정렬(내림차순)
3. 다시 합치기
*/
