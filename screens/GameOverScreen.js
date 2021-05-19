import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colours from '../constants/colours';

const GameOverScreen = (props) => {
  return(
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          // source={{uri: 'https://artloe.files.wordpress.com/2021/04/00_hg_00_blog.png'}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>Number of rounds computer guessed: <Text style={styles.highlight}>{props.roundsNumber}</Text></BodyText>
        <BodyText style={styles.resultText}>The number guess by the computer was: <Text style={styles.highlight}>{props.computerGuessNumber}</Text></BodyText>
      </View>
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
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
  resultText: {
    textAlign: 'center',
    fontSize: 16
  },
  highlight: {
    color: Colours.primiary,
    fontFamily: 'Open-Sans-Bold',
  }
});

export default GameOverScreen;
