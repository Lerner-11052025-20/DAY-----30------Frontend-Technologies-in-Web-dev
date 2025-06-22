const stud = {
    name: "Deep",
    age: 20
};

const nested = {
    deep: {
        age: 20,
        grade: 'a'.toUpperCase(),
        city: "ST",
        marks: [100, 95, 83]
    },
    aman: {
        age: 19,
        city: "surat"
    },
    meet: {
        age: 20,
        city: "surat"
    }
};

console.log(nested);
console.log(nested.aman);
console.log(nested.deep);
console.log(nested.deep.grade);
console.log(nested.deep.age);
console.log(nested.deep.marks[0]);