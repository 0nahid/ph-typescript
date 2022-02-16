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

