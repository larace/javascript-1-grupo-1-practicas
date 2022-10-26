/*Variables 1*/
let array = [5, 8, 20, -7, -10, -15, -20, -20, -2, -2, -50]
let mayor = 0

/*Variables 2*/
let palabra = "Ana"
let booleano = 1

/*Variables 3*/
let matriz = [[1,0,0], 
              [0,1,1], 
              [0,1,0]];
let cont = 0

/*Variables 4*/
let duplicados = []
const array2 = [...array].sort();

/*Variables 5*/
const contador = 7;
let asterisco = "";

/*Ejercicio uno*/
function mayores(lista1, num1) {
for (let i = 0; i < lista1.length; i++) {
    if (lista1[i] > num1) {
        num1 = lista1[i];
    } if ( i == 0) {
        num1 = lista1[i]
    }
}
console.log("El numero mayor es " + num1) 
}

/*Ejercicio 2*/
function palindromo(palabra, booleano) {
palabra = palabra.toLowerCase()
let j = palabra.length-1
for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] != palabra[j]) {
        booleano = 0
    }
    j--
}
if (booleano == 1) {
    console.log("la palabra "+palabra+" es palindromo")
} else {
    console.log("la palabra "+palabra+" no es palindromo")
}
}

/*Ejercicio 3*/
function ceros(matriz, cont) {
for (let x = 0; x < matriz.length; x++){ 
    for (let y = 0; y < matriz.length; y++){
    if (matriz[x][y] == 0) {
        cont ++
    }
    }
}
console.log ("la cantidad de 0's es de "+cont)
}

/*Ejercicio 4*/
function dobles(lista2, duplicados) {
for (let i = 0; i < lista2.length; i++) {
    if (lista2[i + 1 ] === lista2[i]) {
        repetido = 1
        duplicados.push(lista2[i])
        console.log(duplicados)
    }
} if (duplicados.length == 0){
    console.log("No se encontraron números repetidos en la lista de números recibida")
}
}

/*Ejercicio 5*/
function piramide(cont, asterisco){    
    for(let i = 0; i <= cont-1; i++){
      asterisco += "*";
      console.log(asterisco); 
    }
}

mayores(array, mayor)
palindromo(palabra, booleano)
ceros(matriz, cont)
dobles(array2, duplicados)
piramide(contador, asterisco)