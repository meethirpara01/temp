# JavaScript Data Types & Special Values Guide

## 🔹 Two Categories of Data Types in JavaScript

### Primitive Data Types (immutable, stored by value)
### Non-Primitive (Reference) Data Types (mutable, stored by reference)

---

## 1. Primitive Data Types

These are the basic types; they hold single values.

| Type | Example | Description |
|------|---------|-------------|
| String | `"Hello"`, `'Meet'` | Textual data (characters, words, sentences) |
| Number | `42`, `3.14`, `-10` | Integers and floating-point numbers |
| BigInt | `123n`, `BigInt(9999999999)` | For very large integers beyond Number limit |
| Boolean | `true`, `false` | Logical values, used in conditions |
| Undefined | `let x;` | A variable declared but not assigned |
| Null | `let y = null;` | Intentional absence of value |
| Symbol (ES6) | `Symbol("id")` | Unique and immutable value, often used as object keys |

**👉 Primitive values are compared by value.**

```javascript
let a = 5;
let b = 5;
console.log(a === b); // true
```

---

## 2. Non-Primitive (Reference) Data Types

These can store multiple values and are objects at their core.

| Type | Example | Description |
|------|---------|-------------|
| Object | `{ name: "Meet", age: 21 }` | Collection of key-value pairs |
| Array | `[1, 2, 3]` | Ordered list of values (special type of object) |
| Function | `function greet(){}` | Functions are also objects in JS |
| Date, RegExp, Map, Set | `new Date()`, `new Map()` | Built-in object types |

**👉 Non-primitive values are compared by reference.**

```javascript
let obj1 = { name: "Meet" };
let obj2 = { name: "Meet" };
console.log(obj1 === obj2); // false (different memory reference)
```

---

## 🔹 Quick Difference Table

| Feature | Primitive | Non-Primitive |
|---------|-----------|---------------|
| Stored as | Value | Reference |
| Mutable? | ❌ Immutable | ✅ Mutable |
| Examples | String, Number, Boolean, Null, Undefined, BigInt, Symbol | Object, Array, Function, Map, Set |
| Comparison | By value | By reference |

---

## 🔹 Special Values in JavaScript

### 1. undefined

A variable that has been declared but not assigned a value automatically gets `undefined`.
It means "value not assigned".

#### Cases that give undefined:

**1. Uninitialized Variables**
```javascript
let a;
console.log(a); // undefined
```

**2. Missing Function Parameters**
```javascript
function greet(name) {
  console.log(name); 
}
greet(); // undefined (because no argument passed)
```

**3. Return Without Value**
```javascript
function doSomething() {}
console.log(doSomething()); // undefined
```

**4. Object Property That Doesn't Exist**
```javascript
let obj = { age: 20 };
console.log(obj.name); // undefined
```

**5. Array Element That Doesn't Exist**
```javascript
let arr = [10, 20];
console.log(arr[5]); // undefined
```

**6. Array Element Deleted**
```javascript
let arr = [1, 2, 3];
delete arr[1];
console.log(arr[1]); // undefined
```

**7. Destructuring Missing Property**
```javascript
let { a } = { b: 2 };
console.log(a); // undefined
```

**8. void Operator**
```javascript
console.log(void 0); // undefined
```

**9. Accessing Global undefined**
```javascript
console.log(undefined); // undefined
```

#### Important Notes about undefined:

- **Type of undefined:** `typeof undefined; // "undefined"`
- **Comparison:**
  ```javascript
  undefined == null;  // true   (loose equality)
  undefined === null; // false  (strict equality)
  ```
- **undefined vs not defined:** `undefined` means variable exists but no value; "not defined" means variable doesn't exist at all

---

### 2. null

Represents an intentional absence of value. You assign `null` when you want to say "nothing" or "empty".

```javascript
let b = null;
console.log(b); // null
```

**👉 Key Points:**
- Type of `null` is "object" (this is a historical bug in JS 😅)
- Use `null` when you intentionally clear a variable

---

### 3. NaN (Not-a-Number)

A special numeric value that represents something that's not a valid number.
It's still of type "number" (weird but true).

```javascript
console.log("abc" * 3); // NaN
console.log(0 / 0);     // NaN
console.log(Math.sqrt(-1)); // NaN
```

**👉 Key Points:**
- Type of `NaN` is "number"
- `NaN` is not equal to itself:
  ```javascript
  console.log(NaN === NaN); // false
  console.log(isNaN(NaN));  // true
  ```
- Use `Number.isNaN(value)` to check safely

---

### 4. Infinity & -Infinity

Special numeric values representing positive infinity and negative infinity.
Returned when numbers exceed the maximum limit or divide by zero.

```javascript
console.log(1 / 0);      // Infinity
console.log(-1 / 0);     // -Infinity
console.log(Number.MAX_VALUE * 2); // Infinity
```

**👉 Key Points:**
- Type of `Infinity` is "number"
- Comparisons:
  ```javascript
  console.log(Infinity > 1000000000); // true
  console.log(-Infinity < -1000000000); // true
  ```
- Operations with Infinity:
  ```javascript
  console.log(Infinity + 1); // Infinity
  console.log(Infinity - Infinity); // NaN (undefined behavior)
  ```

---

## 🔹 Special Values Comparison Table

| Value | Meaning | Type | Example |
|-------|---------|------|---------|
| undefined | Variable declared but not assigned | "undefined" | `let a; console.log(a);` |
| null | Intentional empty value | "object" (bug) | `let b = null;` |
| NaN | Invalid number result | "number" | `"abc" * 3` |
| Infinity | Positive infinity | "number" | `1 / 0` |
| -Infinity | Negative infinity | "number" | `-1 / 0` |

---

## 🔹 Truthy and Falsy Values

In JavaScript, every value is either **truthy** or **falsy** when converted to a boolean.
JS does this conversion automatically in conditions like `if (...)`.

### Falsy Values (only 8 of them)

These are the values that evaluate to `false` in a boolean context:

1. `false`
2. `0`
3. `-0`
4. `0n` (BigInt zero)
5. `""` (empty string)
6. `null`
7. `undefined`
8. `NaN`

```javascript
if (0) console.log("true"); 
else console.log("false"); // false

if ("") console.log("true");
else console.log("false"); // false
```

### Truthy Values

**👉 Everything except those 8 falsy values is truthy.**

Examples:
- `true`
- Any non-zero number (`1`, `-1`, `3.14`, …)
- Any non-empty string (`"hello"`, `"0"`, `"false"`)
- Objects (`{}`, `[]`, `function() {}`)
- Dates, Maps, Sets, etc.

```javascript
if ("hello") console.log("truthy"); // truthy
if ([]) console.log("truthy");      // truthy
if ({}) console.log("truthy");      // truthy
```

### Common Gotchas

1. **Empty Array `[]`**
   ```javascript
   if ([]) console.log("truthy"); // truthy
   ```
   Even though it's "empty," it's an object → truthy.

2. **Empty Object `{}`**
   ```javascript
   if ({}) console.log("truthy"); // truthy
   ```

3. **String "0"**
   ```javascript
   if ("0") console.log("truthy"); // truthy
   ```
   Because it's not an empty string.

4. **String "false"**
   ```javascript
   if ("false") console.log("truthy"); // truthy
   ```
   Still truthy because it's a non-empty string.

5. **NaN**
   ```javascript
   if (NaN) console.log("truthy");
   else console.log("falsy"); // falsy
   ```

### Explicit Conversion

You can force a value into boolean:

```javascript
console.log(Boolean("hello")); // true
console.log(Boolean(""));      // false
console.log(Boolean(0));       // false
console.log(Boolean(123));     // true
```

**Shortcut:** `!!value`

```javascript
console.log(!!"JS");   // true
console.log(!!0);      // false
```

### Quick Test Function

```javascript
function check(value) {
  if (value) console.log(value, "=> if block ✅");
  else console.log(value, "=> else block ❌");
}

check(false);   // else
check(0);       // else
check("");      // else
check("hi");    // if
check([]);      // if
check({});      // if
check(null);    // else
check(NaN);     // else
```

---

## ✅ Summary

### Data Types:
- **Primitive** → single value, immutable, stored directly
- **Non-Primitive** → collection/reference type, mutable, stored by reference

### Special Values:
- **undefined** → "I don't have a value (not assigned)"
- **null** → "I'm empty on purpose"
- **NaN** → "This is not a valid number"
- **Infinity** → "This is bigger than the biggest number JS can handle"

### Truthy/Falsy:
- **Falsy (8 total):** `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`
- **Truthy:** everything else
- In `if (...)` → JS auto-converts the value to true or false

---

## Best Practices

✅ Don't manually assign `undefined` to variables — use `null` when you want "empty"  
✅ Use `=== undefined` to check if something is truly undefined  
✅ Use `"in"` operator or `hasOwnProperty` to check existence in objects  
✅ Remember that `[]` and `{}` are truthy even when empty  
✅ Use `Number.isNaN()` instead of `isNaN()` for better NaN checking