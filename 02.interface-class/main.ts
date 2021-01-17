// interfaces are structual, anything that has the properties is compliant
// with the interface
interface Person {
	name: string;
	// optional properties, makred with a "?"
	age?: number;
	// and of coures functions
	move(): void;
}

// Objects that have name and move properties can be treated as a Person
let p: Person = {
	name: "Miku",
	move: () => { },
};
// Objects that have the optional property
let validPerson: Person = {name: "miku", age: 17, move: () => { }, };
// invalid, because age is not number
// let invalidPerson: Person = {name: "miku", age: true, move: () => { }, };

// interfaces can also describe a function type
interface SearchFunc {
	(source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function (src: string, sub: string): boolean {
	return src.search(sub) != -1;
}
let anotherSearch: SearchFunc = (src: string, sub: string) => src.search(sub) != -1;

// Classes - members are public by default
class Point {
	// propertis
	x: number;

	// constructor, the public/private keywords will generate the boiler plate code
	// for the property and the initialization in the constructor
	// in this example, "y" will be defined juse like "x"
	// default values are also supported
	constructor(x: number, public y: number = 0) {
		this.x = x;
	}

	// functions
	dist(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	// static members
	static origin = new Point(0, 0);
}

// classes can be explicitly marked as implementing an interface
// any missing properties will then cause an error at compile time
interface Named {
	name: string
	Display(): void
}

class NamedPoint implements Named {
	x: number
	name: string

	constructor(name: string, x: number, public y: number = 0) {
		this.name = name;
		this.x = x;
	}

	Display(): void {
		console.log(name);
	}

	dist(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	static origin = new Point(0, 0);
}

let p1 = new Point(10, 20);
let p2 = new NamedPoint("p2", 10);		// y will be 0

// Inheritance
class Point3D extends Point {
	constructor(x: number, y: number, public z: number = 0) {
		// explicit call to the super class constructor is mandatory
		super(x, y)
	}

	// function override
	dist(): number {
		let d = super.dist();
		return Math.sqrt(d * d + this.z * this.z);
	}
}
