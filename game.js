/*Variables globales */
let adivinar;
const palabras =['COMPUTADORA','CERRO','PATO','LAGO','MOTOCICLETA','TELEFONO','BICICLETA','ALGARROBA','PINO','PAJARO','CRIPTOMONEDA','PESO','SILLAS','PLANTA','TANQUE',"MUÑECO",'COCINA','PLAZA','CANCHA','BOTELLA','CIGARRILLO','ENCENDEDOR','AUTOMOVIL','ÑOQUIS','MILANESA','MATE','MANZANA', 'CERVEZA', 'CORTINA', 'KIWI', 'PELOTA', 'MONEDA', 'PERRO', 'GATO', 'NIÑO', 'ARGENTINA', 'LIBRO', 'TELEVISION'];
const playButt = id('play');
const letraButt = document.querySelectorAll('#letras button');
let cantErrores = 0;
let cantAciertos = 0;
const imag = id('imagen');
const overLay = id('overLay');
const varResult = '';

/**Funcion para iniciar juego */
playButt.addEventListener('click',iniciarJuego);
function iniciarJuego(event) {
    imag.src = 'img/sinerror1.png';
    playButt.disabled = true;
    for (let i = 0; i < letraButt.length; i++) {
        letraButt[i].disabled = false;
    }
    id('gameover').innerHTML= '';
    cantAciertos = 0;
    cantErrores = 0;
    const mostrarPalabra = id('stringAdvinar');
    mostrarPalabra.innerHTML = '';

    const cantidadPalabras = palabras.length;
    const palabraAlAzar = obtenerNalAzar(0, cantidadPalabras);
    adivinar = palabras[palabraAlAzar];
    console.log(adivinar);
    const cantidadDeLetras = adivinar.length;
    for (let i = 0; i < cantidadDeLetras; i++) {
        const span = document.createElement('span');
        mostrarPalabra.appendChild(span);
    }
    return adivinar;
}
for (let i = 0; i < letraButt.length; i++) {
    letraButt[i].addEventListener('click', clickLetras)
    
}
/*Funcion para los botones con letras */
function clickLetras(event) {
    const spans = document.querySelectorAll('#stringAdvinar span');
    const letraButt = event.target;
    letraButt.disabled = true;
    const letra = letraButt.innerHTML;
    const palabrilla = adivinar;
    let acierto = false; 
    for (let i = 0; i < palabrilla.length; i++) {
        if (letra == palabrilla[i]) {
           
            spans[i].innerHTML = letra;
            cantAciertos++;
            acierto = true;
        }

    }


    if (acierto == false) {
        cantErrores++;
        const cambio = `img/error${cantErrores}.png`;
        
        imag.src = cambio;
    }else if (cantAciertos == palabrilla.length){
    }

    if(cantErrores == 7){
        id('gameover').innerHTML = "Perdiste!, la palabra era "+palabrilla;

        gameOver();
        mostrarResultado()
    }else if (cantAciertos == palabrilla.length){
        id('gameover').innerHTML = "GANASTEEEEE!!!!!!!!";

        gameOver();
        mostrarResultado()
    }

    
    console.log(acierto);
}

function gameOver() {
    for (let i = 0; i < letraButt.length; i++) {
        letraButt[i].disabled = true;
    }

    playButt.disabled = false;
    
}
gameOver();