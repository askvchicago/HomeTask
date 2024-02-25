const PassengerPlane = require('./passengerPlane')
const CargoPlane = require('./cargoPlane')
const airline = require('./airline')

const passPlane = new PassengerPlane('passengerPlane', 6000, 2650, 305);
const passPlane1 = new PassengerPlane('passengerPlane', 3000, 7800, 325);
const passPlane2 = new PassengerPlane('passengerPlane', 12000, 5700, 350);
const passPlane3 = new PassengerPlane('passengerPlane', 11000, 2500, 400);

const cargoPlane = new CargoPlane('cargoPlane', 2000, 2300, 100);
const cargoPlane1 = new CargoPlane('cargoPlane', 5000, 1900, 50);
const cargoPlane2 = new CargoPlane('cargoPlane', 3000, 3500, 55);
const cargoPlane3 = new CargoPlane('cargoPlane', 10000, 7000, 110);

airline.addPlane(passPlane);
airline.addPlane(passPlane1);
airline.addPlane(passPlane2);
airline.addPlane(passPlane3);

airline.addPlane(cargoPlane);
airline.addPlane(cargoPlane1);
airline.addPlane(cargoPlane2);
airline.addPlane(cargoPlane3);

// 1.Авиакомпания
console.log('Список самолётов авиакомпании:');
console.log(airline.airPark);

// 2.Общая вместительность и грузоподъёмность
console.log('Общая вместительность самолётов компании: ' + airline.getNumberOfSeats());
console.log('Общая грузоподъёмность самолётов компании: ' + airline.getCommonCapacity());

// 3.Сортировка по дальности полёта
airline.sortPlanesByFlightRange();
console.log('Отсортированный список самолётов по дальности полёта: ')
console.log(airline.airPark);

// 4.Поиск самолета в компании, соответствующему заданному диапазону параметров.
// (например, по параметру потребления горючего)
const minFuelConsumption = 1700;
const maxFuelConsumption = 2500;
console.log('Для заданного диапазона расхода топлива от ' + minFuelConsumption + ' до '
    + maxFuelConsumption + ' кг/ч вам подойдут следующие самолёты: ')
console.log(airline.findPlanesByFuelConsumption(minFuelConsumption, maxFuelConsumption));






