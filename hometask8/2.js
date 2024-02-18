// Напишите функцию, которая вставит данные в массив с заданного места в массиве.
// Например дан массив [1, 2, 3, 4, 5] в функцию передается место 3 и [ 'a', 'b', 'c'] получается массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const arr = [1, 2, 3, 4, 5];
const data = ['a', 'b', 'c'];
const position = 3;

function insertArray(arr, pos, insertArr) {
    arr.splice(pos, 0, ...insertArr);
    return arr;
}

let result = insertArray(arr, position, data);
console.log(result);