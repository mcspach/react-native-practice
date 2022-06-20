import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(input) {
    setEnteredNumber(input);
  }

  function clearInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: clearInputHandler },
      ]);
      return;
    }
    props.onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Add Secret Number</Title>
      <View style={styles.gameBox}>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonBox}>
          <PrimaryButton onPress={clearInputHandler}>Reset</PrimaryButton>
          <PrimaryButton onPress={confirmInputHandler}>
            Start Game
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
  gameBox: {
    marginTop: 12,
    padding: 12,
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
  },
  input: {
    color: "black",
    width: 80,
    padding: 12,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 8,
    fontSize: 42,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default StartGameScreen;
