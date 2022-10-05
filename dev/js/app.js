let enteredInteger = prompt(`What size is your square matrix?`);
let afterParse = parseInt(parseFloat(enteredInteger));

if (isNaN(afterParse)){
    alert(`The input is invalid`);
}
else if (afterParse <= 0){
    alert(`The input is less than 1`);
}
else if (Number.isInteger(afterParse)){
    alert(`The input is not an integer`);
}