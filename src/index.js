import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textarea = document.getElementsByName("user-input")[0];
textarea.addEventListener('keyup', function (e) {
    let charactercount = analyzer.getCharacterCount(e.target.value);
    console.log(charactercount);
    document.getElementsByClassName("item1")[0].innerHTML = "Caracteres:" + charactercount;
});
textarea.addEventListener('keyup', function (e) {
    let totalCaracteresSinEspacios = analyzer.getCharacterCountExcludingSpaces(e.target.value);
    console.log(totalCaracteresSinEspacios);
    document.getElementsByClassName("item2")[0].innerHTML = "Sin espacio:" + totalCaracteresSinEspacios;
})

textarea.addEventListener('keyup', function (e) {
    let TotalPalabras = analyzer.getWordCount(e.target.value);
    console.log(TotalPalabras);
    document.getElementsByClassName("item3")[0].innerHTML = "Palabras:" + TotalPalabras;
})

textarea.addEventListener('keyup', function (e) {
    let Numeros = analyzer.getNumberCount(e.target.value);
    console.log(Numeros);
    document.getElementsByClassName("item4")[0].innerHTML = "Números:" + Numeros;
})

textarea.addEventListener('keyup', function (e) {
    let SumaNumeros = analyzer.getNumberSum(e.target.value);
    console.log(SumaNumeros);
    document.getElementsByClassName("item5")[0].innerHTML = "Suma Números:" + SumaNumeros;
})

textarea.addEventListener('keyup', function (e) {
    let PromedioLongitud = analyzer.getAverageWordLength(e.target.value);
    console.log(PromedioLongitud);
    document.getElementsByClassName("item6")[0].innerHTML = "Promedio Longitud:" + PromedioLongitud;
})
const resetbutton = document.getElementById("reset-button")
let userinput = document.getElementsByName("user-input")[0];
function limpiar() {
    userinput.value = ""; //limpia el contenido del cuadro de texto
}
resetbutton.addEventListener('click', limpiar);

//function hola(nombre) { console.log("hola " + nombre); }
const hola = (nombre) =>{ console.log("hola " + nombre); };
hola("daniela"); 
hola ("pablo");

