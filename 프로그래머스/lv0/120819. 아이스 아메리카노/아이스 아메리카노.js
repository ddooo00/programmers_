function solution(money) {
    let answer = [];
    answer.push(Math.floor(money / 5500)) //마실 잔 수
    answer.push(money % 5500)//남는 돈
    return answer
}