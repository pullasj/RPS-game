import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const App = () => {
  const [playerVal, setPlayerVal] = useState(null);
  const [computerVal, setComputerVal] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    // Update high score when player score exceeds the current high score
    if (playerScore > highScore) {
      setHighScore(playerScore);
    }
  }, [playerScore]);

  const logic = (playerVal, computerVal) => {
    if (playerVal === computerVal) {
      return 0;
    } else if (
      (playerVal === "ROCK" && computerVal === "SCISSORS") ||
      (playerVal === "SCISSORS" && computerVal === "PAPER") ||
      (playerVal === "PAPER" && computerVal === "ROCK")
    ) {
      return 1;
    } else {
      return -1;
    }
  };

  const decision = (playerChoice) => {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const compChoice =
      choices[Math.floor(Math.random() * choices.length)];
    const val = logic(playerChoice, compChoice);
    if (val === 1) {
      setPlayerVal(playerChoice);
      setComputerVal(compChoice);
      setPlayerScore(playerScore + 1);
    } else if (val === -1) {
      setPlayerVal(playerChoice);
      setComputerVal(compChoice);
      setCompScore(compScore + 1);
    } else {
      setComputerVal(compChoice);
      setPlayerVal(playerChoice);
    }
  };

  const resetGame = () => {
    setPlayerVal(null);
    setComputerVal(null);
    setPlayerScore(0);
    setCompScore(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RPS Game</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => decision("ROCK")}
        >
          <Text style={styles.buttonText}>Rock</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => decision("PAPER")}
        >
          <Text style={styles.buttonText}>Paper</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => decision("SCISSORS")}
        >
          <Text style={styles.buttonText}>Scissors</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Your choice: {playerVal}</Text>
        <Text style={styles.scoreText}>
          Computer's choice: {computerVal}
        </Text>
        <Text style={styles.scoreText}>Your Score: {playerScore}</Text>
        <Text style={styles.scoreText}>Computer Score: {compScore}</Text>
        <Text style={styles.scoreText}>High Score: {highScore}</Text>
        <TouchableOpacity style={styles.newGameButton} onPress={resetGame}>
          <Text style={styles.newGameButtonText}>New Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    color: "#fff",
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: "#4caf50",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#4caf50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
    elevation: 4, // Add elevation for Android shadows
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  scoreContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  scoreText: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  newGameButton: {
    backgroundColor: "#ff5722",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  newGameButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;