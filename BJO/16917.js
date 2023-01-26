//16917 - 양념 반 후라이드 반 (https://www.acmicpc.net/problem/16917)
//input = 1500 2000 1600 3 2, output = 7900

//치킨 종류 : 3개 (후라이드, 양념, 반반)
//양념 1마리 = A * X, 후라이드 1마리 = B * Y, 반반 2마리 = C * 2
//ABCXY = 양념가격, 후라가격, 반반가격, 양념개수, 후라이드개수
//치킨을 구매하는 최소금액

//후라이드 3, 양념 2 > 반반 4, 후라이드 1 > 1600 * 4 + 1500 * 1 > 6400 + 1500 > 7900
//A,B가 짝수이면 C * 2로 계산 / 홀수면 

const input = require('fs').readFileSync('./input.txt').toString().trim().split(' ').map(Number)
let [A,B,C,X,Y] = input;
let answer = 1000000000; //최대 가격
let max = Math.max(X,Y) //X, Y중 큰 숫자를 반환
// 만약 X = 5, Y = 10 > max =10

for(let i = 0; i<= max; i++){
  let XPrice = X-i <0 ? 0 : X-i //양념 가격
  let YPrice = Y-i <0 ? 0 : Y-i //후라이드 가격
  let resultprice = (i * C * 2) + (A * XPrice) + (B * YPrice); //최종가격
  //만약 최종가격이 최대가격보다 작으면 최종가격을 반환
  if(resultprice < answer) answer = resultprice
}
console.log(answer)

//## 내가 잘못 생각한거
//계산방법을 열심히 수학식으로 써봣는데도 최종가격과 최대가격을 비교할 생각은 안떠오름
//input을 받을때 배열로 다시 저장하면 되는데 나는그냥 input[0] 이렇게 한개씩 생각해서
//계산식이 너무 더러워졌다
//반복문도 input[3][4]로 계산하고 싶어서 i를 3부터 시작하게했는데
//계산식이 답이없음..^^