window.onload = () => {
    let firstArray = document.getElementById(`InputArray`);
    let ReversedArray = document.getElementById(`ReversedArray`);
    let content = ``;
    let index = 1;

    // Input prompt to the user
    let input = window.prompt(`What is the size of the matrix?`);

    // Sentinel for only allowing integer values larger than 1
    while (input < 2) {
        input = window.prompt(`Incorrect input, please enter a whole number larger than 1.`);
    }

    //Verify an integer input
    input = parseInt(input);

    //Initialize input array
    let inputArray = new Array(input);

    // Generating the input matrix, where index is the current location in the table
    // Each for loop will populate each respective row and cell for each column
    content = `<table>`;
    for(let i = 0; i < inputArray.length; i++) {
        content += `<tr>`;

        for(let j = 0; j < inputArray.length; j++) {
            content += `<td>${index++}</td>`;
        }

        content += `</tr>`;
    }

    content += `</table>`;
    //Send out content to the webpage under h2 header
    firstArray.innerHTML = content;

    //Transforming the input array into a 2D array to be prepared for flipping each cell
    let counter = 1;
    for (let i = 0; i < input; i++) {
        inputArray[i] = [];

        for (let j = 0; j < input; j++) {
            inputArray[i][j] = counter;
        }
    }

    //Flipping the matrix

    content = `<table>`;
    //Outer for loop for populating each respective row in the matrix
    for(let i = 0; i < inputArray.length; i++) {
        content += `<tr>`;
        //Inner for loop for each cell in columns
        //Using a temp variable to swap the indexes, and pass over the minor diagonal in the matrix
        for(let j = 0; j < inputArray.length; j++) {
            let temp = inputArray[i][j];
            inputArray[i][j] = inputArray[(input - 1) - j][(input - 1) - i];
            temp = inputArray[(input - 1) - j][(input - 1) - i];

            content += `<td>${temp}</td>`;
        }

        content += `</tr>`;

    }

    content += `</table>`;
    //Send out content to webpage under the h2 header for flipped array
    ReversedArray.innerHTML = content;

};
