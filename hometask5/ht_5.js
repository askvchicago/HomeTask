// 1) Сложение различных типов:
console.log('true' + true);
console.log('1' + 2);
console.log(1 + false);
// 2) Умножение различных типов:
console.log('hello' * false);
console.log('hello' * 3);
console.log(3 * false);
// 3) Деление различных типов:
console.log('hello' / false);
console.log('hello' / 3);
console.log(3 / false);
// 4) Явное преобразование:
// в Number:
console.log(Number('5'));
console.log(Number(true));
// в String:
console.log(String(144));
console.log(String(true));
// в Boolean:
console.log(Boolean('No way'));
console.log(Boolean(121));