const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9') // Função passando como parametro a expressão regular
console.log('Methodos da RegExp...')
console.log(regexNove.test(texto)) // TEST retorna true ou false passando como parametro um texto
console.log(regexNove.exec(texto))// EXEC executa a expressão regular, mostrando se encontrou ou não.

const regexLetras = /[a-f]/g
console.log('Metodos da string...')
console.log(texto.match(regexLetras)) // MATCH 
console.log(texto.search(regexLetras)) // SEARCH retorna o indece do primeiro elemento que foi encontrado a partir do regex que foi passado.
console.log(texto.replace(regexLetras,'Achei')) // REPLACE quando quero substituir um elemento que encontrei na regex por outro texto, passamos como parametro a regex e depois o texto que quero substituir
console.log(texto.split(regexLetras)) // SPLIT Separar um texto e gerar um array