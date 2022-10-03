window.onload = () => {
    alert(`JavaScript Works`);
};

let input = window.prompt(`Insert a number here`);

if (input < 2) {
    alert(`Integers less than 2 are not allowed. Please try again.`)
}
