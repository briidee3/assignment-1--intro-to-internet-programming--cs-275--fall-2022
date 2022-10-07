
window.onload = () => {
    alert(`JavaScript Works`);
};
window.onload = () => { 
    let output = document.getElementById(`output`);
    let content = ``;
    let counter = 1;

let input =  window.prompt(`Input Number`);
input = parseInt(input, 10);
console.log(typeof input);
if (input < 2) {
     alert(`Cannot use numbers less than 2`)
} else if (isNaN(input) === true) {
     alert(`Retry.`)
}

let arrayOne = new Array(input);
console.log(`Array Size: ${arrayOne.length}`)

content = `<table>`;

    for(let i = 0; i < arrayOne.length; i++) {
         content += `<tr>`;

    for(let j = 0; j < arrayOne.length; j++) {
        content += `<td>${counter++}</td>`;
    }
    
    content += `</tr>`;
}

content += `</table>`;

output.innerHTML = content;

content = `<table>`;

for(let i = 0; i < arrayOne.length; i++) {
    content += `<tr>`;

for(let j = 0; j < arrayOne.length; j++) {
    revContent += `<td>${revCounter--}</td>`;
    let revCounter = 1 + j + (i * arrayOne.length);
        if (!((arrayOne.length + ((arrayOnelength - 1) * i)) === revCounter)) {
            revCounter = arrayOne.length * arrayOne.length - revCounter;
            revCounter++;
        }
        content += `<td>${revCounter}</td>`;
}

content += `</tr>`;
}

content += `</table>`;

revoutput.innerHTML = content;
}
