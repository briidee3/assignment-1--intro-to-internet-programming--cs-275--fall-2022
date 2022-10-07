window.onload = () => {
    let firstArray = document.getElementById(`firstArray`);
    let flippedArray = document.getElementById(`flippedArray`);
    let content = ``;
    let counter = 1;
    // Input prompt to the user
    let input = window.prompt(`What is the size of the matrix?`);
    // Sentinel
    while (input < 2) {
        input = window.prompt(`Incorrect input, please enter a whole number larger than 1.`);
    }

    input = parseInt(input);
    console.log(typeof input);

    let inputArray = new Array(input);

    content = `<table>`;
    // Generating normal array
    for(let i = 0; i < inputArray.length; i++) {
        content += `<tr>`;

        for(let j = 0; j < inputArray.length; j++) {
            content += `<td>${counter++}</td>`;
        }

        content += `</tr>`;
    }

    content += `</table>`;

    firstArray.innerHTML = content;

    //Flipped matrix

    content = `<table>`;

    for(let i = 0; i < inputArray.length; i++) {
        content += `<tr>`;

        for(let j = 0; j < inputArray.length; j++) {
            //Holding a temporary variable for current place in array
            let tempHolder = (i * inputArray.length) + j + 1;

            if(!((inputArray.length + ((inputArray.length - 1) * i) === tempHolder ))) {

                tempHolder = (inputArray.length * inputArray.length) - tempHolder;
                tempHolder++;
            }

            content += `<td>${tempHolder}</td>`;

        }

        content += `</tr>`;
    }

    content += `</table>`;

    flippedArray.innerHTML = content;






};
