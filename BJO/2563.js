//색종이 (https://www.acmicpc.net/problem/2563)
//가로, 세로의 크기가 각각 100인 정사각형 모양의 흰색 도화지가 있다. 이 도화지 위에 가로, 세로의 크기가 각각 10인 정사각형 모양의 검은색 색종이를 색종이의 변과 도화지의 변이 평행하도록 붙인다. 이러한 방식으로 색종이를 한 장 또는 여러 장 붙인 후 색종이가 붙은 검은 영역의 넓이를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let arr = [];

for (i = 0; i < 100; i++) {
  //크기가 100*100인 배경도화지 만들기
  arr.push(new Array(100).fill(false));
}

const papers = Number(input[0]); //종이의 개수

for (i = 1; i <= papers; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  for (let j = 0; j < 10; j++) { //오른쪽으로 10만큼
    for (let k = 0; k < 10; k++) { //위쪽으로 10만큼
      arr[x + j][y + k] = true; //true인 요소의 개수를 리턴 (300개)
    }
  }
}
const result = arr.reduce((cnt, element) => {
  for (const el of element) {
    if (el) {
      cnt++;
    }
  }
  return cnt;
}, 0);
console.log(result);
/*
[참고 풀이]
1. 색종이의 왼쪽 모서리 좌표가 배열로 주어짐
2. 흰 도화지를 100 * 100 크기의 배열로 두고 색종이가 붙은 영역을 true로 채운다
3. 왼쪽 모서리 좌표에서 오른쪽으로 +10, 위쪽으로 +10에 해당하는 영역을 채운다
4. 도화지 배열에서 true인 요소의 개수를 세어 답을 구한다

참고를 했는데도 이해가 아직은 어렵다...
*/
