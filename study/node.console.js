// 시간 측정 시작
console.time('alpha');

//출력 글자 색 적용 30~37
console.log('\u001b[31m', 'Hello');
console.log('\u001b[33m', 'Hello');
console.log('\u001b[34m', 'Hello');

//출력 배경 색 적용 40~47
console.log('\u001b[47m');
console.log('\u001b[31m', 'Hello');
console.log('\u001b[0m');// 글자색 초기화

console.timeEnd('alpha');// 시간 측정 끝