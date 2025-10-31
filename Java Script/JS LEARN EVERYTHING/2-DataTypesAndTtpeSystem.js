// Falsy values:
// false , 0 , "" , null , undefined , NaN
// Everything else is truthy, including:
// "0" , "false" , [] , {} , function(){}

console.log(null + 1);
console.log("5" + 3);
console.log("5" - 3);
console.log(true + false);

console.log(typeof []);
console.log(typeof null);
console.log(typeof 123n);

console.log(Boolean(0)); // falsy
console.log(Boolean("0")); // truthy
console.log(Boolean([])); // truthy
console.log(Boolean(undefined));// falsy

function isEmpty(value) 
{
    return value === null || value === undefined || value === "";
}

console.log(isEmpty(null));        // true
console.log(isEmpty(undefined));   // true
console.log(isEmpty(""));          // true
console.log(isEmpty("Hello"));     // false
console.log(isEmpty(0));           // false
console.log(isEmpty(false));       // false

console.log(5 == "5"); // ?
console.log(5 === "5"); // ?