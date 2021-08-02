function solution(progresses, speeds) {
  let answer = [];
  let day = []; //

  for (let i = 0; i < progresses.length; i++) {
    // 기존에는 나머지가 있으면 tmp 값에 +1 해줬었는데 올림으로 수정.
    let tmp = Math.ceil((100 - progresses[i]) / speeds[i]);
    day.push(tmp);
  }

  while (day.length) {
    let i = 0;
    let checkDay = [];
    for (let j = 0; j < day.length; j++) {
      if (day[j] > day[i]) break;
      checkDay.push(day[j]);
    }
    answer.push(checkDay.length);

    for (let j = 0; j < checkDay.length; j++) {
      day.shift();
    }
    i++;
  }

  return answer;
}

/**
 * 1차 제출 코드
 * 1. day 배열을 만들어 각 작업의 소요일을 구함.
 * 2. while문을 돌면서 첫번째 작업이 끝났을 때, 해당 작업보다 소요일이 적었던 작업을 checkDay라는 배열에 push,
 *    소요일이 현재 배포될 작업보다 이후인 경우 checkDay 배열에 요소 추가하는 것을 멈추고 빠져나옴.
 * 3. checkDay 배열 길이만큼 day 배열의 앞에서부터 요소 제거 (shift()) 함.
 * 4. day 배열에 인자가 남지 않으면 종료됨.
 * 
 * TODO: 1. 다른 사람의 풀이를 보던 중 while 함수 내에서 progresses에 speeds만큼 증가시키면서 100%가 됐을 때 deploy에 쌓고
 * 동시에 progresses, speeds 배열을 shift 해주는 방법이 있었다. 
 * TODO: 2. checkDay를 구하는 부분은 비슷하나 아래의 식으로 구현한 케이스도 있었다.
 * for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }
 * 두가지 경우 또한 이해하고 넘어갈 것! 
 * 
 * function solution(progresses, speeds) {
  let answer = [];
  let day = [];

  for (let i = 0; i < progresses.length; i++) {
    let tmp = Math.floor((100 - progresses[i]) / speeds[i]);
    if ((100 - progresses[i]) % speeds[i]) tmp++;
    day.push(tmp);
  }

  while (day.length) {
    let i = 0;
    let checkDay = [];
    for (let j = 0; j < day.length; j++) {
      if (day[j] > day[i]) break;
      checkDay.push(day[j]);
    }
    answer.push(checkDay.length);

    for (let j = 0; j < checkDay.length; j++) {
      day.shift();
    }
    i++;
  }

  return answer;
}
 */

let progresses = [93, 30, 55];
let speeds = [1, 30, 5];
//  2, 1
let progresses2 = [95, 90, 99, 99, 80, 99];
let speeds2 = [1, 1, 1, 1, 1, 1];
// 1, 3, 2
let progresses3 = [20, 99, 93, 30, 55, 10];
let speeds3 = [5, 10, 1, 1, 30, 5];
// 3, 3
let progresses4 = [96, 99, 98, 97];
let speeds4 = [1, 1, 1, 1];
// 4
let progresses5 = [40, 93, 30, 55, 60, 65];
let speeds5 = [60, 1, 30, 5, 10, 7];
// 1, 2, 3
let progresses6 = [93, 30, 55, 60, 40, 65];
let speeds6 = [1, 30, 5, 10, 60, 7];
// 2, 4

console.log(solution(progresses, speeds));
console.log(solution(progresses2, speeds2));
console.log(solution(progresses3, speeds3));
console.log(solution(progresses4, speeds4));
console.log(solution(progresses5, speeds5));
console.log(solution(progresses6, speeds6));
