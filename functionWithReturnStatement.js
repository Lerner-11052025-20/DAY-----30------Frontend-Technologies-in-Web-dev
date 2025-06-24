function sum(a, b)
{
    // return a+b;
    let sum = a+b;
    return sum;
}

console.log(sum(1, 2));
// sum(1, 2); // no error pan kay j print thashe nahi blank terminal or blank output window
let ans = sum(10, 20);
console.log(ans);

function printTable(n)
{
    for(let i=1 ; i<=10 ; i++)  console.log(`${n} * ${i} = ${n*i}`);
}

printTable(5);
printTable(500);
printTable(16);

function avg(a, b, c)
{
    return (a+b+c)/3;
}
console.log(avg(1, 2, 3));
console.log(avg(1234, 25, 135));

function sumOfFirstNnumbers(n)
{ 
    let sum = 0;
    for(let i=1 ; i<=n ; i++)
    {
        sum += i;
    }
    return sum;
}
console.log(sumOfFirstNnumbers(0));
console.log(sumOfFirstNnumbers(1));
console.log(sumOfFirstNnumbers(10));
console.log(sumOfFirstNnumbers(100));
console.log(sumOfFirstNnumbers(1000));
console.log(sumOfFirstNnumbers(1000-995));