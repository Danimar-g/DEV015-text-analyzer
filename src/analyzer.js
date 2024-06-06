const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordCount = text.trim().split(/\s+/);
    if (wordCount[0].length === 0) {
      return 0;
    }
    return wordCount.length;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const puntuación = /[.,;:!¿?¡()"¨¨\]{}<>'\-_]/g;
    const nuevoTexto = text.replace(puntuación, "");
    return nuevoTexto.replace(/\s+/g, "").length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const TotalPalabras = text.split(" ");
    const TotalCaracteres = text.replace(/\s+/g, "").length;
    const Promedio = TotalCaracteres / TotalPalabras.length;
    return Promedio.toFixed(2);
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    return text.match(/\b\d+(\.\d+)?\b/g).length;
  },
  getNumberSum: (text) => {
    const regex = /\b\d+(\.\d+)?\b/g;
    const numeros = text.match(regex);
    let suma = 0;
    if (numeros) {
      for (let i = 0; i < numeros.length; i++) {
        suma += Number(numeros[i]);
      }
    }
    return suma;
  },
};

export default analyzer;
