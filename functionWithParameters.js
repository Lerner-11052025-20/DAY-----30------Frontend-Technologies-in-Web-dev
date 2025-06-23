function sum(a, b) // let a, let b lakho to syntax error aavshe 
{
    return a+b;
}

console.log(sum(1, 2));
console.log(sum(sum(1,2), 10));
console.log( sum(sum(sum(10, 20), 30), 40) );

function printInfo(name, age)
{
    console.log(`${name}'s age is ${age}`);
}

printInfo("deep");
printInfo(20);
printInfo("deep", 20);