function solution(hp) {
    let a = 5, b = 3, c = 1;
    const answer = Math.floor(hp / a) + Math.floor((hp % a) / b) + (hp % 5 % 3);
    return answer;
}