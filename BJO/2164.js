//카드2 (https://www.acmicpc.net/problem/2164)
//제일 위에 있는 카드를 바닥에 버린다. 그 다음, 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다.
//참고: https://velog.io/@yoseoplee/JS%EB%A1%9C-%ED%91%B8%EB%8A%94-%EB%B0%B1%EC%A4%80-2164.-%EC%B9%B4%EB%93%9C2

const readline = require("readline");
const { arrayBuffer } = require("stream/consumers");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", inputOn);

rl.on("close", () => {
  process.exit();
});

function inputOn(n) {
  const N = Number(n);

  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }

  // LinkedList 클래스 설정
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    push(val) {
      const newNode = new Node(val);

      if (!this.head) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
      }

      this.tail = newNode;
      this.length++;

      return newNode;
    }

    getHead() {
      // 첫 노드(head) 가져오기
      return this.head.val;
    }

    removeHead() {
      // 첫 노드(head)를 연결리스트에서 지우기
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
    }

    getLength() {
      // 연결리스트의 길이 알기
      return this.length;
    }
  }

  const cards = new LinkedList();

  for (let i = 1; i <= N; i++) {
    cards.push(i);
  }

  while (cards.getLength() !== 1) {
    // 길이가 0 이 아니라면.
    cards.removeHead(); // 맨 앞 노드를 지우고
    cards.push(cards.getHead()); // 맨 앞 노드를 맨뒤로 붙이고
    cards.removeHead(); // 다시 맨 앞 노드를 지우고
  }
  console.log(cards.getHead());
}

/*
[손코딩]
1. 1 ~ N까지의 배열 만들기
2. 맨앞의 숫자를 제거(shift), 그다음 숫자를 뒤로 보내는(shift하고 바로 push?) 반복문을 실행
*/

/*
[처음 풀이] : 시간초과
-> push와 shift를 사용하는 과정에 시간복잡도가 너무 커지기 때문
-> 삽입 삭제가 빈번한 경우 LinkedList를 사용해야 함
function inputOn(n) {
  const N = Number(n);
  let cards = [];
  for(let i = 1; i <= N; i++) {
    cards.push(i)
  }
  while (true) {
    if (cards.length === 1) {
        break;
    } else {
        cards.shift();
        cards.push(cards.shift());   
    }    
  }
  console.log(cards);
  rl.close();
}
*/
