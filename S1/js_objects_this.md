# JavaScript Objects & this Keyword Guide

## 🔹 What is an Object in JavaScript?

An object is a collection of key-value pairs.

Keys are called properties (or methods if the value is a function).

Objects are non-primitive and stored by reference.

```javascript
let person = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log("Hello!");
  }
};
```

Here:
- `name` and `age` → properties
- `greet` → method

---

## 🔹 Ways to Create Objects

### 1. Object Literal (most common)
```javascript
let user = { name: "Bob", age: 30 };
```

### 2. Using `new Object()`
```javascript
let user = new Object();
user.name = "Bob";
```

### 3. Using Constructor Function
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let p1 = new Person("Charlie", 22);
```

### 4. Using class (syntactic sugar over constructor)
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let p2 = new Person("Diana", 28);
```

### 5. Using `Object.create()`
```javascript
let proto = { greet() { console.log("Hi"); } };
let obj = Object.create(proto);
obj.greet(); // Hi
```

---

## 🔹 Accessing Properties

### Dot Notation
```javascript
console.log(person.name);
```

### Bracket Notation (useful when key is dynamic or not a valid identifier)
```javascript
console.log(person["age"]);
```

---

## 🔹 Adding / Modifying / Deleting Properties

```javascript
person.city = "New York";     // add
person.age = 26;              // modify
delete person.city;           // delete
```

---

## 🔹 Property Existence

```javascript
console.log("name" in person);        // true
console.log(person.hasOwnProperty("age")); // true
```

---

## 🔹 Iterating Over Objects

```javascript
for (let key in person) {
  console.log(key, person[key]);
}

console.log(Object.keys(person));   // ["name", "age", "greet"]
console.log(Object.values(person)); // ["Alice", 25, ƒ]
console.log(Object.entries(person));// [["name","Alice"], ["age",25], ["greet",ƒ]]
```

---

## 🔹 Object Methods and this

```javascript
let user = {
  name: "Sam",
  greet() {
    console.log("Hi, I'm " + this.name);
  }
};
user.greet(); // Hi, I'm Sam
```

`this` refers to the object calling the method.

---

## 🔹 Object.freeze() / Object.seal()

### Object.freeze()
```javascript
let obj = { a: 1 };
Object.freeze(obj);
obj.a = 2;  // ❌ can't change
console.log(obj.a); // 1
```

### Object.seal()
```javascript
let obj2 = { b: 1 };
Object.seal(obj2);
obj2.b = 2;  // ✅ can modify existing
delete obj2.b; // ❌ can't delete
```

---

## 🔹 Spread Operator & Object.assign()

```javascript
let a = { x: 1 };
let b = { y: 2 };

let c = { ...a, ...b }; 
// { x: 1, y: 2 }

let d = Object.assign({}, a, b);
// { x: 1, y: 2 }
```

---

## 🔹 Nested Objects

```javascript
let user = {
  name: "Tom",
  address: {
    city: "Delhi",
    pin: 110001
  }
};
console.log(user.address.city); // Delhi
```

---

## 🔹 Optional Chaining (?.)

Avoids error if property doesn't exist:

```javascript
console.log(user.address?.city);   // Delhi
console.log(user.contact?.phone);  // undefined
```

---

## 🔹 Object Destructuring

```javascript
let { name, age } = person;
console.log(name, age);
```

With renaming + default values:

```javascript
let { name: n, city = "Unknown" } = person;
console.log(n, city);
```

---

## 🔹 Summary (Objects)

- Objects store key-value pairs
- Can be created using literals, constructors, classes, `Object.create()`
- Properties can be added, modified, deleted
- Use `Object.keys`, `Object.values`, `Object.entries` to work with them
- `this` inside an object refers to that object
- Use freeze, seal, spread `...`, destructuring for advanced handling

⚡ **Bro, objects are the foundation of JS (even arrays & functions are objects under the hood).**

---

# 🔹 What is `this` keyword?

`this` is a special keyword that refers to the execution context (the object that is currently calling the function).

Its value depends on **how the function is called**, not where it's defined.

---

## 🔸 Cases of `this`

### 1. Global Context

In **non-strict mode**, `this` refers to the global object (`window` in browsers, `global` in Node.js).

In **strict mode**, it's `undefined`.

```javascript
console.log(this); // window (in browser)

"use strict";
console.log(this); // undefined
```

### 2. Inside an Object Method

When a function is called as a method of an object, `this` refers to that object.

```javascript
let person = {
  name: "Alice",
  greet() {
    console.log(this.name);
  }
};
person.greet(); // Alice
```

### 3. Alone Function Call

If you call a function normally, `this` will be:
- Global object (non-strict mode)
- `undefined` (strict mode)

```javascript
function show() {
  console.log(this);
}
show(); // window (non-strict), undefined (strict)
```

### 4. Arrow Functions

Arrow functions **don't have their own** `this`.

They inherit `this` from their surrounding (lexical scope).

```javascript
let obj = {
  name: "Bob",
  arrow: () => {
    console.log(this.name);
  }
};
obj.arrow(); // undefined (because arrow `this` comes from global, not obj)

let obj2 = {
  name: "Sam",
  normal() {
    let arrow = () => console.log(this.name);
    arrow();
  }
};
obj2.normal(); // Sam (arrow inherited from obj2.normal's `this`)
```

### 5. Constructor Functions / Classes

When using `new`, `this` refers to the newly created object.

```javascript
function Person(name) {
  this.name = name;
}
let p1 = new Person("Charlie");
console.log(p1.name); // Charlie
```

### 6. call, apply, bind

You can manually set the value of `this`.

```javascript
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

let user = { name: "David" };

greet.call(user, "Hello");  // Hello, David
greet.apply(user, ["Hi"]);  // Hi, David

let boundGreet = greet.bind(user);
boundGreet("Hey");          // Hey, David
```

### 7. Event Handlers

In DOM event listeners, `this` usually refers to the element that received the event.

```javascript
document.querySelector("button").addEventListener("click", function() {
  console.log(this); // <button> element
});
```

⚠️ **But with arrow functions, `this` comes from the outer scope, not the element.**

---

## 🔹 Summary Table

| Context | Value of this |
|---------|---------------|
| Global scope (non-strict) | Global object (window) |
| Global scope (strict) | undefined |
| Object method | That object |
| Simple function call | Global (non-strict) / undefined (strict) |
| Arrow function | Inherits from surrounding scope |
| Constructor / class | Newly created object |
| Event handler (normal function) | The element |
| call / apply / bind | Whatever you pass |

---

## ✅ In short:

- **`this` = "who called me?"**
- **Arrow functions don't have their own `this`, they borrow it from the parent scope**
- **You can control `this` with `call`, `apply`, `bind`**

⚡ **The `this` keyword is one of the trickiest but most powerful concepts in JS!**