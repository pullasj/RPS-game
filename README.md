# Tech for mobile apps
## Personal Mobile App Project Final 
## RPS-game
##  Team 30
## Name: 
## 1 Surya Sarath Bharadwaj Pulla, 
## 2 Punith Reddy Dappili

[app.js](app.js)
In this code we implements a simple Rock-Paper-Scissors game using React and React Native. Let's break down the key components and functionalities:

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

