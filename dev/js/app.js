window.onload = () => {
    let table = document.getElementById(`table`);
    let table2 = document.getElementById(`table2`);
    let counter = 1;

    let input = window.prompt(`What is the size of your table`, 2);
    // error message if <=1
    while (input <= 1) {
        input = window.prompt(`Wrong input, enter a whole number bigger than 1`, 5);
    }

    input = parseInt(input, 10);
    let myNewArray = new Array(input);
    let content = `<table>`;// first table
    for (let i = 0; i < myNewArray.length; i++) {
        content += `<tr>`;
        for (let j = 0; j < myNewArray.length; j++) {
        //calculate the number for current cell
            content += `<td>${counter++}</td>`;
        }
        content += `</tr>`;
    }
    content += `</table>`;
    table.innerHTML = content;

    // Create the second table
    let content2 = `<table>`;
    // Loop through the rows in reverse order
    for (let i = 0; i < myNewArray.length; i++) {
        content2 += `<tr>`;
        for (let j = 0; j < myNewArray.length; j++) {
            let row = i;
            let col = j;
            // If the current cell is on the diagonal, use the original
            if (i + j !== myNewArray.length - 1) {
                row = myNewArray.length - 1 - i;
                col = myNewArray.length - 1 - j;
            }
            let number = (myNewArray.length * row) + col + 1;
            if (i + j === myNewArray.length - 1) {
                content2 += `<td class="yellow">${number}</td>`;
            } else {
                content2 += `<td>${number}</td>`;
            }
        }
        // Close the current row
        content2 += `</tr>`;
    }
    content2 += `</table>`;
    table2.innerHTML = content2;
};
