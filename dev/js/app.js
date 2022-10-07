window.onload = () => {
    let firstMatrix = document.getElementById(`normal`);
    let secondMatrix = document.getElementById(`flipped`);
    let content = ``;
    let counter = 1;

    let input = window.prompt(`Tell me the size of your table`, 20);
    input = parseInt(input, 10);
    console.log(typeof input);

    let myMatrix = new Array(input);
    console.log(`The size of your new array is ${myMatrix.length}`);

    content = `<table>`;

    for(let i = 0; i < myMatrix.length; i++) {
        content += `<tr>`;

        for(let j = 0; j < myMatrix.length; j++) {
            content += `<td>${counter++}</td>`;
        }

        content += `</tr>`;
    }

    content += `</table>`;

    firstMatrix.innerHTML = content;

    
    
    content = `<table>`;

    for(let i = 0; i < myMatrix.length; i++) {
        content += `<tr>`;

        for(let j = 0; j < myMatrix.length; j++) {
            
            let flipMatrix = (1 + j + (i * myMatrix.length)); 
            
            if (!((myMatrix.length + ((myMatrix.length - 1) * i)) === flipMatrix)) {
                flipMatrix = ((myMatrix.length * myMatrix.length) - flipMatrix);
                
                flipMatrix++;
            }
            
            
            content += `<td>${flipMatrix}</td>`;
            
        }

        content += `</tr>`;
    }

    content += `</table>`;

    secondMatrix.innerHTML = content;
};