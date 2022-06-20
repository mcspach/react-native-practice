import { StyleSheet, View, Text } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import AnimatedLottieView from "lottie-react-native";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
  <View style={styles.screen}>
    <Title>Game Over!</Title>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <AnimatedLottieView
          source={require("../assets/lotties/lucky-cat.json")}
          style={styles.lottie}
          autoPlay
        />
      </View>
      <Text style={styles.detailsText}>Your number was <Text style={styles.bigText}>{userNumber}</Text></Text>
      <Text style={styles.detailsText}>It took <Text style={styles.bigText}>{roundsNumber}</Text> guesses to get it right.</Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
  </View>
  )}

const styles = StyleSheet.create({
  screen: {
    fontFamily: 'open-sans',
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    },
  lottie: {
    width: "100%",
  },
  detailsText: {
    marginBottom: 20,
  },
  bigText: {
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
  }
});


export default GameOverScreen;
