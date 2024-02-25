const Plane = require('./plane');
class PassengerPlane extends Plane {
    constructor(planeClass, flightRange, fuelConsumption, numberOfPassengers) {
        super(planeClass, flightRange, fuelConsumption);
        this.numberOfPassengers = numberOfPassengers;
    }
}

module.exports = PassengerPlane;
