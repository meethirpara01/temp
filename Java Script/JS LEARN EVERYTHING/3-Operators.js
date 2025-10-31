// typeof MOSTLY WORK WITH PRIMITIVE DATA TYPES
// instanceof MOSTLY WORK WITH REFERENCE DATA TYPES
let a = 90;
let ans1 = a instanceof Number;
let ans2 = a instanceof Array;
console.log(ans2);


console.log("10" + 1);
console.log("10" - 1);
console.log(true + false);
console.log(!!"Sheryians");

let str = "42";
let num = +str;
console.log(num); // 42

let age = 17;
let msg = age >= 18 ? "Adult" : "Minor";
console.log(msg);


// Using switch + arithmetic operators
function calc(a, b, operator) 
{
    // +, -, *, /
    switch (operator) 
    {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Error: Division by zero';
        default:
            return 'Error: Invalid operator';
    }
}


let score = 78;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "FAIL";
console.log(grade);

let x = 3;
let y = x++;
console.log(x, y);


let p = 3;
let q = ++p;
console.log(p, q);