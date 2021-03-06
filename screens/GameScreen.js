import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NumberContainer from '../components/NumberContainer';
import Card  from '../components/Card';
import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';
import DefaultStyles from '../constants/default-styles';

// const renderListItem = (value, numOfRounds) => (
//   <View key={value} style={styles.listItem}>
//     <BodyText>#{numOfRounds}</BodyText>
//     <BodyText>{value}</BodyText>
//   </View>
// );

// using FlatList
const renderListItem = (listLength, itemData) => (
  <View style={styles.listItem}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </View>
);

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
  // const [pastGuesses, setPastGuesses] = useState([initialGuess]);

  // using FlatList
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  // we use object destructing to destructure my props
  // this is an array destructuring for objects which allows us to store these properties in constants
  // pulling properties names out of props objects and storing them in constants. So on L:64 rather than props.userChoie we can just write userChoice
  const { userChoice, onGameOver } = props;

  // this method is executed only after the above cycle has been rendered (not before or simultaneously)
  // first argument is the function that executes after rendering the component
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
    // setPastGuesses(currentPastGuesses => [nextNumber, ...currentPastGuesses]);
    // using FlatList
    setPastGuesses(currentPastGuesses => [nextNumber.toString(), ...currentPastGuesses]);
  };

  return(
    <View style={styles.screen}>
      <Text style={DefaultStyles.bodyText}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        {/*notes: <Card style={Dimensions.get('window').height > 600 ? styles.buttonContainer : styles.buttonContainerSmall}>*/}
        {/*notes: can make components responsive with styling ie. if height is > 600 use styles.buttonContainer otherwise use styles.buttonContainerSmall*/}
        <MainButton onPress={nextGuesssHandler.bind(this, 'lower')}>
          <Ionicons name="md-remove" size={24} color="white"/>
        </MainButton>
        <MainButton onPress={nextGuesssHandler.bind(this, 'greater')}>
          <Ionicons name="md-add" size={24} color="white"/>
        </MainButton>
      </Card>
      
      <View style={styles.listContainer}>
        {/*<ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
        </ScrollView>*/}

        {/*flatList is better if you do not know how many items would be in the list*/}
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
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
    // marginTop: 20,
    marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
    //note: if the dimension of the screen is greater than 600 set margin to 20 else set to 10
    width: 400,
    maxWidth: '90%'
  },
  listContainer: {
    flex: 1,
    width: Dimensions.get('window').width > 350 ? '60%' : '80%'
  },
  list: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 12,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
});

export default GameScreen;


// NOTES
// useRef = consistently stores data & is updated based on new data not when the game/browser is refresed

// responsive design
// sectio 05 - lesson 92
// can use this structure for responsive design
// if (Dimensions.get('window').height > 600) {
//   return(
//     <View></View>
//   )
// };





