window.onload = () => {
    let output = document.getElementById(`output`);
    let content = ``;
    let counter = 1;


let input =  window.prompt(`Insert a Number Here`);
input = parseInt(input, 10);
console.log(typeof input);

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
};
