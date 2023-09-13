// ES2015 class
class Student {
    constructor(student_name, student_age, student_gender) {
        this.student_name = student_name;
        this.student_age = student_age;
        this.student_gender = student_gender;
    }
}

// Constructor Function
// function Student(student_name, student_age, student_gender) {
//     this.student_name = student_name;
//     this.student_age = student_age;
//     this.student_gender = student_gender;
// }

const obj1 = new Student('Pankaj', 23, 'Male');
const obj2 = new Student('Reena', 25, 'Female');
const obj3 = new Student('Rajeev', 26, 'Male');

console.log(obj1.student_name, obj1.student_age, obj1.student_gender);
console.log(obj2.student_name, obj2.student_age, obj2.student_gender);
console.log(obj3.student_name, obj3.student_age, obj3.student_gender);

Student.prototype.branch = 'CSE';
Student.prototype.college = 'ABC';

console.log(obj1.branch + ' ' + obj1.college);
console.log(obj2.branch + ' ' + obj2.college);
console.log(obj3.branch + ' ' + obj3.college);

