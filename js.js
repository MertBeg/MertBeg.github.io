function andgate() {
  var x = Number(document.getElementById("x").value);
  var y = Number(document.getElementById("y").value);
  var z = x && y;
  document.getElementById("and").innerHTML = z;
}
function orgate() {
  var x = Number(document.getElementById("x1").value);
  var y = Number(document.getElementById("y1").value);
  var z = x || y;
  document.getElementById("or").innerHTML = z;
}
function biandgate() {
  var x = Number(document.getElementById("x2").value);
  var y = Number(document.getElementById("y2").value);
  var z = x & y;
  document.getElementById("biandgate").innerHTML = z;
}
function biorgate() {
  var x = Number(document.getElementById("x3").value);
  var y = Number(document.getElementById("y3").value);
  var z = x | y;
  document.getElementById("biorgate").innerHTML = z;
}
function notgate() {
  var x = Number(document.getElementById("x4").value);
  var z = ~x;
  document.getElementById("binotgate").innerHTML = z;
}
function biorgate() {
  var x = Number(document.getElementById("x7").value);
  var y = Number(document.getElementById("y7").value);
  var z = x ^ y;
  document.getElementById("bixorgate").innerHTML = z;
}
function leftshift() {
  var x = Number(document.getElementById("x8").value);
  var y = 1;
  var z = x << y;
}
function rightshift() {
  var x = Number(document.getElementById("x9").value);
  var y = 1;
  var z = x >> y;
  document.getElementById("rightshift").innerHTML = z;
}
function unsignedrightshift() {
  var x = Number(document.getElementById("x10").value);
  var y = 1;
  var z = x >>> y;
  document.getElementById("unsignedrightshift").innerHTML = z;
}

function Combining() {
  var x = document.getElementById("x5").value;
  var y = document.getElementById("y5").value;
  var z = x + " " + y;
  document.getElementById("com").innerHTML = z;
}
function er1(){
  alert("Gönderildi");
}