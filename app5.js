for(let i=0 ; i<5 ; i++)
    console.log(i);
// console.log(i); error here i is not defined because of the variable mwthod scope concept

console.log();
for(let i=5 ; i>=1 ; i--)
    console.log(i);

console.log();
for(let i=0 ; i<=10 ; i++)
{
    if(i%2 == 0)    console.log(i);
}
console.log();
for(let i=1 ; i<=10 ; i++)
{
    if(i%2 != 0)    console.log(i);
}
console.log();
for(let i=1 ; i<=10 ; i++)
{
    if((i&1) != 0)    console.log(i);
}

