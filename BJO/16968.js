//16968 - 차량번호판 (https://www.acmicpc.net/problem/16968)
//input = dcdd , output = 23400

// 번호판에 사용할 수 있는 숫자는 0, 1, 2, ..., 8, 9이다.
// 사용할 수 있는 문자는 a, b, c, d, ..., y, z이다.
// 차량 번호판의 형식은 최대 4글자이고, c와 d로 이루어진 문자열로 나타낼 수 있다.
// c는 문자가 위치하는 자리, d는 숫자가 위치하는 자리이다.
// 같은 문자 또는 숫자가 연속해서 2번 나타나면 안 된다.

//input.txt를 읽어와서 > 문자열로 바꿔주고, 공백을 제거하고, 줄바꿈하여 읽고 > 줄을 읽으면서 공백을 모두 제거하고 첫문자를 불러옴
const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n').map(v=>v.trim())[0]
const answer = [];

if(input[0]=='d'){ //0번째 문자가 d일때 10을 push
  answer.push(10)
} else{ //0번째 문자가 d가 아니면 26을 push
  answer.push(26)
}

for(let i = 1; i<input.length; i++){
  let temp;
  if(input[i]=='d'){ //1번째 자리가 d이면 temp에 10
    temp = 10
  }else{ //1번째 자리가 c이면 temp에 26
    temp = 26
  }
  if(input[i]==input[i-1]){ //만약 input 1번째 자리, 0번째 자리가 같으면 temp에서 1을뺀다
    temp--;
  }
  answer.push(temp)
}

//answer의 값을 모두 reduce한다 (10 * 26 * 10 * 9)
console.log(answer.reduce((r,v)=>{
  return r*v
},1))

//## 내가 잘못 생각한거
//숫자 10개와 알파벳 26개를 전부 배열에 넣고 생각했다..
//그냥 단순 곱셈인데 내눈에 조합들이 보이게끔 배열에 넣은것 같다