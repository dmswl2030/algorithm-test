// 최대공약수 최소공배수 (https://school.programmers.co.kr/learn/courses/30/lessons/12940)
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

function solution(n, m) {
  let getGCD = (n, m) => {
    let gcd = 1;
    for (let i = 2; i <= Math.min(n, m); i++) {
      if (n % i === 0 && m % i === 0) {
        gcd = i;
      }
    }
    return gcd;
  };

  let getLCM = (n, m) => {
    let lcm = 1;
    while (true) {
      if (lcm % n == 0 && lcm % m == 0) {
        break;
      }
      lcm++;
    }
    return lcm;
  };

  return [getGCD(n, m), getLCM(n, m)];
}

console.log(solution(3, 12));

/*
[손코딩]
1. getGCD = 최대공약수를 찾는 함수
   2부터 Math.min(n, m)까지 모든 정수로 나누는데 전부 나누어떨어지는 숫자를 return
2. getLCM = 최소공배수를 찾는 함수
   lcm을 1부터 시작하여 점차 lcm++ 하면서 각각의 두수를 lcm으로 나누었을 때 나머지 값이 0이면 return
*/