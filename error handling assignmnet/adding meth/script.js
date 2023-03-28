function Student(name) {
  this.name = name;
}

Student.prototype.printdetail = function () {
  console.log(`hello my name is ${this.name}`);
};
let student = new Student("deepank");
student.printdetail();
