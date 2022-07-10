// console.log('Hello World');
// var name = 'vishnu';
// console.log(name);

// var schoolTeam = 'Football';
// var schoolNumber = 20;
// !Boolean
// var isRegistered = true;
// console.log(isRegistered);

//! UNDEFINED
// var job;
// console.log(job);

// job = 'Student'
// console.log(job);

//! Type Coercion

// console.log(name + ' ' + schoolNumber);
// var schoolName, hasCourse;
// schoolName = 'Demo School';
// hasCourse = true;

// console.log(schoolName + ' has 35 courses. Does it have any course ? ' + hasCourse);

// !Mutation

// console.log(schoolName + ' has 35 courses. Does it have any course ? ' + hasCourse);

/*console.log(name + ' ' + schoolNumber);
var schoolName, hasCourse;
schoolName = 'Demo School';
hasCourse = true;
*/

// schoolNumber = 'twenty two';
// console.log(schoolNumber);

// schoolTeam = "Cricket";
// console.log(schoolTeam);

// !alert
// alert(schoolTeam);

// !prompt
// var age = prompt('how old are you ?')
// console.log(`age: ${age}`);
// console.log('Alex is ' + age + ' years old');

// !!!!!!!!!!!!!!!!!!!!! BASIC OPERATORS !!!!!!!!!!!!!!!!!!!!!

var totalDistance, distanceAlex, distanceSam;

totalDistance = 20;
distanceAlex = totalDistance - 12;
console.log(distanceAlex);

distanceSam = totalDistance - 7;
console.log(distanceSam);

console.log(distanceSam * 2);

console.log(distanceSam / 2);

// !Logical Operators

var distanceToSchool, distanceToHome;

distanceToHome = 14;
distanceToSchool = 6;

var isCloser = distanceToSchool > distanceToHome;
console.log(isCloser);

// !Boolean Logic

var a = '10';
var b = 10;

console.log(a == b);
console.log(a === b);


// ****CONDITIONAl STATEMENTS*****

// var grade = prompt('Enter your mark');

// if (grade < 40) {
//     console.log('You can not go to next class');
// } else if (grade >= 40 && grade < 45) {
//     console.log('You can not go next class but you can enter exam');
// } else {
//     console.log('You can go next class');
// }


// var age = prompt('Enter your age');
// if (age < 18) {
//     console.log('you are not allowed to enter the cafe');
// } else if (age >= 18 && age < 23) {
//     console.log('You can enter the cafe but can not drink alcohol')
// } else {
//     console.log('You can enter cafe and drink alcohol');
// }


// ! TERNARY OPERATOR

var grade = 47;

grade < 45 ? console.log('You can not go to next class') : console.log('You can go next class');


var result = grade < 45 ? 'fail' : 'pass'
console.log(result);

if (grade < 45) {
    console.log('fail');
} else {
    console.log('pass')
}