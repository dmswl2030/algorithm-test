//서울에서 김서방 찾기 (https://school.programmers.co.kr/learn/courses/30/lessons/12919)
//String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

function solution(seoul) {
  const result = seoul.indexOf("Kim");
  return `김서방은 ${result}에 있다`;
}
console.log(solution(["Jane", "Kim"]));

/*
[손코딩]
1. 문자열의 길이가 4 또는 6이고
2. 문자열 s와 정수형태의 s가 같을때
3. return true, 그게아니면 false
*/
