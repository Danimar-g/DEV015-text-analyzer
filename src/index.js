import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textarea = document.getElementsByName("user-input")[0];
textarea.addEventListener('keyup', function (e) {
    let charactercount = analyzer.getCharacterCount(e.target.value);
    console.log(charactercount);
    document.getElementsByClassName("item1")[0].innerHTML = "Caracteres:" + charactercount;


    
}); 