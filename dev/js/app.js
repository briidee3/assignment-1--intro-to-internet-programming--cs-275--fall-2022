/*
    Assignment 1 - Intro to Internet Programming
    Bri D'Urso
    11-28-22
*/

window.onload = () => {

    // set up initial variables
    // create div to display matrices
    let matrixDiv = document.querySelector(`body`).appendChild(document.createElement(`div`));
    matrixDiv.setAttribute(`class`, `matrix`);
    // variable for use building the matrix in HTML via JS
    let content = ``;

    // get input for i (i = len)
    let len = parseInt(window.prompt(`What size should the matrix be? (integer greater than 0)`));
    // account for exceptions in user input
    while (len < 1 || len === null || isNaN(len))
        len = parseInt(
            window.prompt(`Invalid input:\nPlease enter a valid size for the matrix (integer greater than 0)`)
        );
    console.log(`Length and width of matrix: ${len}`);

    // set up matrix array to be of length "len"
    // only a 1D array for now; will become 2D array when populated with arbitrary values (1 thru i*i)
    let matrix = new Array(len);

    /* the variable "halfwayPoint" is for use in flipping matrix.
    linear (1D) representation of a halfway index in the matrix
    ("linear" meaning rather than 0,0 to i,i , it refers to 0 to [i*i - 1]).
    since it's an integer, anything with a decimal only equates to the integer part without the decimal;
    thus, if the calculated number is, for example, 0.6, parseInt(0.6) = 0. However,
    if 0.5 is added to that, then it "rounds up", just like in standard arithmetic (ie. 0.6 is approx. 1)
    therefore, 0.6 + 0.5 = 1.1, and so parseInt would equate it to 1.
    by taking advantage of this, it is unnecessary to account for whether or not "i" is even or odd, as it will
    function as intended thanks to this; therefore, only one variable is necessary for the halfway point
    (as opposed to 2; one for even, one for odd) */
    let halfwayPoint = parseInt((len * len / 2.0) + 0.5);


    /* populate the initial matrix for the current column and add it to content*/
    // turned into a function for ease of use
    let initializeMatrix = (i, j) => {
        // populate the matrix with arbitrary data
        // so that there's a visual confirmation once it is flipped
        matrix[i][j] = 1 + j + (i*len);
        // add column in html to display the 2D array as a matrix
        content += `<td>${matrix[i][j]}</td>`;
    };


    /* flip matrix and add it to content */
    // turned into a function for ease of use
    let flipMatrix = (i, j) => {
        // set currVar as default value for now
        let currVar = matrix[i][j];
        // current 1D location in matrix (from 0 to [i*i - 1])
        let currIndex = i * len + j;

        // using this conditional so that the boxes from northeast to southwest corners aren't affected
        if ((len + ((len - 1) * i)) === (currIndex + 1)) {
            // give the current new box the class "unflipped" for CSS to highlight diagonal
            // also, do nothing to currVar here, since the diagonal boxes are to be preserved
            content += `<td class="unflipped">${currVar}</td>`;
        }
        // if it isn't diagonal, do this (flip the matrix)
        else
        {
            // only flip if index is less than the halfway point
            if ((currIndex < halfwayPoint)) {
                // flip the numbers
                matrix[i][j] = matrix[len-i-1][len-j-1];
                matrix[len-i-1][len-j-1] = currVar;
            }
            // set currVar to flipped matrix
            currVar = matrix[i][j];
            // add currVar to the next box in the matrix table
            content += `<td>${currVar}</td>`;
        }
    };


    /* display the given version of the matrix */
    // turned into a function for ease of use
    let displayMatrix = (version) => {
        // create/reset table element for html
        content = `<table>`;

        // loop thru and create rows for initial matrix
        for (let i = 0; i < len; i++) {
            // begin current row
            content += `<tr>`;

            // initialize each element of 'matrix' as an array to make a 2D array
            // only if the current matrix being displayed is the initial one
            if (version === `initial`)
                matrix[i] = new Array(len);

            // loop thru and create and populate columns for initial matrix
            for (let j = 0; j < len; j++) {
                // if the matrix is being initialized, initialize it.
                // otherwise, flip the matrix
                if (version === `initial`)
                    initializeMatrix(i, j);
                else
                    flipMatrix(i, j);
            }

            // close current row with html
            content += `</tr>`;
        }

        // close table
        content += `</table>`;

        // add "content" to the webpage via the matrixDiv div element
        matrixDiv.innerHTML += content;
    };


    // initialize and display initial matrix
    displayMatrix(`initial`);
    // flip and display flipped matrix
    displayMatrix(`final`);

};
