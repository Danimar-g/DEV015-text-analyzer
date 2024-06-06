import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textarea = document.getElementsByName("user-input")[0];
textarea.addEventListener("input", function (e) {
  const charactercount = analyzer.getCharacterCount(e.target.value);
  document.querySelector('[data-testid="character-count"]').innerHTML =
    "Caracteres:" + charactercount;
});
textarea.addEventListener("input", function (e) {
  const totalCaracteresSinEspacios = analyzer.getCharacterCountExcludingSpaces(
    e.target.value
  );
  document.querySelector(
    '[data-testid="character-no-spaces-count"]'
  ).innerHTML = "Sin espacio:" + totalCaracteresSinEspacios;
});

textarea.addEventListener("input", function (e) {
  const TotalPalabras = analyzer.getWordCount(e.target.value);
  document.querySelector('[data-testid="word-count"]').innerHTML =
    "Palabras:" + TotalPalabras;
});

textarea.addEventListener("input", function (e) {
  const Numeros = analyzer.getNumberCount(e.target.value);
  document.querySelector('[data-testid="number-count"]').innerHTML =
    "Números:" + Numeros;
});

textarea.addEventListener("input", function (e) {
  const SumaNumeros = analyzer.getNumberSum(e.target.value);
  document.querySelector('[data-testid="number-sum"]').innerHTML =
    "Suma Números:" + SumaNumeros;
});

textarea.addEventListener("input", function (e) {
  const PromedioLongitud = analyzer.getAverageWordLength(e.target.value);
  document.querySelector('[data-testid="word-length-average"]').innerHTML =
    "Promedio Longitud:" + PromedioLongitud;
});
const resetbutton = document.getElementById("reset-button");
const userinput = document.getElementsByName("user-input")[0];
function limpiar() {
  userinput.value = ""; //limpia el contenido del cuadro de texto
  document.querySelector('[data-testid="character-count"]').innerHTML =
    "Caracteres: ";
  document.querySelector(
    '[data-testid="character-no-spaces-count"]'
  ).innerHTML = "Sin espacio: ";
  document.querySelector('[data-testid="word-count"]').innerHTML = "Palabras: ";
  document.querySelector('[data-testid="number-count"]').innerHTML =
    "Números: ";
  document.querySelector('[data-testid="number-sum"]').innerHTML =
    "Suma Números: ";
  document.querySelector('[data-testid="word-length-average"]').innerHTML =
    "Promedio Longitud: ";
}
resetbutton.addEventListener("click", limpiar);
