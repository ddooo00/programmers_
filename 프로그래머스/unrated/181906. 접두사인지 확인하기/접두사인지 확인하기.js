function solution(my_string, is_prefix) {
  return my_string.split('').filter((_, index) => my_string.substring(0, index + 1) === is_prefix).length > 0 ? 1 : 0;
}