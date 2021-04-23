import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} computerGuessNumber={userNumber} onRestart={configureNewGameHandler}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Game App" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

// notes: styling: 
// https://reactnative.dev/docs/components-and-apis
// https://reactnative.dev/docs/view-style-props
// https://github.com/vitalets/react-native-extended-stylesheet/issues/97

// import { AppLoading } from 'expo';

// expo install expo-app-loading
// import AppLoading from 'expo-app-loading';
