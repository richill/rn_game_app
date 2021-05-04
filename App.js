import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { AppLoading } from 'expo-app-loading';
// import * as Font from 'expo-font';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

// const [fetchFonts] = () => {
//   Font.loadAsync({
//     'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf'),
//   });
// };
// added outside of the functional components
// because this function does not need to be recreated for every component re-render cycle

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  // const [dataLoaded, setDataLoaded] = useState(false);

  // if (!dataLoaded) {
  //   return (
  //     <AppLoading 
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //     />
  //   );
  // }
  // This function will be excuted when the fetchFonts is done

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

  let [fontsLoaded] = useFonts({
    "open-sans": require('./assets/Fonts/OpenSans-Regular.ttf'),
    "open-sans-bold": require('./assets/Fonts/OpenSans-Bold.ttf'),
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.screen}>
        <Header title="Game App" />
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

// AppLoading: it will prolong the default loading screen to stay active
// until untill all content of a certain task of my choice has been done or rendered
// related to dataloaded & setDataLoaded
// must install by running -  expo install expo-app-loading or npm install --save expo-app-loading

// notes: styling: 
// https://reactnative.dev/docs/components-and-apis
// https://reactnative.dev/docs/view-style-props
// https://github.com/vitalets/react-native-extended-stylesheet/issues/97

// import { AppLoading } from 'expo';

// expo install expo-app-loading
// import AppLoading from 'expo-app-loading';

