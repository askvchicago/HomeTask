// 1) Авиакомпания. Определить иерархию самолетов. Создать авиакомпанию.
// 2) Посчитать общую вместимость и грузоподъемность.
// 3) Провести сортировку самолетов компании по дальности полета.
// 4) Найти самолет в компании, соответствующий заданному диапазону параметров.

class Airline {
    constructor() {
        this.airPark = [];

    }

    addPlane(plane) {
        this.airPark.push(plane);
    }


    getNumberOfSeats() {
        let seats = 0;
        for (let plane of this.airPark) {
            if (plane.planeClass === 'passengerPlane') {
                seats += plane.numberOfPassengers;
            }
        }
        return seats;
    }

    getCommonCapacity() {
        let capacity = 0;
        for (let plane of this.airPark) {
            if (plane.planeClass === 'cargoPlane') {
                capacity += plane.capacity;
            }
        }
        return capacity;
    }

    sortPlanesByFlightRange() {
        this.airPark.sort((a,b) => b.flightRange - a.flightRange);
    }

    findPlanesByFuelConsumption(minFuel, maxFuel) {
        return this.airPark.filter((plane) => {
            return plane.fuelConsumption >= minFuel && plane.fuelConsumption <= maxFuel;
        });
    }

}

module.exports = new Airline();