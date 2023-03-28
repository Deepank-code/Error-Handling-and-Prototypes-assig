class Person {
  constructor(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
  }
  getdetail() {
    return `Name is ${this.name} ,age is ${this.age}`;
  }
}
let person = new Person("deepank", 20);
let person1 = new Person();
console.log(person.getdetail());
console.log(person1.getdetail());
