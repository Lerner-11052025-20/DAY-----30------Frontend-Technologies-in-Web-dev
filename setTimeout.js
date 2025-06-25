console.log("hello1");

let id = setTimeout(() => {
    console.log("hello", id);
}, 2000);

console.log("hello2");
// clearTimeout(id);