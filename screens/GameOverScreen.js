import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = (props) => {
  return(
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <Image source={require('../assets/success.png')}/>
      <BodyText>Number of rounds computer guessed: {props.roundsNumber}</BodyText>
      <BodyText>The number guess by the computer was: {props.computerGuessNumber}</BodyText>
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
