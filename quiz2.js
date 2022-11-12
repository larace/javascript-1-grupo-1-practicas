function minu(_a) {
    var horas = (_a / 60 | 0)
    var minutos = _a % 60 
    
    console.log(`Las horas son ${horas} y los minutos son ${minutos}`)
  }
  
  minu(150)