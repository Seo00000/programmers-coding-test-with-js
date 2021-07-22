### [완주하지 못한 선수](https://programmers.co.kr/learn/courses/30/lessons/42576)

이 문제를 푸는 것 자체에는 긴 시간이 소요되지 않았는데 답안 제출시에 단순히 정확
성 테스트만이 아닌, 효율성 테스트라는 부분이 있어 다시 풀어야 했다. <br/><br/>

##### 오답1

```javascript
function solution(participant, completion) {
  var answer = "";
  for (let i = 0; i < completion.length; i++) {
    let tmp = participant.indexOf(completion[i]);
    if (tmp !== -1) participant.splice(tmp, 1);
  }
  answer = participant[0];
  return answer;
}
```

##### 오답2

```javascript
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  completion.map((c) => {
    if (participant.indexOf(c) !== -1)
      participant.splice(participant.indexOf(c), 1);
  });

  answer = participant[0];
  return answer;
}
```

<br/>
1,2 번의 오답 모두 반복문을 돌려서 참여자 배열에서 완주자 데이터를 하나씩 지워서 남은 참여자 데이터를 answer로 반환하는 방법으로 풀었다. 
<br/><br/>
결과는... 50점. 효율성 테스트에서 통과할수 없었다.
<br/><br/>
for => 시간복잡도 O(n),
splice => 시간복잡도 O(n)
<br/>
2중으로 썼기 때문에 시간복잡도는 O(n²)이다.
<br/><br/>

##### 정답
```javascript
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] != completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}
```
<br/>
정렬을 통해 효율을 올렸다. 결국 참여자와 완주자 데이터는 1개의 원소 차이이며, 정렬을 통해 [a, b, c] 와 [a, b] 라는 데이터를 만들어 배열에서 같은 번째 원소의 값이 서로 다른 시점에 남아있는 참여자를 answer로 반환했다.

<hr/>

### [위장](https://programmers.co.kr/learn/courses/30/lessons/42578)
