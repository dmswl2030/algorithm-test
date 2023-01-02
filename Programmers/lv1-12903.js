//가운데 글자 가져오기 (https://school.programmers.co.kr/learn/courses/30/lessons/12903)
//단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
//참고: https://pathas.tistory.com/209

function solution(s) {
  if (s.length % 2 === 0) {
    //짝수일 때는 문자열 길이 / 2를 했을 때 앞, 뒤 요소를 리턴해야 함
    return s.slice(s.length / 2 - 1, s.length / 2 + 1);
  } else {
    //홀수일 때는 Math.floor(문자열 길이 / 2)
    //버림한 수의 첫번째 요소를 리턴
    return s[Math.floor(s.length / 2)];
  }
}

/*
[손코딩]
1. 홀수일 때는 길이/2를 해서 가운데 자리의 인덱스 요소를 반환 
2. 짝수일 때는 길이/2를 하고 양 옆 인덱스 요소를 반환

[몰랐던 부분]
- Math.floor로 소수점 뒤를 모두 버리면 가운데 인덱스를 찾을수 있음
- 알고있던 메소드지만 활용 방법을 몰랐네..
*/
