//같은 숫자는 싫어(https://school.programmers.co.kr/learn/courses/30/lessons/12906)
//연속적인 숫자만 제거하고 남은 숫자를 반환하는 배열을 return

function solution(arr) {
  return arr.filter((value, index) => value !== arr[index + 1]);
}
console.log(solution([4, 4, 4, 3, 3]));

/*
[손코딩]
1. 다음 숫자와 비교해야 하므로 반복문에서 arr[i]와 arr[i+1]로 비교
2. 같으면 i를 증가시켜 비교를 계속하고
3. 다르면 빈배열에 arr[i]값을 push하고 i를 증가하기
*/

/*
[처음 풀이]
let i = 0;
let answer = [];
while (true) {
  if (i === arr.length - 1) {
    //i가 마지막 인덱스일때 종료
    answer.push(arr[i]);
    break;
  }
  if (arr[i] === arr[i + 1]) {
    //다음 숫자와 비교했을 때 같으면 i++
    i++;
  } else {
    //
    answer.push(arr[i]); //다르면 answer에 push
    i++;
  }
return answer;
*/
