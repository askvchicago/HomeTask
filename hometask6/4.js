// Задание 4

const arr = [300, 3, 67, 15, 28, 109, 56];

let maxNumber = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
        maxNumber = arr[i];
    }
}

console.log('Максимальное значение:', maxNumber);

// done

