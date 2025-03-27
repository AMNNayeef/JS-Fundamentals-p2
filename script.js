// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// reserved keywords
// const interface = 'audio';
// const private= 534;


// function logger() {
//     console.log('My name is Nayeef');
// }

//calling / running / invoking function

// logger();

// function fruitProcessor(apples, oranges) {
//     //console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const mixJuice = fruitProcessor(5, 3);
// console.log(mixJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// function calcAge1(birthYear) {
//     const age = 2037 - birthYear;
//     return age;
// }

// const age1 = calcAge1(1991);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// //function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

//Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetire = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetire(1991, 'Nayeef'));
// console.log(yearsUntilRetire(1995, 'Nowfal'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetire = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
//     return retirement;
//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetire(1991, 'Nayeef'));
// console.log(yearsUntilRetire(1950, 'Nowfal'));


// const friends = ['Nayeef', 'Nowfal', 'Amn'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[1]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Talha';
// console.log(friends);
// //frinds =['Bob', 'Alice']

// const firstName = 'Nayeef';
// const nayeef = [firstName, 'Amn', 2037 - 1991, 'Teacher', friends];
// console.log(nayeef);
// console.log(nayeef.length);

// //Exrecise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);


// const friends = ['Talha', 'Ashfi', 'Eraz'];

// //adding elements
// const newLength = friends.push('Nasif');
// console.log(friends);
// console.log(newLength);

// friends.unshift('Tanzim');
// console.log(friends);

// //removing elements
// friends.pop(); //last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();// first
// console.log(friends);

// console.log(friends.indexOf('Ashfi'));
// console.log(friends.indexOf('Nayeef'));

// friends.push(23);
// console.log(friends.includes('Talha'))
// console.log(friends.includes('Nayeef'));
// console.log(friends.includes('23'));
// console.log(friends.includes(23));

// if (friends.includes('Ashfi')) {
//     console.log(`You have a friend called ${friends['Talha']}`);
// }


// CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated(so one average score per team).

// A team only wins if it has at least double the average score of the other team.Otherwise, no team wins!



// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores.This function should have three parameters and return a single number(the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them(you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above.Example: Koalas win(30 vs. 13)(use avgDolphins and avgKoalas instead of hard - coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time.Instead, log No team wins... to the console if there is no winner.



// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// //Solution
// const calcAverage = (x, y, z) => (x+y+z)/3;


// let scoreDolphins =calcAverage(44, 23, 71);
// let scoreKoalas =calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas){
//     if(avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     }else if(avgKoalas >= 2 * avgDolphins){
//         console.log(`koalas win (${avgKoalas} vs ${avgDolphins})`);
//     }else{
//         console.log(`No team wins....`)

//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);


//test 2
// scoreDolphins =calcAverage(85, 54, 41);
// scoreKoalas =calcAverage(23, 34, 27);

// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins,scoreKoalas);



// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

//Solution

// const calcTip = bill => (bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2);
// const result = calcTip(400);

// console.log(result);

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// console.log(tips);

// const totals = [(bills[0] + calcTip(bills[0])), (bills[1] + calcTip(bills[1])), (bills[2] + calcTip(bills[2]))]
// console.log(totals);

const nayeefArray = [
    'Nayeef',
    'Nowfal',
    2025 - 1998,
    'Student',
    ['Talha', 'Ashfi', 'Eraz']
];

const nayeef = {
    firstName: 'Nayeef',
    lastName: 'Nowfal',
    age: 2025 - 1998,
    job: 'Student',
    friends: ['Talha', 'Ashfi', 'Eraz']
};

console.log(nayeef);
console.log(nayeef.lastName);

const nameKey = 'Name';
console.log(nayeef['first' + nameKey]);
console.log(nayeef['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Nayeef? Choose between firstName, lastName, age, job, and friends');
if (nayeef[interestedIn]) {
    console.log(nayeef[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

nayeef.location = 'Rampura';
nayeef['email'] = 'nayeefamn@gmail.com';
console.log(nayeef);

console.log(`${nayeef.firstName} has ${nayeef.friends.length} friends, and his best friend is called ${nayeef.friends[0]}`)
