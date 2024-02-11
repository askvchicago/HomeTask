const number = 35335912

function checkSumEquality(num) {
    let strNum = num.toString();
    let firstHalf = strNum.slice(0, strNum.length/2);
    let secondHalf = strNum.slice(strNum.length/2);

    let sumFirstHalf = 0;
    let sumSecondHalf = 0;

    for (let i = 0; i < strNum.length/2; i++) {
        sumFirstHalf += Number(firstHalf[i]);
        sumSecondHalf += Number(secondHalf[i]);
    }

    if (sumFirstHalf === sumSecondHalf) {
        return 'да';
    } else {
        return 'нет';
    }
}

console.log(checkSumEquality(number));