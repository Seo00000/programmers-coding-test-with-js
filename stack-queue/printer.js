// https://programmers.co.kr/learn/courses/30/lessons/42587

// 문제 푼 후기: 흐름도(순서도) 그리는 연습을 조금 해야할 것 같다.

function solution(priorities, location) {
  let answer = 0;
  let count = 0;

  while (priorities.length) {
    let first = priorities.shift();

    // console.log(location, count);
    //  더 중요한 문서가 있다면
    if (priorities.filter((p) => p > first).length) {
      priorities.push(first);
    } else {
      count++;
      if (location == 0) {
        answer = count;
        break;
      }
    }
    // 맨 뒤로 갔을 때
    if (location == 0) {
      location = priorities.length - 1;
    } else {
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
