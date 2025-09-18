# Functions in JavaScript

## 🔹 What is a Function in JavaScript?
A **function** in JavaScript is a **block of reusable code** that performs a specific task.  
It can take input (**parameters**), process it, and optionally return an output.

👉 Think of it like a **machine**: you give it ingredients (parameters), it processes them, and gives you a result.

```js
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8
```

---

## 🔹 Types of Functions in JavaScript

### 1. Function Declaration (Named Function)
- Defined with the `function` keyword.
- Hoisted (can be called before declaration).

```js
function greet() {
  console.log("Hello, Meet!");
}
greet();
```

### 2. Function Expression
- A function assigned to a variable.
- Not hoisted.

```js
const greet = function() {
  console.log("Hello from expression!");
};
greet();
```

### 3. Arrow Function (ES6)
- Shorter syntax.
- Does not have its own `this`.

```js
const greet = () => {
  console.log("Hello from arrow function!");
};
greet();
```

### 4. Anonymous Function
- Function without a name.
- Often used in callbacks.

```js
setTimeout(function() {
  console.log("Runs after 2 seconds");
}, 2000);
```

### 5. Immediately Invoked Function Expression (IIFE)
- Runs immediately after definition.

```js
(function() {
  console.log("IIFE executed!");
})();
```

### 6. Constructor Function
- Used with `new` keyword to create objects.

```js
function Person(name) {
  this.name = name;
}
const user = new Person("Meet");
console.log(user.name);
```

### 7. Generator Function
- Declared with `function*`.
- Uses `yield`.

```js
function* numbers() {
  yield 1;
  yield 2;
}
const gen = numbers();
console.log(gen.next().value);
```

### 8. Async Function
- Declared with `async`.
- Always returns a promise.

```js
async function fetchData() {
  return "Data loaded!";
}
fetchData().then(console.log);
```

---

# 🔹 Callback Functions

A **callback function** is a function that is **passed as an argument to another function**, and then executed later.

```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Meet", sayBye);
```

---

# 🔹 Higher-Order Functions (HOF)

A **higher-order function** is a function that either:
1. Takes one or more functions as arguments, OR  
2. Returns a function.

### Example 1: Taking a function as argument
```js
function calculate(a, b, operation) {
  return operation(a, b);
}
function add(x, y) { return x + y; }
function multiply(x, y) { return x * y; }

console.log(calculate(5, 3, add));      // 8
console.log(calculate(5, 3, multiply)); // 15
```

### Example 2: Returning a function
```js
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10
```

---

# 🔹 Real-Life Example of Callbacks + HOF

Array methods (`map`, `filter`, `reduce`) use callbacks.

```js
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15
```

---

# 🔹 Difference Between Callback & HOF

- **Callback Function** → a function passed into another function to be executed later.  
- **Higher-Order Function** → a function that accepts or returns another function.  

👉 So, **callbacks** are like *guests*, and **HOFs** are like *hosts*.  

---

# ✅ Summary

- **Basic functions:** Function Declaration, Expression, Arrow, Anonymous.  
- **Special functions:** IIFE, Constructor, Generator, Async.  
- **Callback:** Passed into another function → executed later.  
- **HOF:** Accepts or returns another function.  
- **Examples:** `map`, `filter`, `reduce`, `setTimeout`, event listeners.  
