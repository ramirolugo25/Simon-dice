function probarCompararColores(){
    console.assert(compararColores(['rojo','verde'], ['rojo','verde']) === true,
    'compararColores falló con dos arreglos validos');

    console.assert(compararColores(['rojo', 'azul'], ['rojo', 'verde']) === false,
    'compararColores no valido que los colores sean iguales');
}

probarCompararColores();