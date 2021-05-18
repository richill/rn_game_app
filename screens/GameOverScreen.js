import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = (props) => {
  return(
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          // source={require('../assets/success.png')}
          source={{uri: 'https://artloe.files.wordpress.com/2021/04/00_hg_00_blog.png'}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText>Number of rounds computer guessed: {props.roundsNumber}</BodyText>
      <BodyText>The number guess by the computer was: {props.computerGuessNumber}</BodyText>
      <Button title="New Game" onPress={props.onRestart}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 200,
  }
});

export default GameOverScreen;
