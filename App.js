import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'Dancing-Script': require('./assets/fonts/DancingScript-VariableFont_wght.ttf'),
    'Open-Sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'Open-Sans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log('Error')}
      />
    );
  };

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} computerGuessNumber={userNumber} onRestart={configureNewGameHandler}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Game App" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

// IMPORTANT:
// follow tutorial: https://www.youtube.com/watch?v=XyONtdhwICE
// if font does not display run the below commands
// rm -rf node_modules
// npm cache clean --force
// rm -rf .expo
// rm package-lock.json
// npm install

// -----------------

// AppLoading: it will prolong the default loading screen to stay active
// until untill all content of a certain task of my choice has been done or rendered
// related to dataloaded & setDataLoaded
// must install by running -  expo install expo-app-loading or npm install --save expo-app-loading

// import { AppLoading } from 'expo';

// expo install expo-app-loading
// import AppLoading from 'expo-app-loading';


// -----------------

// CSS styling
// adding additinal css to a css component
// look at the example of <BodyText> in GameOverScreen.js for resultText and BodyText.js 

// notes: styling: 
// https://reactnative.dev/docs/components-and-apis
// https://reactnative.dev/docs/view-style-props
// https://github.com/vitalets/react-native-extended-stylesheet/issues/97

