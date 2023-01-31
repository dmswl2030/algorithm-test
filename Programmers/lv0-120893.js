//대문자와 소문자 (https://school.programmers.co.kr/learn/courses/30/lessons/120893)
//문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    let answer = ''
    for(let i of my_string){
        if(i === i.toUpperCase()){
            answer += i.toLowerCase();
        }else{
            answer += i.toUpperCase();
        }
    }
    return answer;
}
/*
[다른사람 풀이]
문자열 코드로 대문자는 65, 소문자는 97부터 시작한다는 점을 이용하여 풀이하였음
const solution = my_string => [...my_string].map(a => a.charCodeAt() >= 65 && a.charCodeAt() < 97 ? a.toLowerCase() : a.toUpperCase()).join("")
}
*/
