window.onload = () => {

    let output = document.getElementById(`output`);
    let content = ``;
    let counter = 1;

    let input = window.prompt(`Please Enter a whole number for your Matrix`,`No Negatives, no letters please.`);
    input = parseInt(input, 10);
    console.log(typeof input);
    let myNewArray = new Array(input);
    console.log(`The size of the array is ${myNewArray.length}`);

    content = `<table>`;

    for(let i = 0; i < myNewArray.length; i++) {
        content += `<tr>`;

        for(let j = 0; j < myNewArray.length; j++) {
            content += `<td>${counter++}</td>`;
        }

        content += `</tr>`;
    }

    content += `</table>`;

    output.innerHTML = content;
};
