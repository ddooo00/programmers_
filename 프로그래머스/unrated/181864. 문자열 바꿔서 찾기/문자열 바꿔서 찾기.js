function solution(myString, pat) {
  // "A"와 "B"를 동시에 변환
  let trans = "";
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === "A") {
      trans += "B";
    } else if (myString[i] === "B") {
      trans += "A";
    } else {
      trans += myString[i];
    }
  }
  
  // 변환된 문자열에서 원하는 패턴 검사
  if (trans.includes(pat)) {
    return 1;
  } else {
    return 0;
  }
}