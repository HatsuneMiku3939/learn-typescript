// iterator and generator

// for..of statement
// iterate over the list of values on the object being iterated
let arrayOfAnyType = [1, 'string', false]
for (const val of arrayOfAnyType) {
  console.log(val)
}

let list = [4, 5, 6]
for (const i of list) {
  console.log(i)
}

// for..in statement
// iterate over the list of kets on the object being iterated
for (const i in list) {
  console.log(i)
}

// Type assertion
let foo = {}    // empty object
// foo.bar = 123  error 'bar' dose not exist on '{}'
// foo.baz = 'helloworld' error 'baz' dose not exist on '{}'

interface Foo {
  bar: number
  baz: string
}

let foo1 = {} as Foo   // Type assertion here
foo1.bar = 123
foo1.baz = 'helloworld'

console.log(foo)
console.log(foo1)

