window.onload = () => {
    alert(`JavaScript Works`);
};

let input =  window.prompt(`Insert a Number Here`);
input = parseInt(input, 10);
console.log(typeof input);

let newArray = new Array(input);
console.log(`This is the size of your array: ${newArray.length}`)

    content = `<table>`;

    for(let i = 0; i < newArray.length; i++) {
        content += '<tr>';

    }