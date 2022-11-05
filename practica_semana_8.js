const proce = {
   model: 'Ryzen 5000',
   make: 'AMD',
   year: 2021,
   color: 'gris',
   nucleos: [4, 8, 16],
   modelos: function(modelo) {
      this.model = modelo;
   },
   changeyear: function(year) {
    this.year = year
   },
   datos: function() {
    return this.model + ',' + this.year + ',' + this.nucleos + '.';
   },
   borrar: function(campo) {
    delete this[campo]
   }
}
console.log(proce)
proce.modelos('Ryzen 4000')
console.log(proce.model)
proce.changeyear(2020)
console.log(proce.year)
console.log(proce.datos())
console.log(proce)
proce.borrar('model')
console.log(proce)