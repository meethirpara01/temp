function abcd(...val) // REST
{
    console.log(typeof(val));
    console.log(val);
}

let num = [1, 2, 3, 4, 5];
abcd(...num); // SPREAD


function fCf(val)
{
    let f1 = val();
    console.log(f1);
}

fCf(function() 
{
    return console.log("hello");
})



function hof()
{
    return function()
    {
        console.log("heyyyyyyy")
    }
}

let f = hof();
console.log(f);
f();




// First-Class Functions
function shout(msg) 
{
    return msg.toUpperCase();
}

function processMessage(fn)
{
    console.log(fn("hello"));
}

processMessage(shout);



// Higher-Order Functions (HOF)
function createMultiplier(x) 
{
    return function (y) 
    {
        return x * y;
    };
}

let double = createMultiplier(2);
console.log(double(5));




// Closures & Lexical Scope
function outer() 
{
    let count = 0;
    return function () 
    {
        count++;
        console.log(count);
    };
}

let counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3



// IIFE – Immediately Invoked Function Expression
(function () 
{
    console.log("Runs immediately");
})();
