import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Colours from '../constants/colours';
import TitleText from './TitleText';

const Header = (props) => {
  return(
    <View style={styles.header}>
      {/*<Text style={styles.headerTitle}>{props.title}</Text>*/}
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === 'android' ? Colours.primiary : 'white',
    // note: platform allows user to set same styling as android
    // if my platform is not android and it is an IOS set the background colour to white
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
    //note: if the platform is ios set it #ccc if not set it white
    //note: if the platform is ios set it 1 if not set it 0 (androids will be set to 0 as it is not an iOS styling)
  },
  title: {
    color: Platform.OS === 'ios' ? Colours.primiary : 'white',
    fontSize: 18
  }
});

export default Header;
