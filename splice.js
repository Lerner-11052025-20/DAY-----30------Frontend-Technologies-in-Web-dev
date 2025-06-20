let colors = ["red", "green", "blue", "yellow"];
console.log(colors);
console.log(colors.sort());
console.log(colors);
console.log(colors.splice(0));
console.log(colors);
// console.log(colors.splice(1));
colors = ["red", "green", "blue", "yellow"];
console.log(colors);

console.log(colors.splice(3, 0));
console.log(colors);
console.log(colors.splice(3, 1));
console.log(colors);
console.log(colors.splice(2, 0));
console.log(colors);
console.log(colors.splice(3, 0, "YELLOW"));
console.log(colors);
console.log(colors.splice(3, 0, "YELLOW23"));
console.log(colors);

console.log(colors.splice(0, 1));
console.log(colors);
console.log(colors.splice(0, 0, "red", "red23"));
console.log(colors);
console.log(colors.splice(1, 1, "RED23"));
console.log(colors);
console.log(colors.splice(0, 0, "-------", "342423", "fsdfas"));
console.log(colors);


let nums = [29, 100, 332, 23341, 1441234, 92345];
console.log(nums);
console.log(nums.sort());
console.log(nums);