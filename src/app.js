/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My father", "His turtle", "My bird"];
  let action = ["ate", "lose", "crushed", "broke"]; //arrays
  let what = ["my homework", "my 4geeks project", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let concatArrElements = `${elements(who)} ${elements(action)} ${elements(
    what //concatenacion
  )} ${elements(when)}`;
  let valorFinal = document.getElementById("excuse");
  valorFinal.innerHTML = concatArrElements; //cambiar h1
};
function elements(arrValue) {
  //funcion para ramdomizar
  return arrValue[Math.floor(Math.random() * arrValue.length)];
}
