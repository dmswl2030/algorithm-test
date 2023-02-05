//가장 큰 수 찾기 (https://school.programmers.co.kr/learn/courses/30/lessons/120899)
//정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
  [Math.max(...array), array.indexOf(Math.max(...array))]  
}

console.log(solution([1, 8, 3]));

/*
[풀이 참고]
1. 최댓값과 해당 값의 인덱스를 구해 반환함
*/
