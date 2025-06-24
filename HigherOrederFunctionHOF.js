const greet = function(){
    console.log("Hello...");
}

function hof(fun, n)
{
    for(let i=1 ; i<=n ; i++)   fun();
}

// hof(greet(), 5); // only hello print to thase pachi error aavshe
// Hello...
// e:\DELTA\DeltaWEBdevCodes\JavaScript\JS part-6\HigherOrederFunctionHOF.js:7
//     fun();
//     ^

// TypeError: fun is not a function

hof(greet, 5);

let dev = function(){
    console.log("Doing well since 6.15+ hours...");
}

hof(dev, 10);