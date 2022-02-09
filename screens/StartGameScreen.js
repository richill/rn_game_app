import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
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
  const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 3);

  const dimissKeyboardHandler = () => {
    Keyboard.dismiss();
    // dismisses the keyboard when you touch (TouchableWithoutFeedback) elsewhere on the screen
  };

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g), '');
    // replace is validating with a regex that the input is only a number
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 3);
    };

    const rotationChanged = Dimensions.addEventListener('change', updateLayout);
    // notes: this will make sure the dimensions are refreshed when the app rotates to landscape or portrait
    return () => {
      if (rotationChanged) {
        rotationChanged.remove();
      }
    };
  });
  // notes: enables code to be run when ever our component is rendered

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
    <ScrollView>
      <KeyboardAvoidingView behaviour="position" KeyboardVerticalOffset={30}>
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
                <View style={{width: buttonWidth}}>
                  <Button title="Reset" onPress={resetInputHandler} color={Colours.accent}/>
                </View>
                <View style={{width: buttonWidth}}>
                  <Button title="Confirm" onPress={confirmInputHandler} color={Colours.primiary} />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
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
  // button: {
    // width: 100
    // notes: can use window or screen but window excludes status bar and calculates height and width
    // notes: dimensions.get is only calculated when the app starts when the app is rotated the dismension.get is not refreshed it still remains the same
    // notes: do not use dimesnsion.get for a rotatable app - use const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 3);
    // width: Dimensions.get('window').width / 3
  // },
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
    fontFamily: 'Dancing-Script',
    display: 'none'
  },
  txtOpenSans: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'Open-Sans',
    display: 'none'
  },
  txtOpenBold: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'Open-Sans-Bold',
    display: 'none'
  },
  txtOpenNormal: {
    fontSize: 20,
    marginVertical: 10,
    display: 'none'
  }
});

export default StartGameScreen;
