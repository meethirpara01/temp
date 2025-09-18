# Deep Dive: var, let, and const in JavaScript

Here’s the **clear difference** between `var`, `let`, and `const` in JavaScript:

| Feature | **var** | **let** | **const** |
|---------|---------|---------|-----------|
| **Scope** | Function-scoped | Block-scoped | Block-scoped |
| **Hoisting** | Hoisted (initialized as `undefined`) | Hoisted but not initialized (Temporal Dead Zone) | Hoisted but not initialized (Temporal Dead Zone) |
| **Re-declaration** | Allowed | Not allowed in the same scope | Not allowed |
| **Re-assignment** | Allowed | Allowed | ❌ Not allowed (value must stay constant) |
| **Use case** | Old way (avoid in modern JS) | When value will change | When value should never change |

👉 **In short:**
- Use **`let`** for variables that will change.
- Use **`const`** for values that stay the same.
- Avoid **`var`** (it’s outdated and can cause bugs).

---

## 1. Scope
- **`var` → Function scoped**
- **`let` and `const` → Block scoped**

```js
function testScope() {
  if (true) {
    var x = 10;   // function scoped
    let y = 20;   // block scoped
    const z = 30; // block scoped
  }

  console.log(x); // ✅ works (10)
  console.log(y); // ❌ ReferenceError
  console.log(z); // ❌ ReferenceError
}
testScope();
```

---

## 2. Hoisting
- **`var`** is hoisted and initialized as `undefined`.
- **`let` and `const`** are hoisted too but kept in the **Temporal Dead Zone (TDZ)** until the line of declaration.

```js
console.log(a); // ✅ undefined
var a = 5;

console.log(b); // ❌ ReferenceError (TDZ)
let b = 10;

console.log(c); // ❌ ReferenceError (TDZ)
const c = 15;
```

---

## 3. Re-declaration
- **`var`** allows redeclaration in the same scope (dangerous).
- **`let` and `const`** do not allow redeclaration in the same scope.

```js
var a = 1;
var a = 2; // ✅ works (but risky)

let b = 3;
let b = 4; // ❌ SyntaxError

const c = 5;
const c = 6; // ❌ SyntaxError
```

---

## 4. Re-assignment
- **`var`** → ✅ allowed
- **`let`** → ✅ allowed
- **`const`** → ❌ not allowed

```js
var a = 1;
a = 2; // ✅

let b = 3;
b = 4; // ✅

const c = 5;
c = 6; // ❌ TypeError
```

---

## 5. Objects & Arrays with const
⚠️ `const` makes the **reference immutable**, but the contents of objects/arrays can still change.

```js
const obj = { name: "Meet" };
obj.name = "Hirpara"; // ✅ works
console.log(obj); // { name: "Hirpara" }

obj = {}; // ❌ TypeError (cannot reassign reference)

const arr = [1, 2, 3];
arr.push(4); // ✅ works
console.log(arr); // [1, 2, 3, 4]

arr = [5, 6]; // ❌ TypeError
```

---

## 6. Global Scope Behavior
- **`var`** creates a property on `window` (or `globalThis`).
- **`let` and `const`** do **not**.

```js
var a = 100;
let b = 200;
const c = 300;

console.log(window.a); // ✅ 100
console.log(window.b); // ❌ undefined
console.log(window.c); // ❌ undefined
```

---

## ✅ Summary in deep dive style:
- `var`: function-scoped, hoisted, re-declarable → ❌ avoid in modern JS.  
- `let`: block-scoped, hoisted (TDZ), re-assignable → ✅ best for variables that change.  
- `const`: block-scoped, hoisted (TDZ), not re-assignable → ✅ best for constants & objects/arrays references.  
