/*
/////////// Valuables and Variables ///////////

let js = "amazing";

console.log(40 - 8 + 23 - 10);

console.log("Jonas");
console.log(23);

// Valuables and Variables task 1
let country = "Poland";
let continent = "Europe";
let population = 37.97 + " milions";

console.log(country);
console.log(continent);
console.log(population);
*/
/*
/////////// Data Types ///////////

let jsIsFun = true;
console.log(jsIsFun);

console.log(typeof jsIsFun);
console.log(typeof 23);
console.log(typeof "Kacper");
jsIsFun = "yes!";
console.log(typeof jsIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2000;
console.log(typeof year);

console.log(typeof null);

/////////// LET CONST VAR ///////////

let age =30;
console.log(age);
age = 31;
console.log(age);
const birthYear = 1995
console.log(birthYear);
// birthYear = 1996
// const job; nie zadziala bo jest to stala
let job;
console.log(job);
// let nie jest stałe, takze moze ulec zmianie

var secondJob = "programmer";
console.log(secondJob);
secondJob = "teacher";
console.log(secondJob);
// nie uzywaj var, pozniej sie dowiesz czemu xD

// mozna deklarowac zmienne bez var/let/const, ale nie rob tego


/////////// Basic operators ///////////
/// Math Operators ///
const now = 2020;
const birthYearKacper = 2000;
const ageKacper = now - birthYearKacper;
const ageFriend = now - 1996;
console.log(ageKacper, ageFriend);
console.log(ageKacper * 2, ageKacper / 10, 2 ** 3 );
// 2**3 = 2*2*2

const firstName = "Kacper";
const lastName = "Biały";
console.log(firstName + " " + lastName);

// Assigment operators //
let x = 10 + 5; // 15
x += 10; // x= x + 10 = 25
x*= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// Comparison operators (porownanie)//
console.log(ageKacper > ageFriend); // >, <, >=, <=
console.log(ageFriend >= 18);

const isFullAge = ageFriend >= 18;

console.log(now - 1991 > now - 2020);

/////////// Operator Precenedce ///////////
const now = 2020;
const ageKacper = now - 2000;
const ageFriend = now - 1996;

console.log(now - 1991 > now - 2020);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageFriend + ageKacper) / 2;
console.log(ageKacper, ageFriend, averageAge);

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK 😀

const heightMark = 1.69;
const weightMark = 78;
const heightJohn = 1.95; 
const weightJohn = 92;

const bmiMark = weightMark / (heightMark * heightMark);
console.log(bmiMark)
const bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

const markHeight = 1.88;
const markMass = 95;
const johnHeight = 1.76;
const johnMass = 85;

const secondBmiMark = markMass / markHeight**2;
console.log(secondBmiMark);
const secondBmiJohn = johnMass / johnHeight**2;
console.log(secondBmiJohn);
const johnHigherBMI = secondBmiJohn > secondBmiMark;
console.log(johnHigherBMI);
*/
