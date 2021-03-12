import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../components/Card';
import Colours from '../constants/colours';
import Input from '../components/Input';

const StartGameScreen = (props) => {

  const [enteredValue, setEnteredValue] = useState('');

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g), '');
  };

  const dimissKeyboardHandler = () => {
    Keyboard.dismiss();
  };

  return(
    <TouchableWithoutFeedback onPress={dimissKeyboardHandler}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new Game!</Text>

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
              <Button title="Reset" onPress={() => {}} color={Colours.accent}/>
            </View>
            <View style={styles.button}>
              <Button title="Confirm" onPress={() => {}} color={Colours.primiary} />
            </View>
          </View>
        </Card>
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
    width: 300,
    marginTop: 10,
    maxWidth: '80%'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 100
  },
  input: {
    width: 50,
    textAlign: 'center'
  }
});

export default StartGameScreen;
