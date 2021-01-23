// Template Strings (strings that use backticks)
// String Interpolation with Template Strings
let who = 'Tyrone'
let greeting = `Hi ${who}, how are you?`

// Multiline string
let multiline = `This is a example
of a multiline string`

console.log(multiline)

// readonly
interface Person {
  readonly name: string
  readonly age: number
}

let p1: Person = { name: 'Tryrone', age: 42 }
// p1.age = 25 error p1.age is read-only

let p2 = { name: 'John', age: 60 }
let p3: Person = p2 // OK, read-olny alias for p2
// p3.age = 35 error p3.age is read-only
p2.age = 35 // OK, but also changes p3.age

console.log(p3)

class Car {
  readonly make: string
  readonly model: string
  readonly year = 2020

  constructor() {
    this.make = 'Unknown make'  // Assignment permitted in constructor
    this.model = 'Unknown model'  // Assignment permitted in constructor
  }
}

let numbers: Array<number> = [0, 1, 2, 3, 4]
let moreNumbers: ReadonlyArray<number> = numbers
// moreNumbers[5] = 5 error elemets are read-only
// moreNumbers.push(5) error, no push method becase it mutates array
// numbers = moreNumbers error, mutating methods are missing

// Tagged union types for modelling state that can be in one of many shapes
type State =
  | { type: 'loading'}
  | { type: 'success', value: number }
  | { type: 'error', message: string }

function displayState(s : State) {
  if (s.type === 'loading') {
    console.log(s.type)
  } else if (s.type === 'success') {
    console.log(s.value)
  } else if (s.type === 'error') {
    console.log(s.message)
  }
}

let state: State = { type: 'loading' }
displayState(state)

state = { type: 'success', value: 39 }
displayState(state)

state = { type: 'error', message: 'something...somethin is wrong' }
displayState(state)
