const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nums);

const nested = [
    {
        name: "deep",
        age: 20,
        grade: 'a'.toUpperCase(),
        city: "ST",
        marks: [100, 95, 83]
    },
    {
        name: "deep",
        age: 20,
        grade: 'a'.toUpperCase(),
        city: "ST",
        marks: [100, 95, 83]
    },
    {
        name: "deep2",
        age: 20,
        grade: 'a'.toUpperCase(),
        city: "ST",
        marks: [100, 95, 83]
    }
];

console.log(nested); // [ {}, {}, {} ]
console.log(nested[0]);
console.log(nested[3]);
console.log(nested[3-1]);
console.log();
nested[2].city = "surat";
console.log(nested);

