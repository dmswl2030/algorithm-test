//369게임(https://school.programmers.co.kr/learn/courses/30/lessons/120891)
//3,6,9가 들어가는 숫자의 개수만큼 박수를 칠 때 쳐야할 박수 횟수를 return

function solution(order) {
  const answer = order
    .toString()
    .split("")
    .filter((n) => Number(n) % 3 === 0 && Number(n) !== 0);
  return answer.length;
}

//처음풀이 const answer = order.toString().split("").filter((v) => v % 3 === 0);
//3번 케이스 실패로 나와서 숫자 0일때도 걸러주는 코드 추가
