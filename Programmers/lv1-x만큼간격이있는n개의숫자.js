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