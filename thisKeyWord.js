const student = {
    name: "deep",
    age: 20,
    city: "Ahmedabad",
    maths: 100,
    chemistry: 95,
    physics: 83,
    property: this,
    getInfo: function () {
        console.log((this.maths + this.chemistry + this.physics) / 3);
    },
    getPercentage() {
        console.log((this.maths + this.chemistry + this.physics) / 3);
    },
    getPT: () => {
        console.log(this); 
        console.log((this.maths + this.chemistry + this.physics) / 3);  
    },
    getInfo2: function () {
        setTimeout(() => {
            console.log(this);
        }, 1000);
    },
    getInfo3: function () {
        setTimeout(function(){
            console.log(this);
        }, 1000);
    }
}

console.log(student.age);
student.getInfo();
student.getPercentage();
student.getPT();
console.log(student.property);

student.getInfo2(); // parent no scope means getInfo2() method or key no scope ee to maro outside tena karta means { } aa thase jethi teno scope ee mari student obj thase
student.getInfo3();