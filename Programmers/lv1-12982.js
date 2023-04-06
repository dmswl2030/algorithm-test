//예산 (https://school.programmers.co.kr/learn/courses/30/lessons/12982)
//부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.

function solution(d, budget) {
  d.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < d.length; i++) {
    if (d[i] > budget) break;

    budget -= d[i];
    count += 1;
  }
  return count;
}
console.log(solution([2, 2, 3, 3]));

/*
[손코딩]
1. 예산을 오름차순으로 정렬해주기
2. for문으로 현재 금액만큼 budget을 줄이고 count를 1씩 올리기
3. 만약 budget보다 금액이 더크면 break로 멈추고 count를 반환
*/
