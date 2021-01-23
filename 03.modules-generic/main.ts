// Modules, "." can be used as seprator for sub modules
module Geometry {
  export class Squar {
    constructor(public sideLength: number = 0) {
    }
    area() {
      return Math.pow(this.sideLength, 2)
    }
  }
}

let s1 = new Geometry.Squar(5)

// Local alias for referencing a module
import G = Geometry
let s2 = new G.Squar(10)
console.log(s2.area())

// Generics
// Classes
class Tuple<T1, T2> {
  constructor(public item1: T1, public item2: T2) {
  }
}

// Interfaces
interface Pair<T> {
  item1: T
  item2: T
}

// Functions
let pairToTuple = function <T>(p: Pair<T>) {
  return new Tuple(p.item1, p.item2)
}

let tuple = pairToTuple({ item1: "hello", item2: "world"})
console.log(tuple)
