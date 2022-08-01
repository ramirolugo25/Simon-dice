var coloresRandom = [];
var coloresUsuario = [];
var puntuacion = 0;
var mejorPuntuacion = 0;
var contadorColoresClickeados = 0;
desabilitarBotonesColores();

const $botonJugar = document.querySelector('#boton-jugar');


$botonJugar.onclick = function(){

desabilitarBotonesColores();
mostrarTitulo('Mirar!');
ocultarBotonJugar();

let reloj = 1000;

coloresRandom.push(devolverColorRandom());
coloresUsuario = [];
puntuacion++;
contadorColoresClickeados = 0;

for(let i=0; i<coloresRandom.length; i++){
    
    setTimeout(function(){
        mostrarColor(coloresRandom[i]);
    },reloj);
    reloj += 1000;
}
setTimeout(function(){
    habilitarBotonesColores();
    mostrarTitulo('Jugar!');
},reloj);

}

const $botonVerde = document.querySelector('.verde');
const $botonRojo = document.querySelector('.rojo');
const $botonAmarillo = document.querySelector('.amarillo');
const $botonAzul = document.querySelector('.azul');


$botonVerde.onclick = function(){
    clickColor('verde');   
}

$botonRojo.onclick = function(){
    clickColor('rojo');
}

$botonAmarillo.onclick = function(){
    clickColor('amarillo');
}

$botonAzul.onclick = function(){
    clickColor('azul');
}