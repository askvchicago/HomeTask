// Задание 2
// b
// числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)

const summ = 15;
const parts = 3;
const arr = [];
let remainingSumm = summ;

for (let i = 1; i < parts; i++) {
    let random = Math.random() * remainingSumm;
    random = parseFloat(random.toFixed(2));
    arr.push(random);
    remainingSumm -= random;
}

arr.push(parseFloat(remainingSumm.toFixed(2)));

console.log(arr);

// done