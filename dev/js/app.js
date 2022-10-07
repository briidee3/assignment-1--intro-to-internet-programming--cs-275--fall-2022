/**
 * Basmalah Asad
 * Assignment 1
 * 10/06/2022
 */

 let repeat = false;


// Takes input from user
let enteredInteger = prompt(`What size is your square matrix?`);
let afterParse = parseInt(parseFloat(enteredInteger));

if (isNaN(afterParse) || !Number.isInteger(afterParse)){
    alert(`The input is invalid, please enter a different input:`);
    repeat = true;
}
else if (afterParse < 1 ){
    alert(`The input is less than 1, please enter a different input:`);
    repeat = true;
}