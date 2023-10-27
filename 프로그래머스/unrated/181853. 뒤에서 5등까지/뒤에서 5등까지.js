
function solution(num_list) {
    const answer = [];

    const sorteList = num_list.sort((a,b) => a-b);
    for(let i=0; i< 5; i++){
        answer.push(sorteList[i]);
    }
    return answer;
}