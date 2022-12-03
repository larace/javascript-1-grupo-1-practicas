sumatoria(5, 1, 3, 4, 5)
  
triangulo()

potencia(10, 5)

console.log(recursiva(5, 5))

function triangulo() {
    for (let i = 0; i < 10; i++) {
        let asterisco = ''
      for (let j = 0; j < i; j++) {
        asterisco += '#';
      }
      for (let k = 10; k > i; k--) {
        asterisco += '*';
      }
      console.log(asterisco);
    }
  }

function potencia(numero, exponente) {
    for (let i = 0; i < exponente; i++) {
      residuo = numero ** exponente
    }
    return console.log(residuo);
  }
  
  
  function recursiva(numero, exponente) {
    if (exponente == 0) {
      return 1
    } else {
      return numero * recursiva(numero, exponente - 1)
    }
  }


function sumatoria(array) {
    if (array.length == 0) {
        return 0
    } else {
        return array[0] + sumatoria(array.slice[1])
    }
}

sumatoria(5, 1, 3, 4, 5)