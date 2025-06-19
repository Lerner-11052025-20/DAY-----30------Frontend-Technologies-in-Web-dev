let movie = "avtar";
let guess = prompt("Enter your movie name");

while(true)
{
    if (guess === "avtar" || guess === 'Avtar')
    {
        console.log("CONGRATULATIONS!!!");
        console.log("You win the guessing game....");
        break;
    }
    else if(guess === 'quit' || guess === 'Quit')
    {
        console.log("You QUIT the guessing game....");
        break;
    }
    else
    {
        console.error("please try again!!!");
    }

    guess = prompt("Enter your movie name AGAIN :- ");
}