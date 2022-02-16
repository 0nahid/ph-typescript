// Array <T>
const arr: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];
const arr3: string[] = ["a", "b", "c"];
const arr4: Array<string> = ["a", "b", "c"];

// Type alias
type numOrStrOrBol = number | string | boolean;
const id: numOrStrOrBol = true;

// Basic function
function getLowerCase(str: string): string {
  return str.toLowerCase();
}

// Arrow function
const addNumber = (a: number, b: number): number => a + b;

// Interface
interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
// logs "12, 26"
const point = { x: 12, y: 26 };
// logPoint(point);

interface Person {
  name: string;
  age: number;
  hobby?: string | null;
}
const person: Person = {
  name: "Murphy",
  age: 25,
  hobby: "Coding",
};

const anonymousPerson: Person = {
  name: "",
  age: 0,
  hobby: "",
};

// Enums
enum Colors {
  color1 = "red",
  color2 = "blue",
  color3 = "green",
}
console.log(Colors.color1);

// Generics
function _concat<T>(a: T, b: T): T {
  return b;
}
console.log(_concat<number>(5, 2));
