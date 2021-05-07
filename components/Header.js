import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colours from '../constants/colours';
import TitleText from './TitleText';

const Header = (props) => {
  return(
    <View style={styles.header}>
      {/*<Text style={styles.headerTitle}>{props.title}</Text>*/}
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colours.primiary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  // headerTitle: {
  //   color: 'black',
  //   fontSize: 18
  // }
});

export default Header;
