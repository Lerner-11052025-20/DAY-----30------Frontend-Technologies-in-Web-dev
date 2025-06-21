let nums = [1, 2, 3, 4, 5];
console.log(nums);

nums.push(6);
console.log(nums);
nums.push(7);
console.log(nums);
nums.push(8);
console.log(nums);

nums.pop();
console.log(nums);
nums.pop();
console.log(nums);
nums.pop();
console.log(nums);
nums.pop();
console.log(nums);

nums.push(5);
console.log(nums);

nums.unshift(0);
console.log(nums);
nums.unshift(-1);
console.log(nums);
nums.unshift(-2);
console.log(nums);

console.log(nums.shift());
console.log(nums);
console.log(nums.shift());
console.log(nums);
console.log(nums.shift());
console.log(nums);

// console.log(nums.length);  5

console.log(nums.indexOf(5));
console.log(nums.indexOf(50));
console.log(nums.includes(5));
console.log(nums.includes(50));

let nums2 = [6, 7, 8, 9, 10];
console.log(nums);
console.log(nums2);
console.log(nums.concat(nums2));
console.log(nums);
console.log(nums2);

console.log(nums.reverse());
console.log(nums2.reverse());
console.log(nums);
console.log(nums2);
