function check(req)
{
    if(req === "odd")
    {
        return function(n){
            console.log(n%2 != 0);
        }
    }
    else if(req === "even")
    {
        return function(n){
            console.log(n%2 == 0);
        }
    }
    else 
    {
        console.log("Bad Request.....");
    }
}

let temp = check("odd");
temp(2);
temp(5);

temp = check("even");
temp(2);
temp(5);