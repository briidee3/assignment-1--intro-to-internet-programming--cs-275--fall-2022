window.onload = () => {
    let output = document.getElementById(`output`);
    let content = ``;
    let counter = 1;


let input =  window.prompt(`Insert a Number Here`);
input = parseInt(input, 10);
console.log(typeof input);
if (input < 2) {
    alert(`Cannot use any number less than 2. Retry.`)
} else if (isNaN(input) === true) {
    alert(`The input is invalid. Retry.`)
}

let newArray = new Array(input);
console.log(`This is the size of your array: ${newArray.length}`)

content = `<table>`;

    for(let i = 0; i < newArray.length; i++) {
        content += `<tr>`;

        for(let j = 0; j < newArray.length; j++) {
            content += `<td>${counter++}</td>`;
        }

        content += `</tr>`;
    }

    content += `</table>`;

    output.innerHTML = content;


    content = `<table>`;

    for(let i = 0; i < newArray.length; i++) {
        content += `<tr>`;

    for(let j = 0; j < newArray.length; j++) {
        let flipCounter = 1 + j + (i * newArray.length);
        if (!((newArray.length + ((newArray.length - 1) * i)) === flipCounter)) {
            flipCounter = newArray.length * newArray.length - flipCounter;
            flipCounter++;
        }
        content += `<td>${flipCounter}</td>`;
    }

    content += `</tr>`;
}

content += `</table>`;

flipped.innerHTML = content;
};
