import { useState } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameisOver] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameisOver(false);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} roundsNumber={roundsNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={roundsNumber} onStartNewGame={newGameHandler}/>;
  }

  function gameOverHandler() {
    setGameisOver(true);
  }

  function newGameHandler() {
    setUserNumber(null);
    setRoundsNumber(0);
  }

  return (
    <ImageBackground
      style={styles.mainScreen}
      source={require("./assets/images/dice.jpeg")}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
    >
      <SafeAreaView style={styles.mainScreen}>{screen}</SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
