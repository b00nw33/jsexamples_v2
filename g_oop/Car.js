// Reference: https://www.youtube.com/watch?v=vDJpGenyHaA

// Car is a child class of Vehicle 
// const Vehicle = require("./Vehicle.js"); 
import Vehicle from "./Vehicle.js";

class Car extends Vehicle { // <-- INHERITANCE: Using 'extends' establishes the inheritance relationship

    constructor(make, model, year) {
        super(make, model, year); // <-- INHERITANCE: The 'super()' call executes the parent's (Vehicle's) constructor
        this.hasAirbag = true; 
    }

    // static Method does not have to be instantiated as an instance 
    // static Method can be directly accessed via the class itself
    // For performing initialisation tasks WITHOUT affecting the class itself
    static welcomeStatement(msg){
        console.log(msg);
    }

    // POLYMORPHISM: Overriding/Specializing the parent's method
    drive(distance) {   // <-- ABSTRACTION: Calls the 'drive' method, hiding the logic of calling 'super.travel()'.
        super.travel(distance); // Reuses the encapsulated method travel from parent (Vehicle).
        console.log(`Driving is complete. Status: ${this.hasAirbag ? 'Safety check passed.' : 'Airbag absent.'}`);
    }

    // New method specific to the Car class
    checkSafetyFeature() {
        return this.hasAirbag;
    }

    carFuelConsumed() {
        return 12 * this.distanceTraveled;
    }

    // Methods getTotalDistance() and travel() are inherited and works as-is (implicit Inheritance) and continues to provide:
    // - ABSTRACTION (hides the implementation that exists in the parent)
    // - ENCAPSULATION (manages the internal state of distanceTravelled)
}
let myNewCar = new Car("Honda", "Civic", 2024);
myNewCar.drive(50); // Calls the Car's specialized drive() method
console.log(`Car total distance: ${myNewCar.getTotalDistance()}`);
console.log(`Has Airbag: ${myNewCar.checkSafetyFeature()}`);
console.log(`total fuel consumed: ${myNewCar.carFuelConsumed()}`);

console.log(`Test: ${myNewCar.calcFuelConsumed()}`)

let myNewVehicle = new Vehicle("Honda", "Tourism", 2017, 19000);
console.log(myNewVehicle);

// module.exports = Car;
export default Car;