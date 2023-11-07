function solution(myString) {
    let answer = '';
    for(let i =0; i<myString.length; i++){
        let char = myString[i];
if(char === 'a'){
    answer+= "A"
}else if(char > "A" && char < "Z"){
    answer += char.toLowerCase();
}else{
    answer+=char;
}
    }
    return answer;
}