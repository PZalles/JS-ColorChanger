const btnOrange = document.querySelector('.orange');
const btnGreen = document.querySelector('.green');
const btnBlue = document.querySelector('.blue');
const btnYellow = document.querySelector('.yellow');
const btnRed = document.querySelector('.red');

function changeColor() {
    // const selectedColor = this.className;
    // document.body.className = selectedColor;
    document.body.className = this.className;
}

btnOrange.addEventListener('click', changeColor);
btnGreen.addEventListener('click', changeColor);
btnBlue.addEventListener('click', changeColor);
btnYellow.addEventListener('click', changeColor);
btnRed.addEventListener('click', changeColor);