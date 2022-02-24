import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Colours from '../constants/colours';

const MainButtonOriginal = (props) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return(
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.8} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: Colours.primiary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Open-Sans',
    fontSize: 18
  }
});

export default MainButtonOriginal;

// notes:
// we want to use TouchableOpacity on ios &
// TouchableNativeFeedback on andriod
