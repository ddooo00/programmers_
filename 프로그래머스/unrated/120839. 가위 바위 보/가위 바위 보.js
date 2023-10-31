function solution(rsp) {
    let answer = '';
    for(let i = 0; i < rsp.length; i++) {
        let gbb = rsp.charAt(i);
        if(gbb === "2") {
            answer += "0";
        }
        else if(gbb === "0") {
            answer += "5";
        }
        else if(gbb === "5") {
            answer += "2";
        }
    }
    return answer;
}