// Задание 2
// a
// изначальное число целое, числа разбивки - целые (4,6,5)

const summ = 15;
const parts = 3;
const arr = [];
let remainingSumm = summ;

 for (let i = 1; i < parts; i++) {
     let random = Math.floor(Math.random() * remainingSumm);
     arr.push(random);
     remainingSumm -= random;
 }

arr.push(remainingSumm);

console.log(arr);

// done