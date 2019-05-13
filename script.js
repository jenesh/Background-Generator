var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer: ', _.without(array, 3));

var css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let heading = document.querySelector(".heading");
let button = document.getElementById("random");

//Display current gradient values
function currentGradient () {
	//css.textContent = load.style.background;
	css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

}

//Color picker to change the background
function setGradient() {
	body.style.background = 
	"linear-gradient(to right," +
	color1.value +
	", " +
	color2.value +
	")";

	css.textContent = body.style.background + ";";

	heading.style.cssText = 
	"color: " + 
	color1.value + 
	"; background: linear-gradient(to right, " + 
	color2.value +
	", "+
	color1.value +
	"); border-radius: 50px 5px;";
}

//Random background colors
function randomBg() {

	color1 = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)].toString();
	color2 = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)].toString();

	body.style.background = 
	"linear-gradient(to right, rgb(" +
	color1 +
	"), rgb(" +
	color2 +
	"))";

	color1.value = color1;
	color2.value = color2;

	css.textContent = `linear-gradient(to right, rgb(${color1}), rgb(${color2}))`;
}

//Color inputs to change background
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//On page load displays linear-gradient values
document.addEventListener("DOMContentLoaded", currentGradient);

//Random Background generator
button.addEventListener("click", randomBg);



//Original code
// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// console.log();

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }


// color1.addEventListener("input", setGradient);
// color2.addEventListener("input", setGradient);

