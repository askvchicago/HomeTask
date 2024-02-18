const start = new Date(2000, 0, 1);              //  << Выбранная дата отсчёта
const currentDate = new Date();                                    // << Live-дата (или ввести в скобки нужную)


function Friday13(start) {
    let count = 0;

    while (start <= currentDate) {
        if (start.getDate() === 13 && start.getDay() === 5) {
            count++;
        }
        start.setDate(start.getDate() + 1);
    }

    return count;
}

console.log(Friday13(start));

