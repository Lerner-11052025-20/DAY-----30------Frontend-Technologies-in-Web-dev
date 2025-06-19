console.log();
let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (i of nums)
    // console.log(i);
    for (j of i)
        console.log(j);

console.log();
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for(i of array)     console.log(i);

console.log();
let fruits = ["mango", "apple", "banana", "kela"];
for(let i=0 ; i<fruits.length ; i++)
    console.log(fruits[i]);
console.log();
for(i of fruits)    console.log(i);