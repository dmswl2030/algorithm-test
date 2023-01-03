//설탕 배달 (https://www.acmicpc.net/problem/2839)
//상근이가 설탕을 정확하게 N킬로그램 배달해야 할 때, 봉지 몇 개를 가져가면 되는지 그 수를 구하는 프로그램을 작성
//참고: https://junghyeonsu.tistory.com/274

let input = require("fs").readFileSync("./input.txt");

let count = 0;

while (input > 0) {
  if (input % 5 === 0) {
    input -= 5;
  } else {
    input -= 3;
  }
  count += 1;
}
input === 0 ? console.log(count) : console.log(-1);

/*
[손코딩]
1. n을 5로 나눈 나머지가 3일때 => 몫만큼 count를 해주고
2. 그 나머지가 또 3으로 나누어질 때 => 몫만큼 count를 해준다
3. n이 5, 3으로 안나누어 지거나 && 끝에 남은 나머지가 3으로 안나누어 지면 => -1을 리턴

[처음풀이]
function inputOn(n) {
  const remain5 = n % 5;
  const remain3 = remain5 / 3;
  let count = 0;
  if (remain5 === 3) {
    count += parseInt(n / 5);
    if (remain3 === 0) {
      count += parseInt(n / 3);
    }
  } else if (remain5 !== 0 && remain3 !== 0) {
    return -1;
  }
  console.log(count);
}

[풀이 참고]
- 치킨쿠폰 문제가 생각났다
- while문으로 n이 양수일 때의 조건을 먼저 세우고 큰수인 5부터 빼면서 n을 줄이고
  count를 늘려가는 방식이 직관적이고 좋았다
- readline으로 하다가 안되서 readFileSync로 돌아왓다..
*/
