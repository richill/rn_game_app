import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TitleText = (props) => {
  return(
    <Text style={styles.title}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Open-Sans-Bold',
    fontSize: 18
  }
});

export default TitleText;
