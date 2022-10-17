window.onload = () => {
    let output = document.getElementById(`output`);
    let table2 = document.getElementById(`table2`);
    let content = ``;
    let counter = 1;
    let flip = ``;

    let input = window.prompt(`Tell me the size of your table`, 20);
    // error message if <=1
    while (input <=1){
         input = window.prompt(`Wrong input, enter a whole number bigger than 1`, 5);
    }

    input = parseInt(input, 10);
    console.log(typeof input);

    let myNewArray = new Array(input);
    console.log(`The size of your new array is ${myNewArray.length}`);

    content = `<table>`;// first table 

    for(let i = 0; i < myNewArray.length; i++) {
        content += `<tr>`;

        for(let j = 0; j < myNewArray.length; j++) {
            content += `<td>${counter++}</td>`;
        }

        content += `</tr>`;
    }

    content += `</table>`;

    output.innerHTML = content;

    /// the start of the fipped matrix 
    filp = `<table>`;

    for(let i = 0; i < myNewArray.length; i++) {
        filp += `<tr>`;

        for(let j = 0; j < myNewArray.length; j++) {

            let hold =(i*myNewArray.length) + 1 + j;
            if(!((myNewArray.length + ((myNewArray.length -1 )*i) === hold))) {
                hold =(myNewArray.length *myNewArray.length) - hold;
                hold++;
                filp += `<td>${hold}</td>`;
            }
            //numbers that dont change will turn yellow 
            else
            {
                filp += `<td bgcolor =  "yellow" > ${hold}</td>`;
            }
        }

        filp += `</tr>`;
    }

    filp += `</table>`;

    table2.innerHTML = filp;

};