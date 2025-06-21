let message = "     Deep -       ";
console.log(message);
console.log(message.trim());
console.log(message);

console.log(message.toLowerCase());
console.log(message.toUpperCase());

console.log(message.includes("-"));
console.log(message.indexOf("-"));

message = "     Deep -   -   -    "
console.log(message);
console.log(message.indexOf("-"));
console.log(message.lastIndexOf("-"));

console.log(message.trim().substring(0, 2).toLowerCase());

let str = "ILoveCoding";
console.log(str);
console.log(str.toLowerCase());
console.log(str.slice(0));
console.log(str.slice(1,4));
console.log(str.slice(1,5));
console.log(str.slice(1));
console.log(str.slice(5));
console.log(str.slice(5, str.length));
console.log(str.length);
console.log(str.slice(5, str.length-1));
console.log(str.slice(-1));
console.log(str.slice(-2));
console.log(str.slice(0-str.length)); // 0-11 ===> -11 ---> str.length 11-11 ==== 0 to last index

console.log(str.replace("love", "do"));
console.log(str.replace("Love", "do"));
console.log(str.replace("I", "do"));

console.log(str.repeat(5));
console.log(str.repeat(3));