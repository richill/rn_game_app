import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card  from '../components/Card';
import DefaultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';
import { Ionicons } from '@expo/vector-icons';

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

  const initialGuess = generateRandombetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuesss] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  // we use object desctructing to destructure my props
  // this is an array destructuring for objects which allows us to store these properties in constants
  const { userChoice, onGameOver } = props;

  // this method is excuted only after the above cycle has been redendered (not before or simultaneously)
  // first argument is the function that excutes after rendering the coponent
  // second argument is an array of dependencies of the function
  // we don't want to use the props. as it changes when the parent changes & therefore not a good check
  // therefore we deconstruct inorder just to use 'userChoice' & 'onGameover'

  // userEffect(() => {
  //   if (currentGuess === props.userChoice) {
  //     props.onGameOver(rounds);
  //   }
  // }, [currentGuess, props.userChoice, props.onGameOver]);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuesssHandler = (direction) => {
    if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
      Alert.alert(
        'Don\'t lie!',
        'in giving the Opponent the wrong direction',
        [{ text: 'Sorry!', style:'cancel' }]
      );
      return;
    };

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandombetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuesss(nextNumber);
    // setRounds(currentRounds => currentRounds + 1);
    setPastGuesses(currentPastGuesses => [nextNumber, ...currentPastGuesses]);
  };

  return(
    <View style={styles.screen}>
      <Text style={DefaultStyles.bodyText}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuesssHandler.bind(this, 'lower')}>
          <Ionicons name="md-remove" size={24} color="white"/>
        </MainButton>
        <MainButton onPress={nextGuesssHandler.bind(this, 'greater')}>
          <Ionicons name="md-add" size={24} color="white"/>
        </MainButton>
      </Card>
      <ScrollView>
        {pastGuesses.map(guess => (
          <View key={guess}>
            <Text>{guess}</Text>
          </View>
        ))}
      </ScrollView>
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
    width: 400,
    maxWidth: '90%'
  }
});

export default GameScreen;

// useRef = consistently stores data & is updated based on new data not when the game/browser is refresed

