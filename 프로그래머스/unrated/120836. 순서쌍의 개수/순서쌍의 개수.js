function solution(n) {    
    let answer = [];
    
    for(let i = 1; i <= n / 2; i++){
        if(n % i === 0){
           answer.push(i);
        }
    }
    
    return answer.length + 1;
}
