import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Colours from '../constants/colours';
import TitleText from './TitleText';

const Header = (props) => {
  return(
    <View style={{...styles.headerBase, ...Platform.select({ios: styles.headerIOS, android: styles.headerAndriod})}}>
      {/*<Text style={styles.headerTitle}>{props.title}</Text>*/}
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Platform.OS === 'ios' ? Colours.primiary : 'white',
    fontSize: 18
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerAndriod: {
    backgroundColor: Colours.primiary,
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
  },
});

export default Header;
