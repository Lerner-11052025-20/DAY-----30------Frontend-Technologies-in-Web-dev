console.log("hello1");

let id = setInterval(() => {
    console.log("hello");
}, 2000);

console.log("hello2");
setTimeout(() => {
    clearInterval(id);
}, 10000);
console.log("hello2");