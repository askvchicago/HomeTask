// Задание 5

const n1 = 3487;
const n2 = 3794;

const strN1 = n1.toString();
const strN2 = n2.toString();

let match = 0;
let matchValue = 0;

for (let i = 0; i < strN1.length; i++) {
    if (strN1[i] === strN2[i]) {
        match++;
    }
 else if (strN2.includes(strN1[i])) {
    matchValue++ }
}

console.log("Совпадают по значению и позиции:", match);
console.log("Совпадают только по значению:", matchValue);

// done