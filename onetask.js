let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';

// these two variables will be changed to test the conditional
let firstPlayerChoice;
let secondPlayerChoice;

let firstPossibility;
let secondPossibility;
let thirdPossibility;

let fourthPossibility;
let fifthPossibility;
let sixthPossibility;

let seventhPossibility;



/*For this exercise we will be creating a conditional statement for the popular rock, paper, scissors game! The variables firstPlayerChoice and secondPlayerChoice will be the choices from each player that we will use to test the conditional. Then we have seven variables where we will store the boolean values for the seven possible scenarios in a normal game: three for payer one winning, three for player two winning and one for a tie.

Now you can figure out the logic yourself too or follow this step by step guide.

Task Steps

Let's start by filling out the variable firstPossibility with the first possible scenario. We want to evaluate if the firstPlayerChoice is equal to paper and if the secondPlayerChoice is equal to rock and save the result into the variable. For now, there is no need for a conditional statement, we just want to store the boolean result of the conditions using comparison and logical operators.

After we are done with the first variable we want to do the rest with the other five. These six in total will make up for all possible scenarios where one player will win! So fill them out and make sure you have the correct variables names! The first three should make the first player a winner, and the last three would make the second player a winner.

Now, let's create the last scenario and store it into the seventhPossibility, where both choices are the same, resulting in a tie!

Finally, it's time for the conditional statement! So, create an if statement that checks if either one of the first three possibilities occurred, giving the win to the first player. Since we stored the boolean result inside the variables you can use them for the conditions. And for the statement, you can add a console.log() with "first player won!".

Now create an else if statement that handles the next three scenarios where player two wins.

And lastly, finish the conditional with another statement for the seventh possibility and one last else that should simply add a console.log() with "something went wrong!" */