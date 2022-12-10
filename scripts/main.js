function equis(_a) {
    resultado=""
    for (let i=0; i<_a; i++) {
        for (let j=0; j<_a; j++) {
            resultado += (j==i || j==_a-i-1) ? "X" : " ";
        }
        resultado+="\n";
    }
    return console.log(resultado);
}

function array(_a, _b) {
    let contador = 0;
    for (let i = 0; i < _a.length; i++) {
      if (!_b.includes(_a[i])) {
        contador ++
      }
    }
    if (contador >= 1) {
      return console.log("los arrays son diferentes")
    }
    return console.log("los arrays son iguales")
  }

array([1, 2, 3, 4, 5, 6], [1, 2, 4, 5, 6, 3])
equis(5)