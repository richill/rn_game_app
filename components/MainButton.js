import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colours from '../constants/colours';

const MainButton = (props) => {
  return(
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default MainButton;
