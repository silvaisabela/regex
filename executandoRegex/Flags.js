// g - global
// i - ignore case

const texto = 'Carlos assinou o abaixo-assinado';

console.log(texto.match(/C|ab/));
console.log(texto.match(/c|ab/i)); // ignora letras maiusculas e minusculas 
console.log(texto.match(/c|ab/gi)); // g procura de forma global e não para quando acha a primeira ocorrência.