//중앙값 구하기 (https://school.programmers.co.kr/learn/courses/30/lessons/120811)
//중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
  array.sort((a, b) => a - b);
  const answer = parseInt(array.length / 2);
  return array[answer];
}

console.log(solution([1, 2, 7, 10, 11]));

/*
[손코딩]
1. 배열을 크기순으로 정렬
2. 중앙 인덱스 값 구하기 (정수로)
3. return 배열[중앙 인덱스] 해주면 끝~

[다른사람 풀이] : 한줄에 끝내네..
return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}
*/
