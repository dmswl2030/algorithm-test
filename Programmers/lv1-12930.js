//이상한 문자 만들기 (https://school.programmers.co.kr/learn/courses/30/lessons/12930)
//문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

function solution(s) {
    return s.split(" ").map((word) => 
        word.split("").map((v, i) => 
            i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()
        ).join("")
    ).join(" ");
}

console.log(solution("try hello world"));

/*
[손코딩]
1. 단어를 각각 떼서 배열에 저장
2. 배열 요소의 요소에 접근 -> 짝수는 소문자, 홀수는 대문자로 거르기
3. 배열 요소 join(" ")하기 

map을 2번 사용해서 배열 요소의 요소에 접근할 수 있고
map의 value, index로 짝수인덱스를 걸러서 조건문을 쓸수 있었다
*/
