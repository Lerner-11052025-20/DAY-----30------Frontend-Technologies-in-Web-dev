// () => {
//     console.log("hello");
// };

const hello = () => {
    console.log("hello");
};

hello();

let sum = (a, b) => {
    console.log(a+b);
    return a+b;
}
console.log(sum(1, 2));

// sum = (a, b) => (a+b) ;
sum = (a, b) => a+b ;
console.log(sum(1, 20));

let print = () => {console.log("deep2");};
print();

let check = n => n**n;
// let check = (n) => (n**n);
// let check = n => (n**n);
// let check = (n) => {
//     return n**n;    
// }
console.log(check(5));
console.log(check(2));
console.log(check(3));
console.log(check(10));