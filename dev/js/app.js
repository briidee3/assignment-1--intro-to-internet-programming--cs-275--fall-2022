window.onload = () => {
    let output = document.getElementById(`output`);
    let reverse = document.getElementById(`reverse`);
    let content = ``;
    let counter = 1;

    let input = window.prompt(`Insert a number here`);
    input = parseInt(input, 10);
    console.log(typeof input);
    if (input < 2) {
        alert(`Integers less than 2 are not allowed. Please try again.`)
    } else if (isNaN(input) === true) {
        alert(`Input invalid. Please try again.`)
    }

    let myArray = new Array(input);
    console.log(`the size of my new array is ${myArray.length}`);
    let revcounter = Math.pow(myArray.length, 2);

    content = `<table>`;
    for (let i = 0; i < myArray.length; i++) {
        content += `<tr>`;
        for (let j = 0; j < myArray.length; j++) {
            content += `<td>${counter++}</td>`;            
        }
        content += '</tr>'
    }
    content += `</table>`;
    output.innerHTML = content;

    content = `<table>`;
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
