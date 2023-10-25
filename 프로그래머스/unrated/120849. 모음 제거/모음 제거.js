function solution(my_string) {
    // 문자열을 배열로 변환하여 각 문자를 처리할 수 있도록 합니다.
    const letter = my_string.split('');

    // 모음이 아닌 문자만 필터링합니다.
    const filtered =  letter.filter(a => !'aeiouAEIOU'.includes(a));

    // 필터링된 문자 배열을 다시 문자열로 결합합니다.
    const answer = filtered.join('');

    return answer;

}