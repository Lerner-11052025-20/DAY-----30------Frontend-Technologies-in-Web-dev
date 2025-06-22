let max = prompt("Enter maximum number :- ");
max = parseInt(max); // error aapshe kemke tene re-assignment no kari sakay

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter your guessing number :- ");
while(true)
{
    if(guess == "Quit" || guess == 'quit')  
    {
        alert("You quited Game .... ");
        break;
    }
    else if(guess == random)
    {
        alert(`Your guess is matched with random generated number ${random} and YOU WIN THE GUESSING GAME` );
        break;
    }
    else if(guess > random)
    {
        alert("please enter SMALLER number to win.....")
    }
    else if(guess < random)
    {
        alert("please enter LARGER number to win.....")
    }
    else            
    {
        console.warn("Not matched... ");
        console.error("please try again....");
    }

    guess = prompt("Enter your guessing number :- ");
}