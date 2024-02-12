const arr = [];
const N = 1;
const M = 10;

function getFibonachi(number) {
    return number <= 1 ? number : getFibonachi(number - 1) + getFibonachi(number - 2)
}
for (let i = N; i < N + M; i++) {
    arr.push(getFibonachi(i));
}
console.log(arr);