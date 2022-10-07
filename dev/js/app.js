window.onload = () => {
    // Prompt user for integer value
    let mValue = parseInt(window.prompt(`What size is your square matrix?`));
    while (mValue <= 1 || isNaN(mValue))
    {
        mValue = parseInt(window.prompt(`Incorrect value, please enter an integer value greater than 1`));
    }

    // Initialize variables
    let data = ``;
    let noFlip = document.getElementById(`noFlip`);
    let yesFlip = document.getElementById(`yesFlip`);

    // Array for storing values
    let a = new Array(mValue);
    let length = a.length;

    // noFlip matrix
    data = `<table>`;

    for (let i = 0; i < length; i++) {
        data += `<tr>`;

        for (let j = 0; j < length; j++) {
            data += `<td>${1 + j + (i * length)}</td>`;
        }
        data += `</tr>`;
    }
    data += `</table>`;
    noFlip.innerHTML = data;
    // yesFlip matrix
    data = `<table>`;

    for (let i = 0; i < length; i++) {
        data += `<tr>`;
        for (let j = 0; j < length; j++) {
            let newVal = 1 + j + (i * length);
            // Check if cells are along flip angle, change if not
            if (!((length + ((length - 1) * i)) === newVal)) {
                // Swaps the cell values
                newVal = length * length - newVal;
                newVal++;
            }
            data += `<td>${newVal}</td>`;
        }
        data += `</tr>`;
    }
    data += `</table>`;
    yesFlip.innerHTML = data;
};
