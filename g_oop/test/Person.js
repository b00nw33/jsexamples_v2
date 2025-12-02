class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    introduce() {
        console.log(`${this.name} is a ${this.age} year old ${this.gender}.`)
    }

}

// Testing
const queue = new Array()
queue.push(new Person("John", 42, "Male"))
queue.push(new Person("Mary", 58, "Female"))
queue.push(new Person("Andy", 23, "Male"))
queue.push(new Person("Julian", 16, "Male"))

queue[1].introduce()
queue.shift()
console.log(queue[1].name)

console.log(queue.filter(p => p.gender == "Male"));


export default Person;