import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const StartGameScreen = (props) => {
  return(
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new Game</Text>

      <View style={styles.InputConatiner}>
        <Text>Select a number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}}/>
          <Button title="Confirm" onPress={() => {}}/>
        </View>
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
  title: {
    fontSize: 20,
    marginVertical: '10'
  },
  InputConatiner: {
    width: 300,
    marginTop: 10,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: 'black',                           //works only on IOS
    shadowOffset: { width: 0, height: 2 },          //works only on IOS
    shadowRadius: 6,                                //works only on IOS
    shadowOpacity: 0.26,                            //works only on IOS
    elevation: 5,                                   //works only on andriod
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
});

export default StartGameScreen;
