const Plane = require('./plane');

class CargoPlane extends Plane {
    constructor(planeClass, flightRange, fuelConsumption, capacity) {
        super(planeClass, flightRange, fuelConsumption);
        this.capacity = capacity;
    }
}

module.exports = CargoPlane;