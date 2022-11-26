/* //ejercicio 1
divisible(20)

//ejercicio 2
sumatoria(5)

//ejercicio 3
alreves("pepe")

//ejercicio 4
intridi("lolcito")

//ejercicio 5
alfabetico("pepe")


function divisible(_a) {
    if (_a % 2 == 0) {
      console.log(`${_a} es par`);
    }else{
      console.log(`${_a} es impar`);
    }
    if (_a % 3 == 0) {
      console.log(`${_a} es divisible por 3`);
    }else{
      console.log(`${_a} no es divisible por 3`);
    }
    if (_a % 5 == 0) {
      console.log(`${_a} es divisible por 5`);
    }else{
      console.log(`${_a} no es divisible por 5`);
    }
}

function sumatoria(_b) {
    let contador = 0
    for (let i = 1; i <= _b; i++) {
      contador += i;
      console.log(contador);
    }
  }

function alreves(_c) {
    let vacio = ""
    let i = _c.length-1;
    while (i >= 0) {
      vacio += (_c[i]);
      i --;
    }
    console.log(vacio);
  }

  function intridi(_d) {
    const vocales = ["a","e","i","o","u"];
    let palabra = "";
    let vacio = 0;
    for (let i = 0; i < _d.length; i++) {
      for (let j = 0; j < vocales.length; j++) {
        if (_d[i] == vocales[j]) {
          vacio = 1;
        }
      }
      if (vacio == 1) {
        palabra += "i";
      }else{
        palabra += _d[i];
      }
      vacio= 0;
    }
    console.log(palabra);
  }

function alfabetico(_e) {
  const alfabetico = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z"
  let vacio = ""
    for (let i = 0; i < alfabetico.length; i++) {
      for (let j = 0; j < _e.length; j++) {
        if (_e[j] == alfabetico[i]) {
          vacio += _e[j];
        }
      }
    }
    console.log(vacio);
  }

  function array () {
    var arr = prompt("ingrese los datos separados por una ',' ").split(",")
    console.log (arr.map(Number))
    var array = arr.map(Number)
    
    function mayor () {
    var mayor = (0)
    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    console.log("El valor maximo es " + mayor)
    }
    
    function menor () {
    var menor = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
        }
    }
    console.log("El valor minimo es " + menor)
    }
    
    function promedio() {
    var suma = 0
    var x = 0
    Arraylength = array.length;
        while (x < Arraylength) {
            suma = suma + array[x++];
    }
        console.log(suma / Arraylength);
    }
    
    function median() {
    var mediana = 0;
    var mitad = array.length / 2;
    if (array.length % 2 == 0) {
        mediana = (array[mitad - 1] + array[mitad]) / 2;
    } else {
        mediana = array[mitad];
    }
    console.log(mediana)
    }
    mayor()
    menor()
    promedio()
    median()
    }
    
    array() */

    primo(13)	
    numero()
    par()
    matrices(10)
    
    function primo(_a) {
     if(_a == 4) return console.log("no es primo")
    for (let x = 2; x < _a / 2; x++) {
        if (_a % x == 0) return console.log("no es primo");
      }
      return console.log("es primo");
    }
    
    function numero() {
    for (num=1;num<=100;num++){
           console.log(num);
    }
    }
    
    function par() {
    for(let i = 1; i<= 100; i++){
        if(i%2==0){
         console.log(i + " es par");
         }
    }
    }
    
    function matrices(_a) {
      let matriz = []
      for (let x = 1; x <= 10; x++) {
        let fila = []
        for (let y = 1; y <= x*10; y++) {
          if (x == y) {
            fila.push(x);
          } else {
            fila.push(y);
          }
        }
        matriz.push(fila)
      }
      console.log(matriz)
    }