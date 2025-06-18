let age = 3;

if(age >= 18)   console.log("you can drive...");
else    console.log("you can't drive...");

let day = 20;
if(day === 1)
    console.log("Monday");
else if (day === 2)
    console.log("Tuesday");
else    
    console.log("holiday");

let color = "red";
color = "green";
color = "Green";
switch (color) 
{
    case "red":
        console.log("STOP");
        break;
    case "green":
    case "Green":
        console.log("Go.......");
        // break;
    case "yellow":
        console.log("Go SLOW...");
        break;

    default:
        console.log("INVALID INPUT");
}