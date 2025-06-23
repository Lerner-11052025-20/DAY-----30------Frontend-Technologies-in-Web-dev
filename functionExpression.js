const sum = function(a, b){
    console.log(a+b);
    return a+b;
}

console.log(sum(10, 2));
console.log(sum); //[Function: sum]

// sum = 7; TypeError: Assignment to constant variable.
// console.log(sum); TypeError: Assignment to constant variable.

let print = function(){
    console.log("deep");
}
print();

print = 5;
console.log(print);
// console.log(print()); 
// NOW ONWAEDS PRINT IS SIMPLY STORE 7 NOT ANY FUNCTION XPathExpressionTypeError: print is not a function
//     at Object.<anonymous> (e:\DELTA\DeltaWEBdevCodes\JavaScript\JS part-6\functionExpression.js:19:13)
