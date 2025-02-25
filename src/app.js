import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
//declaracion de arrays card
let num = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
let card  = ['♠','♥','♦','♣'];

function cardAleatoria(){
  let numAleatorio = num[Math.floor(Math.random() * num.length)];
  let cardAleatorio = card[Math.floor(Math.random() * card.length)];

  let carta = document.getElementById("cardGenerador"); // carta vacia html en div
  let paloTop = document.getElementById("palo-superior"); // palo superior izquierda en html
  let paloInferior = document.getElementById("palo-inferior"); // palo inferior derecha en html
  let numero = document.getElementById("numero"); // numero de la carta en html

  // condicion para agrupar palos rojos y negros
  if (cardAleatorio ==='♥' || cardAleatorio === '♦'){
    carta.className= "palos-rojos" // muestra rojos
  } else{
    carta.className= "cardGenerador" // y sino son negros (el resto)
  };
  //asignar funcion aleatorio en la carta html
  numero.innerHTML = numAleatorio;
  paloTop.innerHTML = cardAleatorio;
  paloInferior.innerHTML = cardAleatorio;
};
 cardAleatoria();





 /*
   let cardresultado = `${cardAleatorio} ${numAleatorio}`;
   document.getElementById("cardGenerador").style.background = '#000000';
   document.getElementById("cardGenerador").innerHTML = cardresultado;
   */
};
