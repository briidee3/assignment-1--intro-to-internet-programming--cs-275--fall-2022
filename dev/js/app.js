window.onload = () => {
    
    let matrix = document.getElementById(`initial`);
    let content = ``;

    let input = parseInt(window.prompt(`What size should the matrix be?`));

    let mainArray = new Array(input);
    console.log(`Array size is ${input.length}`);

    content = `<table>`;

    for (let i = 0; i < mainArray.length; i++) {
        content += `<tr>`;

        for (let j = 0; j < mainArray.length; j++) {
            content += `<td>${1 + j + parseInt(i*mainArray.length)}</td>`;
        }

        content += `</tr>`;
    }

    content += `</table>`;

    matrix.innerHTML = content;

};
