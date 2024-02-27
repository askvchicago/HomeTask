function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + 1);
}

function getNum() {
    return new Promise((resolve, reject) => {
        const random = getRandom(1, 5);
        setTimeout(() => {
            resolve(random);
        }, 3000);
    });
}

async function SquareNum() {
    const number = await getNum();
    return number * number;
}

SquareNum().then(result => {
    console.log(result);
});


