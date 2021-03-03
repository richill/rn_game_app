import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Card from '../components/Card';
import Colours from '../constants/colours';

const StartGameScreen = (props) => {
  return(
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new Game</Text>

      <Card style={styles.InputConatiner}>
        <Text>Select a number</Text>
        <TextInput />
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
    marginVertical: '10'
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
  }
});

export default StartGameScreen;
