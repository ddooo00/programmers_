function solution(myString, pat) {
  const trans = myString.split('').map(char => (char === 'A' ? 'B' : char === 'B' ? 'A' : char)).join('');
  return trans.includes(pat) ? 1 : 0;
}