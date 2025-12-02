
// Constructor function for creating a Vehicle object
class Vehicle {
    constructor(make, model, year, distanceTraveled){
        this.make = make; // Property to store the vehicle's make
        this.model = model; // Property to store the vehicle's model
        this.year = year; // Property to store the vehicle's year of launch / production
        this.distanceTraveled = distanceTraveled ?? 0; // Property to track the kilometers driven by the car
        // this.distanceTraveled = distanceTraveled ? distanceTraveled : 0; // Property to track the kilometers driven by the car
    }


    // Method common to all vehicles
    travel(distance) {
        this.distanceTraveled += distance;
        console.log(`The ${this.year} ${this.make} ${this.model} has been driven ${distance} units (km).`);
    };

    // Method to get the total distance travelled
    getTotalDistance() {
        return this.distanceTraveled;
    };

    calcFuelConsumed() {
        return 10 * this.distanceTraveled;
    }
}

// Creating a new instance of Vehicle
let myTransport = new Vehicle("Toyota", "Raize", 2022);

// Call the method travel() to update the distance of the instance of Vehicle by 100
myTransport.travel(100);
myTransport.travel(30);

// Call the method getTotalKilometersDriven to retrive the mileage of the instance of car
console.log(`Total: ${myTransport.getTotalDistance()}km.`);



// Creating a new instance of Vehicle
let myTransport2 = new Vehicle("Honda", "Tourism", 2017, 20000);

// Call the method travel() to update the distance of the instance of Vehicle by 100
myTransport2.travel(50);
myTransport2.travel(40);

// Call the method getTotalKilometersDriven to retrive the mileage of the instance of car
console.log(`Total: ${myTransport2.getTotalDistance()}km.`);

// module.exports = Vehicle; // Export Class (ES5 way)
export default Vehicle;      // ES6+ way