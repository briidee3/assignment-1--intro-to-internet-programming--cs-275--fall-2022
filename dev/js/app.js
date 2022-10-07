window.onload = () => {
    let retry = false;
    let output = document.getElementById(`output`);
    let reverse = document.getElementById(`reverse`);
    let content = ``;
    let counter = 1;

    let input = window.prompt(`Insert a number here`);
    let parsed = parseInt(parseFloat(input));
    if (input < 2) {
        alert(`Integers less than 2 are not allowed. Please try again.`);
        retry = true;
    } else if (isNaN(parsed) === true) {
        alert(`Input invalid. Please try again.`);
        retry = true;
    }

    while (retry) {
        input = window.prompt(`Insert a number here`);
        parsed = parseInt(parseFloat(input));
        if (input < 2) {
            alert(`Integers less than 2 are not allowed. Please try again.`);
            retry = true;
        } else if (isNaN(parsed) === true) {
            alert(`Input invalid. Please try again.`);
            retry = true;
        } else {
            retry = false;
        }
    }
    let myArray = new Array(parsed);
    console.log(`the size of my new array is ${myArray.length}`);
    let revcounter = Math.pow(myArray.length, 2);

    content = `<h2>Original Matrix</h2>`;
    content += `<table>`;
    for (let i = 0; i < myArray.length; i++) {
        content += `<tr>`;
        for (let j = 0; j < myArray.length; j++) {
            content += `<td>${counter++}</td>`;            
        }
        content += '</tr>'
    }
    content += `</table>`;
    output.innerHTML = content;

    content = `<h2>Reversed Matrix</h2>`;
    content += `<table>`;
    for (let i = 0; i < myArray.length; i++) {
        content += `<tr>`;
        for (let j = 0; j < myArray.length; j++) {
            content += `<td>${revcounter--}</td>`;            
        }
        content += '</tr>'
    }
    content += `</table>`;
    reverse.innerHTML = content;
}
