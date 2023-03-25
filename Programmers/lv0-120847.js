//최댓값 만들기(1) (https://school.programmers.co.kr/learn/courses/30/lessons/120847)
//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  const number = numbers.sort((a, b) => b - a);
  const answer = number[0] * number[1];
  // for (let i = 0; i < number.length; i++) {
  //   const answer = i[number.length] * i[number.length - 1];
  //   return answer;
  // }
  return answer;
}
console.log(solution([0, 31, 24, 10, 1, 9]));

/*
[손코딩]
1. 배열의 원소를 오름차순으로 정렬
2. 맨뒤숫자, 맨뒤숫자-1의 자리에 있는걸 곱해서 최댓값을 return
*/
