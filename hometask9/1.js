function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + 1);
}

const prom = new Promise((resolve, reject) => {
    const Random = getRandom(1,5);
    setTimeout(() => {
        resolve(1);
    }, Random*1000)
})

const prom2 = new Promise((resolve, reject) => {
    const Random = getRandom(1,5);
    setTimeout(() => {
        resolve(2);
    }, Random*1000)
})

const prom3 = new Promise((resolve, reject) => {
    const Random = getRandom(1,5);
    setTimeout(() => {
        resolve(3);
    }, Random*1000)
})

Promise.race([prom, prom2, prom3]).then((value) => {
    console.log(value);
    });
