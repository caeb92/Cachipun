
var score = 0;

var sound1 = new Audio();
sound1.src = "1.mp3";
var sound2 = new Audio();
sound2.src = "2.mp3";

function Suma(){
	score = score + 10;
	document.getElementById("SCORE").innerHTML = "Puntaje: "+score;
}
function Restar(){
	score = score - 5;
	document.getElementById("SCORE").innerHTML = "Puntaje: "+score;
}
function Ganar(){
	sound1.play();
	document.getElementById("p1").innerHTML = "Ganaste!!!";
}
function Perder(){
	sound2.play();
	document.getElementById("p1").innerHTML = "Perdiste!!!";
}
function Empatar(){
	document.getElementById("p1").innerHTML = "Es un empate!!!";
}



//USUARIO ELIGE PIEDRA
function f1(){
	var piedra = 1,papel = 2, tijera = 3,user = 0, pc = Math.floor(Math.random() * 3) +1;

	if((user = 1) && (pc == piedra))//EMPATE
	{
		Empatar();
	}
	if((user = 1) && (pc == papel))//PERDER
	{
		Restar();
		Perder();
	}
	if((user = 1) && (pc == tijera))//GANAR
	{
		Suma();
		Ganar();
	}
}
//USUARIO ELIGE PAPEL
function f2(){
	var piedra = 1,papel = 2, tijera = 3,user = 0, pc = Math.floor(Math.random() * 3) +1;

	if((user = 2) && (pc == piedra))
	{
		Suma();
		Ganar();
	}
	if((user = 2) && (pc == papel))
	{
		Empatar();
	}
	if((user = 2) && (pc == tijera))
	{
		Restar();
		Perder();
	}
}
//USUARIO ELIGE TIJERA
function f3(){
	var piedra = 1,papel = 2, tijera = 3,user = 0, pc = Math.floor(Math.random() * 3) +1;

	if((user = 3) && (pc == piedra))
	{
		Restar();
		Perder();
	}
	if((user = 3) && (pc == papel))
	{
		Suma();
		Ganar();
	}
	if((user = 3) && (pc == tijera))
	{
		Empatar();
	}
}
