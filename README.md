# Tech for mobile apps
## Personal Mobile App Project Final 
## RPS-game
##  Team 30
Name: 
1 Surya Sarath Bharadwaj Pulla, 
2 Punith Reddy Dappili

## APP desciption
Upon launching the mobile app, you'll be greeted by a sleek interface featuring the title "RPS Game" prominently displayed at the top. Below the title, neatly arranged in a row, are three buttons: "Rock", "Paper", and "Scissors". These buttons serve as the player's interface to make their move in the game.

As you make your choice by tapping one of the buttons, the app instantly responds by displaying your selection under the label "Your choice:". Simultaneously, the computer, acting as your opponent, randomly selects its move, which is revealed under the label "Computer's choice:". Both choices are immediately visible, adding to the excitement of the game.

Directly below the choices, you'll find essential information about the current state of the game. "Your Score:" showcases the number of rounds you've won, while "Computer Score:" displays the computer's tally of victories. Additionally, "High Score:" highlights your best performance throughout the game session, encouraging you to strive for improvement.

To enhance user experience, the app provides a convenient "New Game" button positioned at the bottom. This button allows you to reset the game at any time, clearing all previous choices and scores and offering a fresh start for a new round of gameplay.

Complementing the functional aspects of the app is its aesthetic appeal, achieved through meticulous styling. The color scheme, typography, and layout are carefully crafted to provide a visually pleasing experience while maintaining clarity and readability, ensuring that users can focus on the excitement of the game without distraction.

## code explanation 
file: [App.js](App.js)
In this code we implements a simple Rock-Paper-Scissors game using React and React Native. 

1. **useState:** React hooks are used to manage state within the functional component. Several states are initialized using the useState hook:
   - playerVal: Stores the player's chosen value (Rock, Paper, or Scissors).
   - computerVal: Stores the computer's randomly chosen value (Rock, Paper, or Scissors).
   - playerScore: Stores the player's score.
   - compScore: Stores the computer's score.
   - highScore: Stores the high score achieved by the player.

2. **useEffect:** React hook useEffect is utilized to update the high score whenever the player's score exceeds the current high score. It runs after every render if the dependency array (in this case, playerScore) has changed.

3. **logic Function:** This function evaluates the outcome of the game based on the player's and computer's choices. It returns 1 if the player wins, -1 if the computer wins, and 0 if it's a tie.

4. **decision Function:** This function is called when the player makes a choice (Rock, Paper, or Scissors). It generates a random choice for the computer and evaluates the result using the logic function. Depending on the result, it updates the player's and computer's choices and scores accordingly.

5. **resetGame Function:** This function resets the game by setting all state variables to their initial values.

6. **Rendered Components:** The UI is composed of:
   - A title displaying "RPS Game".
   - Three buttons for the player to select Rock, Paper, or Scissors.
   - Text displaying the player's and computer's choices, scores, and high score.
   - A "New Game" button to reset the game.

