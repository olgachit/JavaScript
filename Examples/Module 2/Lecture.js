const names=['Frank', 'Scott', 'Jasmine', 'Dom'];
for (let i=0; i<names.length; i++) {
    console.log(`Name: ${names[i]}`);
}

console.log(names.sort())
console.log(names.reverse())
names.push('Kirpal')
console.log(names.sort())

const student = {
  firstName: 'Greg',
  lastName: 'Focker',
  studentId: '234359',
  phone: '040 5902123',
}
const greeting = `Hello, my name is ${student.firstName} ${student.lastName}`;
const studentInfo = `student number: ${student['studentId']}, phone number: ${student['phone']}`

console.log(greeting)
console.log(studentInfo)

student.address="Espoo"
delete student.phone;

console.log(student)

student.phone="2322335323"
console.log(student)

let student2 = {
      firstName: 'Ahmed',
      lastName: 'Hussein',
      credits :175,
      hasLeft: function() {return 240-this.credits}
    }

console.log("Student " + student2.firstName + " is missing " + student2.hasLeft() + " credits.");