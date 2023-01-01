//x만큼 간격이 있는 n개의 숫자(https://school.programmers.co.kr/learn/courses/30/lessons/12954)
//함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴

function solution(x, n) {
  const answer = [];
  let item = 0;
  for (let i = 0; i < n; i++) {
    item += x;
    answer.push(item);
  }
  return answer;
}

/*
[손코딩]
1. 빈배열에 n의 개수만큼 채우기
2. x + x의 인덱스 값 * x = 2 + 0*2, 2 + 1*2, •••
3. 계산된 값을 하나씩 push

[처음풀이]
function solution(x, n) {
  let answer = Array.from({ length: n });
  let index = answer.indexOf();
  answer.push(x + index * x);
  return answer;
}

[내가 생각한거랑 비슷한 풀이]
function solution(x, n) {
    return nNumbers(x,n);
}

const nNumbers = (x, n)=>{
    return Array.from({length: n},(v,index)=>(index+1)*x);
};
*/
