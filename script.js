// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// reserved keywords
// const interface = 'audio';
// const private= 534;


function logger() {
    console.log('My name is Nayeef');
}

//calling / running / invoking function

logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const mixJuice = fruitProcessor(5, 3);
console.log(mixJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);