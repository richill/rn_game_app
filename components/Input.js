import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = (props) => {
  return(
    <TextInput {...props} style={{ ...styles.input, ...props.style}}></TextInput>
  );
}

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10
  }
});

// notes:
// { ...props }: fowarding your props to the component you are using
// takes all your props & adds them to your component

// {{ ...props.style}}: allows you to have additional styling for 
// TextInput outside of the component
