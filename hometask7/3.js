const arr = [12, 15, 20, 25, 59, 79];



// 1 способ через for:
function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log(findAverage(arr));



// 2 способ через forEach:
function findAverage1(arr) {
    let sum = 0;
    arr.forEach(function(element) {
        sum += element;
    });
    return sum / arr.length;
}
console.log(findAverage1(arr));



// 3 способ через Reduce:
const findAverage2 = (arr.reduce((prev, cur) => prev + cur)/arr.length);

console.log(findAverage2);
