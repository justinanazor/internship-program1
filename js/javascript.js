// var namei = "john doe";
// console.log(namei);
// console.log(namei);
// var man = "Jay";
// console.log(man);

// function clicker() {
//   document.getElementById("btnp").innerHTML = "clicked";
//   alert("wow it worked!");
//   document.getElementById("sbtn").innerHTML = "clicked";
// }

// moverover and mouseout events
// function hv() {
//   document.getElementById("hove").style.color = "pink";
//   document.getElementById("hove").style.backgroundColor = "black";
// }
// function hv1() {
//   document.getElementById("hove").style.color = "black";
//   document.getElementById("hove").style.backgroundColor = "white";
// }

// working with eventlistner directly
// document.getElementById("one").addEventListener("mouseover", function () {
//   document.getElementById("one").style.backgroundColor = "gray";
// });
// document.getElementById("bta").addEventListener("click", function () {
//   document.getElementById("btb").style.display = "none";
// });

function b1() {
  document.getElementById("bta").classList.add("bt1:hover");
  document.getElementById("btb").classList.add("bt2:hover");
  document.getElementById("btc").classList.add("bt3:hover");
  document.getElementById("lor11").style.display = "block";
  document.getElementById("bta").style.backgroundColor = "black";
  document.getElementById("lor22").style.display = "none";
  document.getElementById("btb").style.backgroundColor = "green";
  document.getElementById("lor33").style.display = "none";
  document.getElementById("btc").style.backgroundColor = "green";
}
function b2() {
  document.getElementById("lor11").style.display = "none";
  document.getElementById("bta").style.backgroundColor = "green";
  document.getElementById("lor22").style.display = "block";
  document.getElementById("btb").style.backgroundColor = "black";
  document.getElementById("lor33").style.display = "none";
  document.getElementById("btc").style.backgroundColor = "green";
}
function b3() {
  document.getElementById("lor11").style.display = "none";
  document.getElementById("bta").style.backgroundColor = "green";
  document.getElementById("lor22").style.display = "none";
  document.getElementById("btb").style.backgroundColor = "green";
  document.getElementById("lor33").style.display = "block";
  document.getElementById("btc").style.backgroundColor = "black";
}
