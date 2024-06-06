const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let wordCount = text.trim().split(/\s+/);
    if (wordCount[0].length === 0){
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
    return nuevoTexto.replace(/\s+/g, '').length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let TotalPalabras = text.split(" ");
    let TotalCaracteres = text.replace(/\s+/g, "").length;
    let Promedio = TotalCaracteres / TotalPalabras.length;
    return Promedio;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    console.log(text.match(/\d+/g));
    return text.match(/\d+/g).length;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    return text.match("/\d+/g").length;
  },
  getNumberSum: (text) => {
    let palabras = text.split(' ');
    let suma = 0;
    palabras.forEach(palabra => {
      if (!isNaN(palabra) && palabra.trim() !== "") {
        suma += parseInt(palabra);
        console.log(suma)
      }
    })
    return suma;
  }
};

export default analyzer;
