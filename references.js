console.log(0 === 0);
console.log(0 == 0);
console.log([0] == [0]);
console.log([true] == [true]);
console.log([1000] == [1000]);

let nums = ['a', 'b'];
let str = nums;
console.log(nums == str);

str.push('c');
console.log(str);
console.log(nums);
console.log(nums.pop());
console.log(str);
console.log(nums);

const array = [1, 2, 3, 4, 5];
console.log(array);

array.push(6);
console.log(array);
console.log(array.pop());
console.log(array.pop());
console.log(array.pop());
console.log(array.pop());
console.log(array.pop());
console.log(array.pop());

console.log(array);
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
console.log(array);

// array = [2, 4, 5]; ERROR
// array = colors;