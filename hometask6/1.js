// Задание 1

let results1 = 0;
let results2 = 0;
const numthrows = 3;

for (let i = 0; i < numthrows; i++) {
    results1 += Math.floor(Math.random() * 6) + 1;
    results2 += Math.floor(Math.random() * 6) + 1;
}

if (results1 > results2) {
    console.log("Игрок 1 победил с результатом: " + results1);
    console.log("Результат игрока 2: " + results2);
} else if (results2 > results1) {
    console.log("Игрок 2 победил с результатом: " + results2);
    console.log("Результат игрока 1: " + results1);
} else {
    console.log("Ничья! Результат обоих игроков: " + results1);
}

// done