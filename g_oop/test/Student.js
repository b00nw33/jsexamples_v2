import Person from "./Person.js"

class Student extends Person {
    constructor (name, age, gender, school) {
        super(name, age, gender);
        this.school = school;
    }
}

const queue = new Array();
queue.push(new Student("Alice", 23, "Female", "NUS"));
queue.push(new Student("James", 39, "Male", "GenSG"));
queue.push(new Student("Henry", 35, "Male", "NTU"));
queue.push(new Student("Bruce", 25, "Male", "NUS"));
queue.push(new Student("Mona", 33, "Female", "GenSG"));

console.log(queue.filter(p => p.school == "GenSG"))

