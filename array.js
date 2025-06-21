let nums = [1, 2, 3, 4, 5];
console.log(nums);
console.log(typeof nums);
console.log(typeof 1);
console.log(typeof '');
console.log(nums[0]);
console.log(nums[nums.length]);
console.log(nums[nums.length-1]);
console.log("deep"[3]);

let info = ["deep", "Sorathiya", 20, "Nirma", 106000, "DSA", 8.5, 8.42];
console.log(info);
for(let i=0 ; i<info.length ; i++)  console.log(info[i]+ " ");
for(i of info)  console.log(i);
console.log(info);
console.log(info.length);

console.log();
console.log([].length);
console.log([0, 1].length);
console.log([1, 2, 3, 4, 5][0]);

console.log(info[0]);
console.log(info[0][0]);
console.log(info[0][3]);
info[12] = "12th index";
console.log(info);
console.log(info.length);
info[20] = "20th index";
console.log(info);
console.log(info.length);
console.log(info.pop());
console.log(info.length);
console.log(info);
console.log(info.pop());
console.log(info.length);
console.log(info);