function facto(_a) {
    let contador = 1 

    for (let i = 1; i <= _a; i++){
        contador *= i;
}
console.log(`el factorial es ${contador}`)
}

facto(5)

function facRecur(numeroDado) {
    if ( numeroDado == 0) {
        return 1;
    } else {
        return numeroDado * facRecur(numeroDado - 1); 
    }
}

console.log(facRecur(6));

function value(_d) {
     return String(_d);
    }

/*function par(_b) {
    if((_b & 1) == 0){
        console.log("Sí es par");
    }else{
        console.log("No es par");
    }
}
par(5)*/

function menos(_c) {    
    if (_c == 0) {
        return "impar";
    } else {
        return doble(_c-1);
    } 
}
function doble(_c) {
    if (_c == 0) {
        return "par";
    } else {
        return menos(_c-1);
} 
}
console.log(doble(2))

