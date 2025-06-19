let todo = [];
let req = prompt("Enter your request :- ");

while(true)
{
    if(req === 'quit')
    {
        console.log("You exited...");
        break;
    }
    else if(req === 'list')
    {
        // for(i of todo)  console.log(i);
        for(let i=0 ; i<todo.length ; i++)  console.log(i, todo[i]);
        // for(let i=0 ; i<todo.length ; i++)  console.log(i+ " " +todo[i]);
    }
    else if (req === 'add')
    {
        let temp = prompt("Add your task here....");
        todo.push(temp);
        console.warn("task added");
    }
    else if(req === 'delete')
    {
        let index = prompt("Enter your task index that you want to delete||complete...");
        todo.splice(index, 1);
        console.warn("task completed");
    }
    else 
    {
        alert("Invalid user input!!! , please try again");
        console.error("invalid input!!!");
        console.error("please try again");
    }

    req = prompt("Enter your request :- ");
}