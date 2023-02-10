//푸드 파이트 대회 (https://school.programmers.co.kr/learn/courses/30/lessons/134240)

function solution(food) {
  let res = "";
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }

  return res + "0" + [...res].reverse().join("");
}
console.log(solution([1, 3, 4, 6]));

/*
[손코딩]
1. 배열의 요소를 map반복문 돌면서
   - 만약 2보다 작은 수면 그 다음으로 넘어감 (while문?)
2. 배열 요소.repeat(배열의 인덱스) => 변수 저장
3. 마지막에 0을 넣고
4. reverse로 문자열을 뒤집는다
5. join


[처음 풀이]
function solution(food) {
  // let answer = food.map((v) => String(v));
  answer = answer.map((v, i) => {
    while (v > 2) {
      console.log(v);
      v.repeat(parseInt(v / 2));
    }
  });
  return answer;
}
[내의도랑 맞는 풀이]
function solution(food) {
    let player1 = [];
    let player2 = [];
    let repeat = 0;
    for (let i = 1; i <= food.length; i++) {
        if (food[i] > 1) {
            repeat = Math.floor(food[i] / 2);
            for (let j = 0; j < repeat; j++)
                player1.push(i)
            for (let k = 0; k < repeat; k++)
                player2.unshift(i)
        }
    }
    player1.push(0);
    player1 = player1.concat(player2);
    return player1.join("");
}
*/
