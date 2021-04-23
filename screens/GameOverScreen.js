import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const GameOverScreen = (props) => {
  return(
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds computer guessed: {props.roundsNumber}</Text>
      <Text>The number guess by the computer was: {props.computerGuessNumber}</Text>
      <Button title="New Game" onPress={props.onRestart}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GameOverScreen;
