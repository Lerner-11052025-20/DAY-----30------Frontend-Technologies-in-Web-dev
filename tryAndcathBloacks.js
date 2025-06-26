// console.log("hello1");
// console.log(a); hello1
// e:\DELTA\DeltaWEBdevCodes\JavaScript\Js part-7\tryAndcathBloacks.js:2
// console.log(a);
//             ^

// ReferenceError: a is not defined
// console.log("hello2");


console.log("hello1");
try {
    console.log(a); hello1
} catch (error) {
    console.log("please my friend defined a variable");
    console.log(error); 
}
console.log("hello2");

