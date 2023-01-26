//A+B-3 (https://www.acmicpc.net/problem/10950)
//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

const input = require('fs').readFileSync('./input.txt').toString().split('\n')
//0번째는 계산할 필요가 없으니 1로시작, input[0] = input.length
for(let i = 1; i <= input[0]; i++) {
  let sum = input[i].split(' ') //공백을 기준으로 다잘라버림
  console.log(sum)

  //0, 1번째를 숫자형으로 바꿔서 더해줌
  console.log(Number(sum[0]) + Number(sum[1]))
}