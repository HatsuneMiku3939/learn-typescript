// There are 3 basic types in typescript
let idDone: boolean = false;
let lines: number = 39;
let miku: string = "Hatsune Miku";

// can omit the type annotation if the variables are derived from explict literals
// let isDone = false;
// let lines = 39;
// let miku = "Hatsune Miku";

// there is the "any" type
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// use const keyword for constants
const numLivesForCat = 9
// numLivesForCat = 1;  // Error

// for collections, there are typed arrays and generic arrays
let list0: number[]  = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];

// For enumerations
enum Color { Red, Green, Blue };
let color: Color = Color.Red;

// "void" is used in the special case of a function returning nothing
function bigHorribleAlert(): void {
  alert("I'm a little annoying box!");
}

// functions are first class citizens, support the lambda "fat arrow => syntax

// he following are equivalent
let f1 = function (i: number): number {
  return i * i;
}
// return type inferred
let f2 = function (i: number) {
  return i * i;
}
// fat arrow syntax
let f3 = (i: number): number => { return i * i; }
// fat arrow syntax return type inferred
let f4 = (i: number) => { return i * i; }
// fat arrow syntax with return inferred, braceless means no return keyword needed
let f5 = (i: number) => i * i;
