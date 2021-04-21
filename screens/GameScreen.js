import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card  from '../components/Card';




const GameScreen = (props) => {
  const generateRandombetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
      return generateRandombetween(min, max, exclude);
    } else {
      return  rndNum;
    }
  }

  const [currentGuess, setCurrentGuesss] = useState(
    generateRandombetween(1, 100, props.userChoice)
  );

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuesssHandler = (direction) => {
    if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
      Alert.alert(
        'Do not lie',
        'in giving the Opponent the wrong direction',
        [{ text: 'Sorry!', style:'cancel' }]
      );
      return;
    };

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandombetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuesss(nextNumber);
  };

  return(
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={nextGuesssHandler.bind(this, 'lower')}/>
        <Button title="GREATER" onPress={nextGuesssHandler.bind(this, 'greater')}/>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  }
});

export default GameScreen;
