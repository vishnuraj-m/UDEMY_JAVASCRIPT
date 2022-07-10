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

// var totalDistance, distanceAlex, distanceSam;

// totalDistance = 20;
// distanceAlex = totalDistance - 12;
// console.log(distanceAlex);

// distanceSam = totalDistance - 7;
// console.log(distanceSam);

// console.log(distanceSam * 2);

// console.log(distanceSam / 2);

// !Logical Operators

// var distanceToSchool, distanceToHome;

// distanceToHome = 14;
// distanceToSchool = 6;

// var isCloser = distanceToSchool > distanceToHome;
// console.log(isCloser);

// !Boolean Logic

// var a = '10';
// var b = 10;

// console.log(a == b);
// console.log(a === b);


// ****CONDITIONAl STATEMENTS*****

// var grade = prompt('Enter your mark');

// if (grade < 40) {
//     console.log('You can not go to next class');
// } else if (grade >= 40 && grade < 45) {
//     console.log('You can not go next class but you can enter exam');
// } else {
//     console.log('You can go to next class');
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

// var grade = 47;

// grade < 45 ? console.log('You can not go to next class') : console.log('You can go next class');


// var result = grade < 45 ? 'fail' : 'pass'
// console.log(result);

// if (grade < 45) {
//     console.log('fail');
// } else {
//     console.log('pass')
// }


// !SWITCH

// var day = prompt('Enter Day');

// switch (day) {
//     case 'sunday':
//         console.log('sunday');
//         break;
//     case 'monday':
//         console.log('monday');
//         break;
//     case 'tuesday':
//         console.log('tuesday');
//         break;
//     case 'wednesday':
//         console.log('wednesday');
//         break;
//     case 'thursday':
//         console.log('thursday');
//         break;
//     case 'friday':
//         console.log('friday');
//         break;
//     case 'saturday':
//         console.log('saturday');
//         break;
//     default:
//         console.log('Wrong command');
//         break;
// }


// var grade = prompt('Enter your mark');

// switch (true) {
//     case (grade < 40):
//         console.log('You can not go to next class');
//         break;

//     case (grade >= 40 && grade < 45):
//         console.log('You can not go next class but you can enter exam');
//         break;

//     default:
//         console.log('You can go to next class');
//         break;
// }


// var gradeAlex = (80 + 90 + 95) / 3;
// var gradeSara = (89 + 76 + 98) / 3;
// var gradeNancy = (42 + 98 + 83) / 3;

// console.log('Alex average grade', gradeAlex);
// console.log('Sara average grade', gradeSara);
// console.log('Nancy average grade', gradeNancy);

// if (gradeAlex > gradeSara && gradeAlex > gradeNancy) {
//     console.log('Alex is the Highest Grade', gradeAlex);
// } else if (gradeSara > gradeAlex && gradeSara > gradeNancy) {
//     console.log('Sara is the Highest Grade', gradeAlex);
// } else if (gradeNancy > gradeAlex && gradeNancy > gradeSara) {
//     console.log('Nancy is the Highest Grade', gradeAlex);
// } else {
//     console.log('all are same average');
// }


// !!WHILE LOOP

// var number = 1;

// while (number < 11) {
//     console.log(number);
//     number++; //number = number+1
// }


// var num = 132;

// while (num <= 148) {
//     console.log(num);
//     num += 2;
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// var num = 132;

// while (num <= 148) {
//     if (num % 2 === 0) {
//         console.log(num)
//     }
//     num++;
// }


// console.log('numbers divisible by 7');

// var count = 25

// while (count <= 100) {
//     if (count % 7 === 0) {
//         console.log(count)
//     }
//     count++;
// }


// !FOR LOOP

// for (var num = 1; num < 11; num++) {
//     console.log(num)
// }


// for (var num = 132; num < 143; num++) {
//     if (num % 2 !== 0) {
//         console.log(num);
//     }
// }


for (let i = 25; i < 101; i++) {
    if (i % 7 === 0 && i % 5 === 0) {
        console.log(i)
    }
}