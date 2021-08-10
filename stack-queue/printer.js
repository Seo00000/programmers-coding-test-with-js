// https://programmers.co.kr/learn/courses/30/lessons/42587

// 문제 푼 후기: 흐름도(순서도) 그리는 연습을 조금 해야할 것 같다.

function solution(priorities, location) {
  let answer = 0;
  let count = 0;

  while (priorities.length) {
    // 맨앞 작업을 빼낸다.
    let first = priorities.shift();

    // 맨앞 작업보다 더 중요한 문서가 있다면
    if (priorities.filter((p) => p > first).length) {
      priorities.push(first);
    } else {
      // count (인쇄 횟수) 1 증가
      count++;
      // 내가 인쇄를 요청한 문서라면, 해당 문서의 횟수 (count)를 answer에 넣고 while문 종료
      if (location == 0) {
        answer = count;
        break;
      }
    }
    // 내가 요청한 문서가 맨 뒤로 갔을 때 location 위치를 length - 1 (맨뒤 인덱스)로 초기화
    if (location == 0) {
      location = priorities.length - 1;
    } else {
      // 요청한 문서 인덱스 값 1 감소 (계속해서 맨앞의 값이 줄어들기 때문에)
      location--;
    }
  }

  return answer;
}

let priorities1 = [2, 1, 3, 2];
let location1 = 2;
// 1
let priorities2 = [1, 1, 9, 1, 1, 1];
let location2 = 0;
// 5
console.log(solution(priorities1, location1));
console.log(solution(priorities2, location2));
