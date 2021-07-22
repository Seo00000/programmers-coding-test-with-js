function solution(clothes) {
  let answer = 0;
  let tmp = {};
  for (let i = 0; i < clothes.length; i++) {
    if (Object.keys(tmp).indexOf(clothes[i][1]) === -1) {
      tmp[clothes[i][1]] = 1;
    } else {
      tmp[clothes[i][1]] = tmp[clothes[i][1]] + 1;
    }
  }

  let mul = Object.keys(tmp)
    .map((key) => tmp[key])
    .reduce((acc, cur) => acc * (cur + 1), 1);

  answer = mul - 1;

  return answer;
}
