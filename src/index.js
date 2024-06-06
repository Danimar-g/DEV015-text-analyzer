import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textarea = document.getElementsByName("user-input")[0];
textarea.addEventListener('input', function (e) {
    let charactercount = analyzer.getCharacterCount(e.target.value);
    console.log(charactercount);
    document.querySelector('[data-testid="character-count"]').innerHTML = "Caracteres:" + charactercount;
});
textarea.addEventListener('input', function (e) {
    let totalCaracteresSinEspacios = analyzer.getCharacterCountExcludingSpaces(e.target.value);
    console.log(totalCaracteresSinEspacios);
    document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML = "Sin espacio:" + totalCaracteresSinEspacios;
})

textarea.addEventListener('input', function (e) {
    let TotalPalabras = analyzer.getWordCount(e.target.value);
    console.log(TotalPalabras);
    document.querySelector('[data-testid="word-count"]').innerHTML = "Palabras:" + TotalPalabras;
})

textarea.addEventListener('input', function (e) {
    let Numeros = analyzer.getNumberCount(e.target.value);
    console.log(Numeros);
    document.querySelector('[data-testid="number-count"]').innerHTML = "Números:" + Numeros;
})

textarea.addEventListener('input', function (e) {
    let SumaNumeros = analyzer.getNumberSum(e.target.value);
    console.log(SumaNumeros);
    document.querySelector('[data-testid="number-sum"]').innerHTML = "Suma Números:" + SumaNumeros;
})

textarea.addEventListener('input', function (e) {
    let PromedioLongitud = analyzer.getAverageWordLength(e.target.value);
    console.log(PromedioLongitud);
    document.querySelector('[data-testid="word-length-average"]').innerHTML = "Promedio Longitud:" + PromedioLongitud;
})
const resetbutton = document.getElementById("reset-button")
let userinput = document.getElementsByName("user-input")[0];
function limpiar() {
    userinput.value = ""; //limpia el contenido del cuadro de texto
    document.querySelector('[data-testid="character-count"]').innerHTML = "Caracteres: ";
    document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML = "Sin espacio: ";
    document.querySelector('[data-testid="word-count"]').innerHTML = "Palabras: ";
    document.querySelector('[data-testid="number-count"]').innerHTML = "Números: ";
    document.querySelector('[data-testid="number-sum"]').innerHTML = "Suma Números: ";
    document.querySelector('[data-testid="word-length-average"]').innerHTML = "Promedio Longitud: ";
}
resetbutton.addEventListener('click', limpiar);