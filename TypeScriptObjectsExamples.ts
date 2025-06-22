// TypeScript Objects – Top 10 Examples (Easy to Hard)

// ---------------------------------------------
// Example 1: Basic Object Creation and Access
// ---------------------------------------------
const person = {
  name: "Alice",
  age: 25,
  city: "New York",
};

console.log("Example 1:");
console.log(person.name); // Alice
console.log(person["age"]); // 25

// ---------------------------------------------
// Example 2: Adding and Deleting Properties
// ---------------------------------------------
person.email = "alice@example.com";
delete person.city;

console.log("\nExample 2:");
console.log(person);

// ---------------------------------------------
// Example 3: Object with Method (Using 'this')
// ---------------------------------------------
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  getSummary(): string {
    return `${this.brand} ${this.model} (${this.year})`;
  },
};

console.log("\nExample 3:");
console.log(car.getSummary());

// ---------------------------------------------
// Example 4: Nested Objects
// ---------------------------------------------
const user = {
  id: 1,
  name: "Bob",
  address: {
    city: "Delhi",
    zip: 110001,
    country: "India",
  },
};

console.log("\nExample 4:");
console.log(user.address.city); // Delhi

// ---------------------------------------------
// Example 5: Object Type Annotations
// ---------------------------------------------
type Book = {
  title: string;
  author: string;
  year: number;
  available: boolean;
};

const book: Book = {
  title: "Clean Code",
  author: "Robert C. Martin",
  year: 2008,
  available: true,
};

console.log("\nExample 5:");
console.log(book);

// ---------------------------------------------
// Example 6: Looping Through Object Keys
// ---------------------------------------------
const fruits = {
  apple: 5,
  banana: 3,
  mango: 2,
};

console.log("\nExample 6:");
for (const key in fruits) {
  console.log(`${key}: ${fruits[key as keyof typeof fruits]}`);
}

// ---------------------------------------------
// Example 7: Using keyof and Object.entries()
// ---------------------------------------------
function printObject(obj: Record<string, any>) {
  console.log("\nExample 7:");
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
}

printObject({ name: "Laptop", price: 50000, brand: "Dell" });

// ---------------------------------------------
// Example 8: Optional Chaining and Nullish Coalescing
// ---------------------------------------------
const employee: {
  name: string;
  department?: { name: string; floor?: number };
} = {
  name: "Dev",
};

console.log("\nExample 8:");
console.log(employee.department?.floor ?? "Floor not assigned");

// ---------------------------------------------
// Example 9: Object Manipulation with Spread and Destructuring
// ---------------------------------------------
const original = {
  id: 10,
  name: "Shiv",
  role: "Admin",
};

const updated = {
  ...original,
  role: "User",
};

const { name, ...rest } = updated;

console.log("\nExample 9:");
console.log("Updated:", updated);
console.log("Name:", name);
console.log("Rest:", rest);

// ---------------------------------------------
// Example 10: Complex Dynamic Object Handling with Generics
// ---------------------------------------------
function updateObject<T extends object, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K]
): T {
  return {
    ...obj,
    [key]: value,
  };
}

const student = {
  id: 101,
  name: "Ananya",
  grade: "A",
};

const newStudent = updateObject(student, "grade", "A+");

console.log("\nExample 10:");
console.log(newStudent);

// ---------------------------------------------
// Extra: Object.freeze() - Immutable Object
// ---------------------------------------------
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};

Object.freeze(config);
// config.timeout = 10000; // Error in strict mode

console.log("\nExtra:");
console.log(config);

// ---------------------------------------------
// Total Lines (including comments and spacing): ~215
// ---------------------------------------------
