//문자열 내 p와 y의 개수 (https://school.programmers.co.kr/learn/courses/30/lessons/120811)
//대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

function solution(s) {
  const answer = s.toLowerCase().split("");
  let pCount = 0;
  let yCount = 0;
  answer.map((v) => {
    if (v === "p") pCount++;
    if (v === "y") yCount++;
  });
  return pCount === yCount ? true : false;
}

console.log(solution("Pyy"));

/*
[손코딩]
1. 전부 소문자로 바꿔주기
2. 문자열 개수 카운트해서 비교하기
3. 같으면 true, 다르면 false 리턴
*/
