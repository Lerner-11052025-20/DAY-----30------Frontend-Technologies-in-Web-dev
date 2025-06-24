const student = {
    name: "deep",
    age: 20,
    city: "Ahmedabad",
    maths: 100,
    chemistry: 95,
    physics: 83,
    getInfo: function () {
        console.log(this);
        console.log((this.maths + this.chemistry + this.physics) / 3);
    },
    getPercentage() {
        console.log(this);
        console.log((this.maths + this.chemistry + this.physics) / 3);
    },
    getPT: () => {
        console.log(this); // // this and arrow fun hovathi te this ee parent na scope ne aatle syudent no scope outside ma { } ma joshe je window obj thase jethi window print karshe
        console.log((this.maths + this.chemistry + this.physics) / 3);        // window obj ma maths define no hovathi as key te NaN print karshe vs code ma and browser ma bane ma 
    }
}
// 20
// VM18:9 {name: 'deep', age: 20, city: 'Ahmedabad', maths: 100, chemistry: 95, …}age: 20chemistry: 95city: "Ahmedabad"getInfo: ƒ ()getPT: () => {…}getPercentage: ƒ getPercentage()maths: 100name: "deep"physics: 83[[Prototype]]: Object
// VM18:10 92.66666666666667
// VM18:24 92.66666666666667
// VM18:13 {name: 'deep', age: 20, city: 'Ahmedabad', maths: 100, chemistry: 95, …}
// VM18:14 92.66666666666667
// VM18:17 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// VM18:18 NaN
// undefined

console.log(student.age);
student.getInfo();
console.log(92.66666666666667);
student.getPercentage();
student.getPT();

function getPercentage() {
    console.log(this);
}

// window.getPercentage(); // by default
getPercentage();