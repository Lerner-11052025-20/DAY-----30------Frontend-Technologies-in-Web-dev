const student = {
    name: "deep",
    age: 20,
    marks: [100, 95, 83],
    city: "ST",
    cgpa: 8.5
};

console.log(student);
console.log(student.age);
console.log(student.name);
console.log(student["marks"]);
console.log(student["age"]);


// create
const post = {
    username: "deep",
    content: "DSA protfolio dev",
    likes: 450,
    reposts: 10,
    tags: ["#DSA", "#A-Z stiver DSA sheet", "#dev"]
};


// access
console.log(post);
console.log(post.content);
console.log(post["tags"]);
console.log(post.username);
console.log(post["reposts"]);
console.log(post.tags[0]);
console.log(post.content[0]);
console.log(post.content);
// console.log(post["tags"[0]]);

let temp = post["likes"];
console.log(temp);
temp = post.likes;
console.log(temp);

console.log(post.tags);
console.log(post.username);
console.log(post.content);
console.log(post.reposts);
console.log(post.likes);

// update
post.content = "DSA";
console.log(post);
post["content"] = "dev portfolio";
console.log(post);
post.tags[2] = "project";
console.log(post);
post.tags[3] = "project-Portfolio";
console.log(post);

//add
post.tuf = "15%";
console.log(post);
post["LC"] = 28;
console.log(post);
post.GitHub = 9;
console.log(post);

//remove
console.log(delete post.reposts);
console.log(post);
console.log(delete post.LC);
console.log(post);
console.log(delete post.GitHub);
console.log(post);
console.log(delete post["likes"]);
console.log(post);