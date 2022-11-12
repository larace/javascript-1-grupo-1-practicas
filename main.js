//ejercicio 1
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
    
    array()