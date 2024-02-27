function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + 1);
}

function getNum() {
    return new Promise((resolve, reject) => {
        const random = getRandom(1, 5);
        console.log("Первое число: " + random);
        setTimeout(() => {
            resolve(random);
        }, 3000);
    });
}

function getNum2() {
    return new Promise((resolve, reject) => {
        const random = getRandom(6, 10);
        console.log("Второе число: " + random);
        setTimeout(() => {
            resolve(random);
        }, 5000);
    });
}


async function SummNumbers() {
    const number = await getNum();
    const number2 = await getNum2();
    const Summ = number + number2;
    return(Summ);
}

SummNumbers().then(result => {
    console.log("Сумма = " + result);
});