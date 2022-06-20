import { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Alert, Pressable, FlatList } from "react-native";

import Title from "../components/Title";
import Colors from "../constants/colors";
import AnimatedLottieView from "lottie-react-native";
import GuessLogItem from '../components/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

minBoundary = 1;
maxBoundary = 100;

function GameScreen({ roundsNumber, userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const animationMinus = useRef(null);
  const animationPlus = useRef(null);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(10);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, [])

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Play Fair!", "You must have forgotten your number.", [
        { test: "Woops...", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      animationMinus.current.play();
      maxBoundary = currentGuess;
    } else {
      animationPlus.current.play();
      minBoundary = currentGuess + 1;
    }

    const newRandom = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandom);
    setGuessRounds(previousGuessRounds => [newRandom, ...previousGuessRounds]);
  }

  return (
    <View style={styles.screen}>
      <Title>GUESS:</Title>
      <Text style={styles.currentGuess}>{currentGuess}</Text>
      <View style={styles.buttonsWrap}>
        <Pressable
          style={styles.gameButton}
          onPress={nextGuessHandler.bind(this, "lower")}
        >
          <AnimatedLottieView
            source={require("../assets/lotties/minus.json")}
            style={styles.lottie}
            autoPlay
            loop={false}
            ref={animationMinus}
            speed={2}
          />
        </Pressable>
        <Pressable
          style={styles.gameButton}
          onPress={nextGuessHandler.bind(this, "higher")}
        >
          <AnimatedLottieView
            source={require("../assets/lotties/plus.json")}
            style={styles.lottie}
            autoPlay
            loop={false}
            ref={animationPlus}
            speed={2}
          />
        </Pressable>
      </View>
      <View style={styles.guessList} >
        <FlatList
        data={guessRounds} 
        renderItem={(itemData) => <GuessLogItem guess={itemData.item} />} 
        keyExtractor={(item) => item} />
        {/* {guessRounds.map((round) => <Text key={round}>{round}</Text>)} */}
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <AnimatedLottieView
          source={require("../assets/lotties/dice.json")}
          style={styles.lottie}
          autoPlay
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    fontFamily: 'open-sans',
    flex: 1,
    padding: 30,
  },
  currentGuess: {
    textAlign: "center",
    fontSize: 80,
  },
  buttonsWrap: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  guessList: {
    flexDirection: 'row',
    
  },
  lottie: {
    width: "100%",
  },
  gameButton: {
    backgroundColor: Colors.primaryOrange,
    padding: 4,
    borderRadius: "50%",
    width: 100,
    margin: 10,
  },
});

export default GameScreen;
