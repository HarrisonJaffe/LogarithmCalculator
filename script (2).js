let x;
function solveLogarithm(b, y) {
  y = document.getElementById("y").value;
  b = document.getElementById("b").value;
  x = b**y;
  let message = document.querySelector("#message");
 
  message.innerHTML = "X = " + x;
};