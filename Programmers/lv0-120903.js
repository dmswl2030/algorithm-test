//배열의 유사도 (https://school.programmers.co.kr/learn/courses/30/lessons/120903)
//두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(s1, s2) {
    const answer = s1.filter(x => s2.includes(x));
    return answer.length
}
/*
[손코딩]
배열의 요소를 비교해서 같은 값만 걸러내고
배열의 길이로 출력
*/
console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]));