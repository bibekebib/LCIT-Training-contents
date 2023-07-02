// var student = {}

// student.name = 'bibek';
// student.faculty = 'BCT'
// student.semester = 'III'

// console.log(student.semester)


// var student = {
//     name:'bibek',
//     faculty:'bct',
//     semester:'III',
//     read : function(){
//             console.log('I am a student, I study')
//     }
// }

// console.log(student.name)
// student.read()


// var student = new Object()

// student.name = 'Bibek'
// student.faculty = 'bct'
// student.semester = 'III'


// console.log(student.name)
// console.log(student['name'])




// var student = {
//     name:'bibek',
//     faculty:'bct',
//     semester:'III',
//     arr : ['A', 'B', 'C'],
//     read : function(){
//             console.log('I am a student, I study')
//     }
// }

// console.log(student.arr[0])

// student.marks = 50;
// console.log(student.marks)

// student.marks = 60;
// console.log(student.marks)


// var student = {
//     name:'bibek',
//     faculty:'bct',
//     semester:'III',
//     arr : ['A', 'B', 'C'],
//     read : function(){
//             console.log('I am a student, my name is: ', this.name)
//     }
// }

// student.read()


// delete student.name

// console.log(student.name)

// student.name = '';
// console.log(student.name)


function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    
    this.greet = function() {
      console.log("Hello, my name is " + this.name);
    }
  }
let person1 = new Person("John", 30, "male");
let person2 = new Person("bibek", 30, "male");
let person3 = new Person("abhishik", 30, "male");
let person4 = new Person("blah", 30, "male");
let person5 = new Person("blah", 30, "male");
let person6 = new Person("don", 30, "male");
person3.greet()