window.onload = () => {
    let main = document.queryCommandIndeterm(`main`);
    let myArray = new Array(20);
    main.innerHTML = `<p>The size of my array is ${myArray.length}.</p>`;
};

let input = window.prompt(`Insert a number here`);

if (input < 2) {
    alert(`Integers less than 2 are not allowed. Please try again.`)
} else if (isNaN(input) == true) {
    alert(`Input invalid. Please try again.`)
}
