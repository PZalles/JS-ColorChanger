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
// btnOrange.addEventListener('click', function () {
//     document.body.className = "orange";
// });
// btnGreen.addEventListener('click', function () {
//     document.body.className = "green";
// });
// btnBlue.addEventListener('click', function () {
//     document.body.className = "blue";
// });
// btnYellow.addEventListener('click', function () {
//     document.body.className = "yellow";
// });
// btnRed.addEventListener('click', function () {
//     document.body.className = "red";
// });
btnOrange.addEventListener('click', changeColor);
btnGreen.addEventListener('click', changeColor);
btnBlue.addEventListener('click', changeColor);
btnYellow.addEventListener('click', changeColor);
btnRed.addEventListener('click', changeColor);