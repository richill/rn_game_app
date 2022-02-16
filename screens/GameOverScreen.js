import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, Dimensions, ScrollView } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colours from '../constants/colours';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return(
    <ScrollView>
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
          <BodyText style={styles.resultText}>
            <Text>Number of rounds computer guessed: </Text>
            <Text style={styles.highlight}>{props.roundsNumber}</Text>
          </BodyText>
          <BodyText style={styles.resultText}>
            <Text>Number guessed by the computer was: </Text>
            <Text style={styles.highlight}>{props.computerGuessNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>
         New Game
       </MainButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  imageContainer: {
    // width: 300,
    // height: 300,
    // borderRadius: 200,
    // marginVertical: 30
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: Dimensions.get('window').width * 0.7 / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 200,
  },
  resultContainer: {
    // width: '80%',
    // marginVertical: 15,
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 60
  },
  resultText: {
    // fontSize: 16
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 14 : 16
  },
  highlight: {
    color: Colours.primiary,
    fontFamily: 'Open-Sans-Bold',
  }
});

export default GameOverScreen;
