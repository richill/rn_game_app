import React from 'react';
import { StyleSheet, Text } from 'react-native';

const BodyText = (props) => {
  return(
    // <Text style={styles.body}>{props.children}</Text>
    <Text style={{...styles.body, ...props.style}}>{props.children}</Text>
    //when we want to add additional stylings in other components eg: GameoverScreen.js - resultText
    // if not we use the above element
  );
}

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Open-Sans',
  }
});

export default BodyText;
