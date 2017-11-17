// function Automobile(wheels) {
//   this.wheel = wheels
//   this.setColor = () => {
//     this.color = color
//   }
//   this.getColor = () => {
//     return this.color
//   }
//   this.gasPedal = () => {
//     return "Vroom"
//   }
// }
//
// function Sedan(make, model, year) {
//   this.make = make
//   this.model = model
//   this.year = year
//   this.door = 4
// }
//
// Sedan.prototype = new Automobile()
//
// let genesis = new Sedan("Hyundai", "Genesis", 2018)
//
// console.log(genesis);
//
// let camry = new Sedan("Toyota", "Camry")
//
// console.log(camry);
//
// camry.year = 2010
// console.log(camry);
//
// camry.door = 2
// console.log(camry);

class Automobile{
  constructor(wheels){
    this.wheel = wheels
  }
  setColor(){
    this.color = color
  }
  getColor(){
    return this.color
  }
  getPedal(){
    return "Vroom"
  }
}

class Motorcycle extends Automobile{
  constructor(make, model, year){
    super(2)
    this.make = make
    this.model = model
    this.year = year
  }
}

let moped = new Motorcycle("Vespa", "Hornet", 1988)
console.log(moped);

class Sedan {
  constructor(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
    this.door = 4
  }
}

class Maybach extends Sedan {
  constructor() {

  }
}
