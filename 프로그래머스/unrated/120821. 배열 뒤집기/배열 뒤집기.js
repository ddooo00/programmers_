function solution(num_list) {
    // 새로운 배열 생성
    const new_list = [];
    // 새로운 배열에 num_list 거꾸로 하나씩 push
    for (var i = num_list.length - 1; i >= 0; i --) {
      new_list.push(num_list[i]);  
    }
    // 새로운 배열 출력
    return new_list;
}