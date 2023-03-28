class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  getsalary() {
    return `${this.name} in position of ${this.position} is having a monthly salary of ${this.salary} rupees`;
  }
}
const emp = new Employee("deepank", "Software Engineer", 60000);
console.log(emp.getsalary());
