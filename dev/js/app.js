/**
 * Basmalah Asad
 * Assignment 1
 * 10/06/2022
 */

 let repeat = false;
 let output = document.getElementById(`output`);
 let content = ``;
 let counter = 1;

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
else{
    repeat=false;
}

// Looping the prompt until a valid input is entered
while(repeat){
    enteredInteger = prompt(`What size is your square matrix?`);
    afterParse = parseInt(parseFloat(enteredInteger));
    if (isNaN(afterParse) || !Number.isInteger(afterParse)){
        alert(`The input is invalid, please enter a different input:`);
        repeat = true;
    }
    else if (afterParse < 1 ){
        alert(`The input is less than 1, please enter a different input:`);
        repeat = true;
    }
    else{
        repeat=false;
    }
}

let arr = new Array(afterParse);
let h = 1; 

// Initialize matrix to fill it with numbers
for(let i = 0; i < arr.length; i++){
    arr[i] = new Array(afterParse);
}

for (let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        arr[i][j]=h++;
    }
}

content = `<table>`;
for(let i = 0; i < arr.length; i++) {
    content += `<tr>`;

    for(let j = 0; j < arr.length; j++) {
        content += `<td>${counter++}</td>`;
    }

    content += `</tr>`;
}
content += `</table>`;

output.innerHTML = content;

let z = arr.length;

function mirrorArray(matrix) {
    let i, j, temp;

    for (i = 0; i < ~~(z / 2); i++) {
        for (j = 0; j < z; j++) {
            if(i+j === z-1){ 
                temp = matrix[i][j];
                matrix[i][j] = temp;
            }
            else{
                temp = matrix[i][j];
                matrix[i][j] = matrix[z - 1 - i][z - 1 - j];
                matrix[z - 1 - i][z - 1 - j] = temp;
            }
        }
    }
}