function desabilitarBotonesColores(){
    const $botonVerde = document.querySelector('.verde');
    const $botonRojo = document.querySelector('.rojo');
    const $botonAmarillo = document.querySelector('.amarillo');
    const $botonAzul = document.querySelector('.azul');

    $botonVerde.disabled = true;
    $botonRojo.disabled = true;
    $botonAmarillo.disabled = true;
    $botonAzul.disabled = true;
}

function habilitarBotonesColores(){
    const $botonVerde = document.querySelector('.verde');
    const $botonRojo = document.querySelector('.rojo');
    const $botonAmarillo = document.querySelector('.amarillo');
    const $botonAzul = document.querySelector('.azul');

    $botonVerde.disabled = false;
    $botonRojo.disabled = false;
    $botonAmarillo.disabled = false;
    $botonAzul.disabled = false;
}

function mostrarTitulo(titulo){
    const $tituloHacer = document.querySelector('#titulo-hacer');
    $tituloHacer.innerText = titulo;
}

function ocultarBotonJugar(){
    const botonJugar = document.querySelector('#boton-jugar'); 
    botonJugar.className = 'oculto';
}

function mostrarBotonJugar(){
    const botonJugar = document.querySelector('#boton-jugar'); 
    botonJugar.className = '';
}

function devolverColorRandom(){
    const objetoColores = {
        1: 'verde',
        2: 'rojo',
        3: 'amarillo',
        4: 'azul'
    };

    let numeroRandom = Math.floor((Math.random() * (5-1))+1);
    return objetoColores[numeroRandom];
}


function mostrarColor(color){
    const coloresClaros = {
        'verde': 'rgb(0, 255, 0)',
        'rojo': 'rgb(255, 0, 0)',
        'amarillo': 'rgb(255, 255, 0)',
        'azul': 'rgb(0, 0, 255)'
    };
    reproducirSonido(color);
    const $color = document.querySelector(`.${color}`);
    $color.style.backgroundColor = coloresClaros[color];
    

    setTimeout(function(){
        $color.style.backgroundColor = '';
    },500);
}

function reproducirSonido(color){
    const coloresSonidos ={
        'verde': 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3',
        'rojo': 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',
        'amarillo': 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3',
        'azul': 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'
    };

    const sonido = new Audio(coloresSonidos[color]);
    sonido.play();
}

function clickColor(color){
    reproducirSonido(color);
    contadorColoresClickeados++;
    coloresUsuario.push(color);
    
    if(compararColores(coloresRandom, coloresUsuario)){
        if(puntuacion === contadorColoresClickeados){
            mostrarPuntuacion(puntuacion);
            $botonJugar.onclick();
            
        }
    }else{
        resetearValores();
        juegoTerminado();
    }
}

function compararColores(coloresRandom, coloresUsuario){
    if(coloresRandom[coloresUsuario.length-1] !== coloresUsuario[coloresUsuario.length-1]){
        return false;
    }
    return true;
}

function mostrarPuntuacion(puntuacion){
    $puntuacion = document.querySelector('#puntuacion');
    $puntuacion.innerText = `Puntuación: ${puntuacion}`;
}


function resetearValores(){
    coloresRandom = [];
    coloresUsuario = [];
    if (puntuacion > mejorPuntuacion){
        mejorPuntuacion = puntuacion - 1;
        mostrarMejorPuntuacion(mejorPuntuacion);
    }
    puntuacion = 0;
    contadorColoresClickeados = 0;
    mostrarPuntuacion(puntuacion);
    desabilitarBotonesColores();
}

function mostrarMejorPuntuacion(mejorPuntuacion){
    $mejorPuntuacion = document.querySelector('#mejor-puntuacion');
    $mejorPuntuacion.innerText = `Mejor Puntuacion: ${mejorPuntuacion}`;
}

function juegoTerminado(){
    const sonidoGameOver = new Audio('sonidos/videogamefin.mp3');
    sonidoGameOver.play();
    mostrarBotonJugar();
    mostrarTitulo('Game Over');
}






