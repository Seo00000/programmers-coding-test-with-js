function solution(progresses, speeds) {
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
