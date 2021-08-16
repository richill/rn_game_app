import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions
} from 'react-native';
import Card from '../components/Card';
import Colours from '../constants/colours';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const dimissKeyboardHandler = () => {
    Keyboard.dismiss();
  };

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g), '');
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const selectNumberHandler = () => {
    props.onStartGame(selectedNumber);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      );
      return;
    };
    setSelectedNumber(chosenNumber);
    setConfirmed(true);
    // setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = 
    <Card style={styles.summaryContainer}>
      <Text>You selected</Text>
      <NumberContainer>{selectedNumber}</NumberContainer>
     <MainButton onPress={selectNumberHandler}>
       START GAME
     </MainButton>
    </Card>
  };

  return(
    <TouchableWithoutFeedback onPress={dimissKeyboardHandler}>
      <View style={styles.screen}>
        <Text style={styles.txtDance}>Start a new Game - Dance!</Text>
        <Text style={styles.txtOpenSans}>Start a new Game - txtOpenSans!</Text>
        <Text style={styles.txtOpenBold}>Start a new Game - txtOpenBold!</Text>
        <Text style={styles.txtOpenNormal}>Start a new Game - txtOpenNormal!</Text>
        <TitleText>Start a new Game - TitleText!</TitleText>
        <BodyText>Start a new Game - BodyText!</BodyText>
        <Card style={styles.InputConatiner}>
          <Text>Select a number</Text>
          <Input
            style={styles.input}
            blurOnSubmit autoCapitalize='none'
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" onPress={resetInputHandler} color={Colours.accent}/>
            </View>
            <View style={styles.button}>
              <Button title="Confirm" onPress={confirmInputHandler} color={Colours.primiary} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  InputConatiner: {
    width: '80%',
    maxWidth: '95%',
    minWidth: 300,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    // width: 100
    width: Dimensions.get('window').width / 4
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  txtDance: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'Dancing-Script'
  },
  txtOpenSans: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'Open-Sans'
  },
  txtOpenBold: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'Open-Sans-Bold'
  },
  txtOpenNormal: {
    fontSize: 20,
    marginVertical: 10,
  }
});

export default StartGameScreen;
